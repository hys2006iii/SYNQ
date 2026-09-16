@echo off
chcp 437 >nul 2>&1
title Server - localhost:8080
setlocal

echo ========================================
echo   Water Youth Team - Local Server
echo ========================================
echo.

for /f "tokens=5" %%P in ('netstat -ano ^| findstr :8080 ^| findstr LISTENING 2^>nul') do (
  if not "%%P"=="" (
    echo [INFO] Port 8080 busy PID %%P - freeing it
    taskkill /F /PID %%P >nul 2>&1
    timeout /t 1 /nobreak >nul
  )
)

echo [INFO] Starting server on http://localhost:8080
echo.
python server.py

pause
