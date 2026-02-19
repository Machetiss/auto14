const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'server_output.log');
const logStream = fs.createWriteStream(LOG_FILE, { flags: 'w' }); // Overwrite each time

function log(msg) {
  const timestamp = new Date().toISOString();
  logStream.write(`[${timestamp}] ${msg}\n`);
  console.log(msg);
}

log('Starting diagnostic script...');
log(`CWD: ${process.cwd()}`);

// Check node version
log(`Node Version: ${process.version}`);

// Path to Next.js binary
const nextBin = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
log(`Target Next Binary: ${nextBin}`);

if (!fs.existsSync(nextBin)) {
    log('ERROR: Next.js binary not found!');
    process.exit(1);
}

log('Spawning Next.js dev server...');

try {
    const child = spawn('node', [nextBin, 'dev'], {
        cwd: __dirname,
        env: { ...process.env, PORT: '3000' },
        shell: true
    });

    log(`Process/PID: ${child.pid}`);

    child.stdout.on('data', (data) => {
        log(`STDOUT: ${data.toString().trim()}`);
    });

    child.stderr.on('data', (data) => {
        log(`STDERR: ${data.toString().trim()}`);
    });

    child.on('error', (err) => {
        log(`Failed to spawn process: ${err.message}`);
    });

    child.on('close', (code) => {
        log(`Child process exited with code ${code}`);
        process.exit(code || 0);
    });

    // Keep alive for 20 seconds to diagnose startup
    setTimeout(() => {
        log('Monitor timeout reached (20s). The server seems to be running (or stuck/silent).');
        log('Exiting monitor, but leaving child process if detached (it is not detached here though).');
        // We are NOT detaching, so killing this script will kill the server.
        // This is just a test to see if it CRASHES on start.
        child.kill(); 
    }, 20000);

} catch (e) {
    log(`Exception: ${e.message}`);
}
