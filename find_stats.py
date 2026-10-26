import os
import json
import re

brain_dir = r"C:\Users\lenovo\.gemini\antigravity\brain"
keywords = [
    r"яндекс", r"yandex", r"гугл", r"google", 
    r"индекс", r"index", r"статистик", r"stats", 
    r"метрика", r"metrika", r"webmaster", r"вебмастер",
    r"search console", r"консоль", r"позици", r"position"
]

# Compile regex with case insensitivity
regex = re.compile("|".join(keywords), re.IGNORECASE)

results = []

print("Searching for SEO and indexing stats in conversation logs...")

for folder in os.listdir(brain_dir):
    folder_path = os.path.join(brain_dir, folder)
    if not os.path.isdir(folder_path):
        continue
    
    logs_dir = os.path.join(folder_path, ".system_generated", "logs")
    if not os.path.isdir(logs_dir):
        continue
    
    # Search overview.txt
    overview_path = os.path.join(logs_dir, "overview.txt")
    if os.path.isfile(overview_path):
        try:
            with open(overview_path, 'r', encoding='utf-8', errors='ignore') as f:
                for line_no, line in enumerate(f, 1):
                    if regex.search(line):
                        results.append({
                            "type": "overview",
                            "folder": folder,
                            "file": "overview.txt",
                            "line_no": line_no,
                            "text": line.strip()
                        })
        except Exception as e:
            pass

    # Search transcript.jsonl
    transcript_path = os.path.join(logs_dir, "transcript.jsonl")
    if os.path.isfile(transcript_path):
        try:
            with open(transcript_path, 'r', encoding='utf-8', errors='ignore') as f:
                for line_no, line in enumerate(f, 1):
                    if regex.search(line):
                        try:
                            data = json.loads(line)
                            content = data.get("content", "")
                            # If content is a dict or list, dump it to string, otherwise str
                            if not isinstance(content, str):
                                content = json.dumps(content, ensure_ascii=False)
                            
                            # Extract matching sentences or around keywords
                            if regex.search(content):
                                results.append({
                                    "type": "transcript",
                                    "folder": folder,
                                    "file": "transcript.jsonl",
                                    "line_no": line_no,
                                    "text": content.strip()[:500]  # Limit output length
                                })
                        except Exception:
                            # Fallback if not json
                            if regex.search(line):
                                results.append({
                                    "type": "transcript_raw",
                                    "folder": folder,
                                    "file": "transcript.jsonl",
                                    "line_no": line_no,
                                    "text": line.strip()[:500]
                                })
        except Exception as e:
            pass

print(f"Total matches found: {len(results)}")

# Group and display relevant matches
# Filter out matches that are just standard system prompts or noise if possible,
# or display them grouped by folder.
grouped = {}
for r in results:
    f = r["folder"]
    if f not in grouped:
        grouped[f] = []
    grouped[f].append(r)

# Let's print out the matches
for folder, matches in grouped.items():
    print(f"\n=== CONVERSATION: {folder} (Matches: {len(matches)}) ===")
    for m in matches[:15]:  # limit to 15 per conversation to avoid screen clutter
        print(f"[{m['file']}:{m['line_no']}] {m['text'][:300]}")
    if len(matches) > 15:
        print(f"... and {len(matches) - 15} more matches in this conversation")
