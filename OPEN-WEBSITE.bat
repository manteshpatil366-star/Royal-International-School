@echo off
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
  start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%~dp0index.html"
) else if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
  start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" "%~dp0index.html"
) else (
  start "" "%~dp0index.html"
)
