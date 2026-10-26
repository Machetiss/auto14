import urllib.request
import json

url = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/jtjha31u940007583?format=json'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        res = {}
        for item in data['Results']:
            if item['Value'] and item['Value'] != 'Not Applicable':
                res[item['Variable']] = item['Value']
        print(f"Make: {res.get('Make')}")
        print(f"Model: {res.get('Model')}")
        print(f"Model Year: {res.get('Model Year')}")
        print(f"Displacement (L): {res.get('Displacement (L)')}")
        print(f"Engine Model: {res.get('Engine Model')}")
except Exception as e:
    print('Error:', e)
