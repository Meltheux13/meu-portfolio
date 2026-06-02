@echo off
set "NODE_EXE=C:\Users\mateu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "PATH=C:\Users\mateu\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
cd /d "%~dp0"
"%NODE_EXE%" "node_modules\vite\bin\vite.js" --configLoader runner --host 127.0.0.1 --port 5173
