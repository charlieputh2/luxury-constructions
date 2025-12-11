package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

type Database struct {
	conn *sql.DB
}

type ContactRequest struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Phone   string `json:"phone" binding:"required"`
	Message string `json:"message" binding:"required"`
	Service string `json:"service" binding:"required"`
}

type ContactResponse struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Phone     string    `json:"phone"`
	Message   string    `json:"message"`
	Service   string    `json:"service"`
	CreatedAt time.Time `json:"created_at"`
	Status    string    `json:"status"`
}

type Hub struct {
	clients    map[*Client]bool
	broadcast  chan interface{}
	register   chan *Client
	unregister chan *Client
	mu         sync.RWMutex
}

type Client struct {
	hub  *Hub
	conn *websocket.Conn
	send chan interface{}
}

type WebSocketMessage struct {
	Type    string      `json:"type"`
	Payload interface{} `json:"payload"`
	Time    time.Time   `json:"time"`
}

func init() {
	godotenv.Load()
}

// Hub methods
func NewHub() *Hub {
	return &Hub{
		clients:    make(map[*Client]bool),
		broadcast:  make(chan interface{}, 256),
		register:   make(chan *Client),
		unregister: make(chan *Client),
	}
}

func (h *Hub) Run() {
	for {
		select {
		case client := <-h.register:
			h.mu.Lock()
			h.clients[client] = true
			h.mu.Unlock()
			log.Println("Client registered, total clients:", len(h.clients))

		case client := <-h.unregister:
			h.mu.Lock()
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
			h.mu.Unlock()
			log.Println("Client unregistered, total clients:", len(h.clients))

		case message := <-h.broadcast:
			h.mu.RLock()
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					// Client's send channel is full, skip
				}
			}
			h.mu.RUnlock()
		}
	}
}

func (h *Hub) Broadcast(msgType string, payload interface{}) {
	msg := WebSocketMessage{
		Type:    msgType,
		Payload: payload,
		Time:    time.Now(),
	}
	h.broadcast <- msg
}

// Client methods
func (c *Client) ReadPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()

	c.conn.SetReadDeadline(time.Now().Add(60 * time.Second))
	c.conn.SetPongHandler(func(string) error {
		c.conn.SetReadDeadline(time.Now().Add(60 * time.Second))
		return nil
	})

	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("WebSocket error: %v", err)
			}
			break
		}

		var msg WebSocketMessage
		if err := json.Unmarshal(message, &msg); err != nil {
			continue
		}

		// Broadcast to all clients
		c.hub.broadcast <- msg
	}
}

