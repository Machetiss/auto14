import csv
import time
import re
from duckduckgo_search import DDGS

input_file = r'c:\Users\lenovo\Pictures\Авто14\Сайт\avto14\data\Auto_Filters_DB.csv'
output_file = r'c:\Users\lenovo\Pictures\Авто14\Сайт\avto14\data\Auto_Filters_DB_Discrepancies.csv'

def parse_oil_volume(text):
    if text == 'нет данных': return None
    # Extract numbers like 4.4, 4, 3.6
    matches = re.findall(r'\d+\.?\d*', text.replace(',', '.'))
    if matches:
        return float(matches[0])
    return None

def verify_car(car_info):
    brand, model, engine, db_vol, filter_oe = car_info
    query = f"{brand} {model} {engine} объем масла в двигателе"
    try:
        results = DDGS().text(query, max_results=3)
        found_text = " ".join([r['body'] for r in results])
        # simple heuristic: look for numbers near "литр", "л", "объем"
        matches = re.findall(r'(\d+[.,]\d+)\s*(?:л|лит)', found_text.lower())
        if matches:
            found_vols = [float(m.replace(',', '.')) for m in matches]
            # check if db_vol matches any found_vol with some tolerance
            if db_vol is not None:
                is_match = any(abs(db_vol - fv) < 0.3 for fv in found_vols)
                if not is_match:
                    return f"По базе: {db_vol} л. В интернете найдено: {found_vols[:3]} л."
    except Exception as e:
        return f"Ошибка поиска: {e}"
    
    return None

def main():
    discrepancies = []
    print("Starting background verification...")
    with open(input_file, mode='r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        header = next(reader)
        rows = list(reader)
        
    for i, row in enumerate(rows):
        # We will process 400 cars. To avoid being blocked, we sleep.
        # But this is just a script.
        brand = row[0]
        model = row[1]
        engine = row[4]
        db_vol = parse_oil_volume(row[11])
        filter_oe = row[27]
        
        car_info = (brand, model, engine, db_vol, filter_oe)
        discrepancy = verify_car(car_info)
        
        if discrepancy:
            discrepancies.append([brand, model, engine, row[11], discrepancy])
            print(f"Mismatch found: {brand} {model} {engine} -> {discrepancy}")
            
        # Write intermediate results just in case
        if len(discrepancies) > 0 and i % 10 == 0:
            with open(output_file, mode='w', encoding='utf-8', newline='') as out:
                writer = csv.writer(out, delimiter=';')
                writer.writerow(['Brand', 'Model', 'Engine', 'DB Oil Volume', 'Discrepancy Note'])
                writer.writerows(discrepancies)
                
        time.sleep(2) # avoid rate limits
        if i % 10 == 0:
            print(f"Processed {i}/{len(rows)} cars...")

    # final write
    with open(output_file, mode='w', encoding='utf-8', newline='') as out:
        writer = csv.writer(out, delimiter=';')
        writer.writerow(['Brand', 'Model', 'Engine', 'DB Oil Volume', 'Discrepancy Note'])
        writer.writerows(discrepancies)
    
    print(f"Verification complete. Found {len(discrepancies)} discrepancies. Saved to {output_file}")

if __name__ == "__main__":
    main()
