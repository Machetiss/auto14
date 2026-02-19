@echo off
echo STARTING DEBUG > debug_output.txt
echo Checking Node version... >> debug_output.txt
"C:\Program Files\nodejs\node.exe" -v >> debug_output.txt 2>&1
echo Running test script... >> debug_output.txt
"C:\Program Files\nodejs\node.exe" test_server_cycle.js >> debug_output.txt 2>&1
echo DONE >> debug_output.txt
