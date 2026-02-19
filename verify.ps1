Write-Host "=== 1. CLEANUP: Killing Node Processes ===" -ForegroundColor Cyan
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "=== 2. START: Launching Next.js Server ===" -ForegroundColor Cyan
$processInfo = New-Object System.Diagnostics.ProcessStartInfo
$processInfo.FileName = "npm.cmd"
$processInfo.Arguments = "run dev"
$processInfo.WorkingDirectory = "$PWD"
# $processInfo.RedirectStandardOutput = $true # Keeping output visible/separate might be better or handled by shell
$processInfo.UseShellExecute = $true # Open in new window so user can see it
$processInfo.WindowStyle = "Minimized"

$serverProcess = [System.Diagnostics.Process]::Start($processInfo)
Write-Host "Server started in background (PID: $($serverProcess.Id)). Waiting for initialization..." -ForegroundColor Yellow

# Wait loop
$maxRetries = 30
$retryCount = 0
$foundPort = 0

Write-Host "=== 3. WAIT: Polling Ports 3000-3005 ===" -ForegroundColor Cyan
while ($retryCount -lt $maxRetries) {
    Start-Sleep -Seconds 2
    foreach ($p in 3000..3005) {
        try {
            $resp = Invoke-RestMethod -Uri "http://localhost:$p/api/services" -ErrorAction Stop -TimeoutSec 1
            Write-Host "`nSUCCESS: Server detected on port $p!" -ForegroundColor Green
            $foundPort = $p
            break
        } catch {
            Write-Host "." -NoNewline -ForegroundColor Gray
        }
    }
    if ($foundPort -ne 0) { break }
    $retryCount++
}

if ($foundPort -eq 0) {
    Write-Host "`nERROR: Server failed to start within 60 seconds." -ForegroundColor Red
    exit
}

Write-Host "=== 4. VERIFY: Testing API Endpoints ===" -ForegroundColor Cyan

# GET Services
Write-Host "Checking GET /api/services..."
try {
    $services = Invoke-RestMethod -Uri "http://localhost:$foundPort/api/services" -ErrorAction Stop
    $services | ConvertTo-Json -Depth 2 | Select-Object -First 2 | Write-Host
    Write-Host "OK" -ForegroundColor Green
} catch {
    Write-Host "FAIL: $($_.Exception.Message)" -ForegroundColor Red
}

# POST Lead
Write-Host "Checking POST /api/leads..."
try {
    $body = @{ name = "AutoTest"; phone = "+79990001122" } | ConvertTo-Json
    $lead = Invoke-RestMethod -Uri "http://localhost:$foundPort/api/leads" -Method Post -Body $body -ContentType "application/json" -ErrorAction Stop
    Write-Host "SUCCESS: Lead created with ID $($lead.leadId)" -ForegroundColor Green
} catch {
    Write-Host "FAIL: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n=== DONE. Server is running on port $foundPort ===" -ForegroundColor Cyan
