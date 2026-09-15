@echo off
chcp 65001 >nul 2>&1
title 水韵农青服务器

echo ========================================
echo    水韵农青 - 本地服务器
echo ========================================
echo.

:check_port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8080 ^| findstr LISTENING') do (
    echo [提示] 端口 8080 已被占用 (PID: %%a)，正在释放...
    taskkill /F /PID %%a >nul 2>&1
    timeout /t 1 /nobreak >nul
    goto check_port
)

echo [启动] 正在启动服务器 (http://localhost:8080)...
echo.
python server.py

pause
