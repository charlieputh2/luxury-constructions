#!/bin/bash
set -e

# Install backend dependencies
cd backend
go mod download
go build -o luxury-construction .

# Install frontend dependencies and build
cd ../frontend
npm install
npm run build

# Start the backend (frontend is served by Next.js)
cd ../backend
./luxury-construction
