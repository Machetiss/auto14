import urllib.request
import json
import urllib.parse
import re

queries = [
    'Nissan Matic-S артикул 1л 4л',
    'ZIC ATF Multi LF артикул 1л 4л',
    'NGN A-Line ATF Matic S артикул 1л 4л',
    'Idemitsu ATF артикул 1л 4л'
]

for q in queries:
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(q)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            snippets = re.findall(r'<a class="result__snippet[^>]*>(.*?)</a>', html, re.IGNORECASE | re.DOTALL)
            print("---", q, "---")
            for s in snippets[:3]:
                print(re.sub(r'<[^>]+>', '', s).strip())
    except Exception as e:
        pass
