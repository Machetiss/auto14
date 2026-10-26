import urllib.request
import urllib.parse
import re

url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote('NGN A-Line ATF Matic S артикул')
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        snippets = re.findall(r'<a class="result__snippet[^>]*>(.*?)</a>', html, re.IGNORECASE | re.DOTALL)
        for s in snippets[:3]:
            print(re.sub(r'<[^>]+>', '', s).strip())
except Exception as e:
    pass
