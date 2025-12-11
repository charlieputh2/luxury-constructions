@echo off
REM Luxury Construction - Development Startup Script

echo.
echo ========================================
echo Luxury Construction - Development Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if Go is installed
where go >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Go is not installed or not in PATH
    echo Please install Go from https://golang.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

echo Go version:
go version
echo.

REM Setup Frontend
echo ========================================
echo Setting up Frontend...
echo ========================================
cd frontend
if not exist node_modules (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed
)
echo.

REM Setup Backend
echo ========================================
echo Setting up Backend...
echo ========================================
cd ..\backend
echo Downloading Go dependencies...
call go mod download
call go mod tidy
echo.

REM Create .env if it doesn't exist
if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
)
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo To start development:
echo.
echo Terminal 1 - Frontend:
echo   cd frontend
echo   npm run dev
echo   (runs on http://localhost:3000)
echo.
echo Terminal 2 - Backend:
echo   cd backend
echo   go run main.go
echo   (runs on http://localhost:8080)
echo.
echo Press any key to exit...
pause