func (c *Client) WritePump() {
	ticker := time.NewTicker(54 * time.Second)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			c.conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			data, _ := json.Marshal(message)
			if err := c.conn.WriteMessage(websocket.TextMessage, data); err != nil {
				return
			}

		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func main() {
	// Database connection
	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		dbURL = "postgresql://neondb_owner:npg_KLDRdP2pw8aW@ep-fragrant-king-a41f78g0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
	}

	db, err := sql.Open("postgres", dbURL)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	// Test connection
	if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}

	log.Println("Connected to database successfully")

	// Initialize database
	if err := initDB(db); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	// Setup Gin router
	router := gin.Default()

	// Setup WebSocket hub
	hub := NewHub()
	go hub.Run()

	// WebSocket upgrader
	upgrader := websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			return true // Allow all origins in development
		},
	}

	// Serve Next.js frontend
	router.Static("/public", "./frontend/public")
	router.StaticFile("/favicon.ico", "./frontend/public/favicon.ico")

	// CORS middleware
	router.Use(corsMiddleware())

	// Health check
	router.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy",
			"time":   time.Now(),
		})
	})

	// Contact form endpoint
	router.POST("/api/contact", func(c *gin.Context) {
		var req ContactRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		resp, err := createContact(db, req)
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to create contact"})
			return
		}

		c.JSON(201, resp)
	})

	// Get contacts (admin endpoint)
	router.GET("/api/contacts", func(c *gin.Context) {
		contacts, err := getContacts(db)
		if err != nil {
			c.JSON(500, gin.H{"error": "Failed to fetch contacts"})
			return
		}
		c.JSON(200, contacts)
	})

	// Get single contact
	router.GET("/api/contacts/:id", func(c *gin.Context) {
		id := c.Param("id")
		contact, err := getContact(db, id)
		if err != nil {
			c.JSON(404, gin.H{"error": "Contact not found"})
			return
		}
		c.JSON(200, contact)
	})

	// Update contact status
	router.PUT("/api/contacts/:id", func(c *gin.Context) {
		id := c.Param("id")
		var req struct {
			Status string `json:"status" binding:"required"`
		}
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		if err := updateContactStatus(db, id, req.Status); err != nil {
			c.JSON(500, gin.H{"error": "Failed to update contact"})
			return
		}

		c.JSON(200, gin.H{"message": "Contact updated successfully"})
	})

	// Delete contact
	router.DELETE("/api/contacts/:id", func(c *gin.Context) {
		id := c.Param("id")
		if err := deleteContact(db, id); err != nil {
			c.JSON(500, gin.H{"error": "Failed to delete contact"})
			return
		}
		c.JSON(200, gin.H{"message": "Contact deleted successfully"})
	})

	// WebSocket endpoint for real-time updates
	router.GET("/api/ws", func(c *gin.Context) {
		conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
		if err != nil {
			log.Printf("WebSocket upgrade error: %v", err)
			return
		}

		client := &Client{
			hub:  hub,
			conn: conn,
			send: make(chan interface{}, 256),
		}

		hub.register <- client

		go client.WritePump()
		go client.ReadPump()
	})

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on port %s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func initDB(db *sql.DB) error {
	schema := `
	CREATE TABLE IF NOT EXISTS contacts (
		id UUID PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		phone VARCHAR(20) NOT NULL,
		message TEXT NOT NULL,
		service VARCHAR(255) NOT NULL,
		status VARCHAR(50) DEFAULT 'new',
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
	CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
	CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
	`

	_, err := db.Exec(schema)
	return err
}

func createContact(db *sql.DB, req ContactRequest) (*ContactResponse, error) {
	id := fmt.Sprintf("%x", time.Now().UnixNano())
	now := time.Now()

	query := `
	INSERT INTO contacts (id, name, email, phone, message, service, status, created_at, updated_at)
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
	RETURNING id, name, email, phone, message, service, status, created_at
	`

	var resp ContactResponse
	err := db.QueryRow(query, id, req.Name, req.Email, req.Phone, req.Message, req.Service, "new", now, now).
		Scan(&resp.ID, &resp.Name, &resp.Email, &resp.Phone, &resp.Message, &resp.Service, &resp.Status, &resp.CreatedAt)

	if err != nil {
		return nil, err
	}

	return &resp, nil
}

func getContacts(db *sql.DB) ([]ContactResponse, error) {
	query := `
	SELECT id, name, email, phone, message, service, status, created_at
	FROM contacts
	ORDER BY created_at DESC
	LIMIT 100
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var contacts []ContactResponse
	for rows.Next() {
		var c ContactResponse
		if err := rows.Scan(&c.ID, &c.Name, &c.Email, &c.Phone, &c.Message, &c.Service, &c.Status, &c.CreatedAt); err != nil {
			return nil, err
		}
		contacts = append(contacts, c)
	}

	return contacts, rows.Err()
}

func getContact(db *sql.DB, id string) (*ContactResponse, error) {
	query := `
	SELECT id, name, email, phone, message, service, status, created_at
	FROM contacts
	WHERE id = $1
	`

	var c ContactResponse
	err := db.QueryRow(query, id).Scan(&c.ID, &c.Name, &c.Email, &c.Phone, &c.Message, &c.Service, &c.Status, &c.CreatedAt)
	if err != nil {
		return nil, err
	}

	return &c, nil
}

func updateContactStatus(db *sql.DB, id string, status string) error {
	query := `
	UPDATE contacts
	SET status = $1, updated_at = $2
	WHERE id = $3
	`

	_, err := db.Exec(query, status, time.Now(), id)
	return err
}

func deleteContact(db *sql.DB, id string) error {
	query := `DELETE FROM contacts WHERE id = $1`
	_, err := db.Exec(query, id)
	return err
}
