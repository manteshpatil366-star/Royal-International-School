@echo off
title Royal Kids International - Go Live
color 0B
echo.
echo  ============================================================
echo   ROYAL KIDS INTERNATIONAL - Share your website online
echo  ============================================================
echo.
echo  Right now OPEN-WEBSITE.bat only works on YOUR computer.
echo  To share a LINK with parents, friends, or on WhatsApp,
echo  you need to put the site on the internet (free options below).
echo.
echo  ------------------------------------------------------------
echo   OPTION 1 - EASIEST (Netlify Drop) - Recommended
echo  ------------------------------------------------------------
echo   1. Browser will open Netlify Drop
echo   2. Drag this ENTIRE folder into the page:
echo      %~dp0
echo   3. Wait ~30 seconds - you get a link like:
echo      https://random-name-123.netlify.app
echo   4. Copy that link and share on WhatsApp / Instagram / etc.
echo   5. Free account lets you rename to royalkids-raichur.netlify.app
echo.
echo  ------------------------------------------------------------
echo   OPTION 2 - Surge.sh (one command, needs Node.js)
echo  ------------------------------------------------------------
echo   Run in this folder:
echo   npx surge . royalkids-raichur.surge.sh
echo   Share: https://royalkids-raichur.surge.sh
echo.
echo  ------------------------------------------------------------
echo   OPTION 3 - GitHub Pages (permanent, free)
echo  ------------------------------------------------------------
echo   1. Create GitHub account - upload this folder as a repo
echo   2. Settings - Pages - Deploy from main branch
echo   3. Link: https://YOURUSERNAME.github.io/repo-name
echo.
echo  ------------------------------------------------------------
echo   OPTION 4 - Buy a domain (most professional)
echo  ------------------------------------------------------------
echo   Buy royalkidsinternational.in on GoDaddy / Namecheap
echo   Point it to Netlify (free hosting) - looks like a real school site
echo.
echo  ============================================================
echo.
set /p choice="Open Netlify Drop in browser now? (Y/N): "
if /i "%choice%"=="Y" (
  start "" "https://app.netlify.com/drop"
  explorer "%~dp0"
  echo.
  echo  Folder opened + Netlify Drop opened.
  echo  Drag the folder "Royal International School" into Netlify.
) else (
  echo  No problem. Run this file again when ready.
)
echo.
pause
