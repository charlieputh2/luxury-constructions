# Build stage for backend
FROM golang:1.21-alpine AS backend-builder
WORKDIR /app
COPY backend/go.mod backend/go.sum ./
RUN go mod download
COPY backend/ .
RUN go build -o luxury-construction .

# Final stage
FROM golang:1.21-alpine
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache ca-certificates

# Copy built backend binary
COPY --from=backend-builder /app/luxury-construction .

EXPOSE 8080
CMD ["./luxury-construction"]
