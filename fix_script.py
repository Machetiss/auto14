import re

with open("insert_2gis.py", "r", encoding="utf-8") as f:
    script = f.read()

script = script.replace('js_array = "twogis: [\\n"', 'js_array = "gis: [\\n"')
script = script.replace("r'twogis:\\s*\\[[\\s\\S]*?\\]'", "r'gis:\\s*\\[[\\s\\S]*?\\]'")

with open("insert_2gis.py", "w", encoding="utf-8") as f:
    f.write(script)
