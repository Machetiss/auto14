# Kill all node processes
Write-Host "Killing Node processes..."
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue

# Wait a moment
Start-Sleep -Seconds 2

# Check if port 3005 is free
$port = 3005
$tcp = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($tcp) {
    Write-Host "Port $port is still in use! Something is wrong."
}
else {
    Write-Host "Port $port is free. Starting server..."
    # Start server
    npm run dev -- -p $port
}
