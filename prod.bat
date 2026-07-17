@echo off
REM ---------------------------------------------------------------------------
REM  Build the PRODUCTION site and serve it, exactly as it will be deployed.
REM
REM  This is a frozen snapshot: it does NOT reload when you edit. Re-run this
REM  script after any change.
REM
REM  Use it to check real performance and to sanity-check a new project page
REM  before publishing - this is what actually ships.
REM ---------------------------------------------------------------------------

cd /d "%~dp0"

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
echo   Building...
echo.

REM Build as its own step, so a content error is reported clearly rather than
REM scrolling past on the way to the server. A bad category or a missing
REM frontmatter field stops here, and the message names the file and the field.
call npm run build
if errorlevel 1 (
    echo.
    echo   ==========================================================
    echo     BUILD FAILED - nothing is being served.
    echo     The error above names the file and the field at fault.
    echo   ==========================================================
    echo.
    pause
    exit /b 1
)

echo.
echo   ==========================================================
echo     Production site:  http://localhost:4322
echo.
echo     Press Ctrl+C in this window to stop it.
echo     Re-run this script after any edit to rebuild.
echo   ==========================================================
echo.

start "" "http://localhost:4322"

REM Port 4322 on purpose: 4321 is the dev server's, so both can run at once.
call npm run preview -- --port 4322
