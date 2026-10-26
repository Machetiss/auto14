import os
import paramiko
import sys
import json

def run_remote():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    print(f"Connecting to {os.environ.get('VPS_HOST', 'VPS')}...")
    client.connect(
        os.environ["VPS_HOST"],
        username=os.environ["VPS_USER"],
        password=os.environ["VPS_PASSWORD"],
        timeout=15
    )
    print("Connected.")

    def exec_cmd(cmd):
        print(f"=== CMD: {cmd} ===")
        stdin, stdout, stderr = client.exec_command(cmd)
        out = stdout.read().decode("utf-8")
        err = stderr.read().decode("utf-8")
        code = stdout.channel.recv_exit_status()
        print(f"Exit code: {code}")
        if out:
            print("STDOUT:\n" + out.strip())
        if err:
            print("STDERR:\n" + err.strip())
        return code, out, err

    # 1. Directory and file listings
    exec_cmd("ls -la /root/smile-bot")
    exec_cmd("ls -la /root/smile-bot/backups")

    # 2. SQLite tables in live and backup
    exec_cmd("sqlite3 /root/smile-bot/memory.db '.tables'")
    exec_cmd("sqlite3 /root/smile-bot/backups/memory.db.pre_m0.bak '.tables'")

    # 3. Points verification
    exec_cmd("sqlite3 /root/smile-bot/memory.db 'SELECT COUNT(*), SUM(points) FROM points;'")
    exec_cmd("sqlite3 /root/smile-bot/memory.db 'SELECT * FROM points;'")

    # 4. Points history verification
    exec_cmd("sqlite3 /root/smile-bot/memory.db 'SELECT COUNT(*) FROM points_history;'")
    exec_cmd("sqlite3 /root/smile-bot/memory.db 'SELECT * FROM points_history LIMIT 10;'")

    # 5. System services verification
    exec_cmd("systemctl status awg-quick@awg0 --no-pager")
    exec_cmd("systemctl status xray --no-pager")

    client.close()

if __name__ == "__main__":
    run_remote()
