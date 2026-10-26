import json
import re
import os

log_path = r"C:\Users\lenovo\.gemini\antigravity\brain\f90873b0-024f-4172-b341-0bf9da61f80d\.system_generated\logs\transcript.jsonl"

user_text = ""
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("type") == "USER_INPUT" and "Вот с авито" in data.get("content", ""):
                user_text = data["content"]
        except Exception:
            pass

lines = user_text.split('\n')
lines = [l.strip() for l in lines]

reviews = []
current_review = {}
state = "START"
# START -> looking for author
# DATE -> looking for "Сделка состоялась" or "Фото из отзыва"
# BADGE -> found badge, next lines are text until "Показать целиком" or "Авто14" or blank lines followed by new author

neg_keywords = ["не поеду", "зарядили", "дорого", "не затянуто", "не согласовал", "плюс 60", "чуть не вылетело", "развод"]
neg_authors = ["иса", "Альберт", "Руслан"]

i = 0
while i < len(lines):
    line = lines[i]
    if "Вот с авито" in line or line == "":
        i += 1
        continue
    
    if state == "START":
        if line == "Авто14":
            # Skip the owner response entirely
            while i < len(lines) and lines[i] != "":
                i += 1
            i += 1
            continue
            
        current_review = {"author": line, "text": [], "badge": "Сделка состоялась"}
        state = "DATE"
    elif state == "DATE":
        # Usually date like "25 мая"
        state = "BADGE"
    elif state == "BADGE":
        if "Сделка состоялась" in line:
            # this is a badge line
            pass
        elif "Фото из отзыва" in line:
            pass
        else:
            state = "TEXT"
            current_review["text"].append(line)
    elif state == "TEXT":
        if line == "Показать целиком":
            pass
        elif line == "Авто14":
            # end of review
            text = " ".join(current_review["text"]).strip()
            # check if negative
            is_neg = False
            for na in neg_authors:
                if current_review["author"].strip().lower() == na.lower():
                    is_neg = True
            for nk in neg_keywords:
                if nk.lower() in text.lower():
                    is_neg = True
                    
            if not is_neg and text:
                reviews.append({
                    "text": text,
                    "author": current_review["author"],
                    "badge": current_review["badge"]
                })
            
            state = "START"
            while i < len(lines) and lines[i] != "":
                i += 1
        else:
            current_review["text"].append(line)
            
    i += 1

# If there's a dangling review
if state == "TEXT" and current_review.get("text"):
    text = " ".join(current_review["text"]).strip()
    is_neg = False
    for na in neg_authors:
        if current_review["author"].strip().lower() == na.lower():
            is_neg = True
    for nk in neg_keywords:
        if nk.lower() in text.lower():
            is_neg = True
            
    if not is_neg and text:
        reviews.append({
            "text": text,
            "author": current_review["author"],
            "badge": current_review["badge"]
        })

with open("avito_parsed.json", "w", encoding="utf-8") as f:
    json.dump(reviews, f, ensure_ascii=False, indent=4)
print(f"Extracted {len(reviews)} positive reviews.")
