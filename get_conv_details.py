import os
import json
import re

folders = ["51987563-cc2a-4350-a8ce-f82c64304366", "9d8cdb66-93c5-4f39-8fad-f40da2e6dbe3"]
brain_dir = r"C:\Users\lenovo\.gemini\antigravity\brain"

keywords = ["яндекс", "yandex", "гугл", "google", "метрика", "вебмастер", "webmaster", "search console", "индекс", "дискавери", "просмотр", "трафик"]
regex = re.compile("|".join(keywords), re.IGNORECASE)

for folder in folders:
    path = os.path.join(brain_dir, folder, ".system_generated", "logs", "transcript.jsonl")
    if not os.path.exists(path):
        # try overview.txt
        path = os.path.join(brain_dir, folder, ".system_generated", "logs", "overview.txt")
        if not os.path.exists(path):
            print(f"No log files found for {folder}")
            continue

    print(f"\n==================================================")
    print(f"DETAILS FOR CONVERSATION: {folder}")
    print(f"==================================================")
    
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            try:
                data = json.loads(line)
                source = data.get("source", "UNKNOWN")
                content = data.get("content", "")
                
                # Check if content has markdown or text containing relevant things
                if isinstance(content, str) and regex.search(content):
                    print(f"\n--- [{source}] ---")
                    # Let's print lines that mention our keywords
                    lines = content.split('\n')
                    for l in lines:
                        if regex.search(l) or len(l.strip()) < 80: # show short context lines too
                            print(l)
            except Exception:
                # raw format
                if regex.search(line):
                    print(line.strip()[:300])
