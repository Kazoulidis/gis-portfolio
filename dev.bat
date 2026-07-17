@echo off
REM ---------------------------------------------------------------------------
REM  Start the DEVELOPMENT server and open it in a browser.
REM
REM  Hot reload: edit any file, save, and the page updates itself.
REM  This is the one to use while writing.
REM
REM  Note that dev is NOT how the site performs - it compiles each page the
REM  first time you visit it. Use prod.bat to judge speed.
REM ---------------------------------------------------------------------------

REM Run from this script's own folder, so double-clicking works from anywhere.
cd /d "%~dp0"

REM A shell opened before Node was installed will not have it on PATH yet.
where node >nul 2>nul
if errorlevel 1 set "PATH=C:\Program Files\nodejs;%PATH%"

where node >nul 2>nul
if errorlevel 1 (
    echo.
    echo   Node.js was not found.
    echo   Install the LTS build from https://nodejs.org and run this again.
    echo.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo.
    echo   Installing dependencies for the first time. This takes a minute...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo   npm install FAILED - see the error above.
        echo.
        pause
        exit /b 1
    )
)

echo.
echo   Starting the dev server...
echo.

call npm run dev
if errorlevel 1 (
    echo.
    echo   Failed to start - see the error above.
    echo.
    pause
    exit /b 1
)

start "" "http://localhost:4321"

echo.
echo   ==========================================================
echo     Dev server:  http://localhost:4321
echo.
echo     It runs in the BACKGROUND - closing this window does
echo     not stop it. To stop it, run:
echo.
echo         npx astro dev stop
echo.
echo     Other useful commands:
echo         npx astro dev status
echo         npx astro dev logs
echo   ==========================================================
echo.
pause
