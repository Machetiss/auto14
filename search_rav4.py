import urllib.request
import urllib.parse
import re

queries = [
    'Toyota RAV4 ACA21 1AZ-FE oil capacity liters',
    'Toyota 1AZ-FE engine oil specification API viscosity',
    'Toyota RAV4 2005 1AZ-FE масло объем допуск'
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
            print()
    except Exception as e:
        print('Error:', e)
