#!/bin/bash
set -e

# Start Next.js frontend in background
echo "Starting Next.js frontend..."
cd /app/frontend
npm start &
FRONTEND_PID=$!

# Start Go backend
echo "Starting Go backend..."
cd /app/backend
./luxury-construction &
BACKEND_PID=$!

# Wait for both processes
wait $BACKEND_PID
