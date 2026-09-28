import urllib.request
import csv
from io import StringIO
import re

crm_url = 'https://docs.google.com/spreadsheets/d/1XVa9qSBSz2qWZSVGUC7UASCr3h4-z_CdroS6U4pmtlM/export?format=csv'
db_file = r'c:\Users\lenovo\Pictures\Авто14\Сайт\avto14\data\Auto_Filters_DB.csv'

def get_crm_cars():
    req = urllib.request.Request(crm_url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    csv_data = response.read().decode('utf-8')
    reader = csv.reader(StringIO(csv_data))
    
    header = next(reader)
    model_idx = 4
    name_idx = 1
    
    unique_cars = set()
    for row in reader:
        if len(row) > model_idx:
            model = row[model_idx].strip()
            name = row[name_idx].strip()
            # sometimes model is in name, like 'Хендайи20', 'БМВ', 'Порше'
            if model:
                unique_cars.add(model)
            elif name and len(name) > 2 and any(char.isalpha() for char in name):
                # crude heuristic to catch cars in 'name' column if 'model' is empty
                # we'll add it to unique cars if it doesn't look like a human name, but let's just add all and filter later
                unique_cars.add(name)
                
    return list(unique_cars)

def get_db_cars():
    db_cars = set()
    with open(db_file, mode='r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter=';')
        next(reader)
        for row in reader:
            if len(row) > 1:
                brand = row[0].strip().lower()
                model = row[1].strip().lower()
                db_cars.add(f"{brand} {model}")
    return db_cars

def normalize(text):
    text = text.lower()
    text = re.sub(r'\b\d{2}\b', '', text) # remove '17', '14' years
    text = re.sub(r'[^a-zа-я0-9\s]', ' ', text)
    
    translations = {
        'ваз': 'lada', 'лада': 'lada',
        'хёндай': 'hyundai', 'хендай': 'hyundai', 'хундай': 'hyundai',
        'мазда': 'mazda', 'киа': 'kia', 'рено': 'renault', 'форд': 'ford',
        'ниссан': 'nissan', 'тойота': 'toyota', 'шевроле': 'chevrolet', 'шевролет': 'chevrolet',
        'бмв': 'bmw', 'порше': 'porsche', 'фольксваген': 'volkswagen', 'фольцваген': 'volkswagen',
        'пежо': 'peugeot', 'ситроен': 'citroen', 'митсубиси': 'mitsubishi', 'мицубиси': 'mitsubishi',
        'шкода': 'skoda', 'ауди': 'audi', 'мерседес': 'mercedes-benz', 'мерс': 'mercedes-benz',
        'опель': 'opel', 'хонда': 'honda', 'сузуки': 'suzuki', 'субару': 'subaru', 'лексус': 'lexus', 'чери': 'chery', 'фиат': 'fiat',
        'москвич': 'moskvich',
        
        'приора': 'priora', 'калина': 'kalina', 'гранта': 'granta', 'веста': 'vesta', 'ларгус': 'largus', 'нива': 'niva',
        'солярис': 'solaris', 'крета': 'creta', 'грета': 'creta', 'сантафе': 'santa fe', 'гетз': 'getz', 'гетс': 'getz', 'элантра': 'elantra',
        'сх5': 'cx-5', 'cx 5': 'cx-5', 'сх 5': 'cx-5', 'матрешка': '3',
        'рио': 'rio', 'сид': 'ceed', 'спортейдж': 'sportage', 'соренто': 'sorento', 'церато': 'cerato', 'секато': 'cerato', 'соул': 'soul',
        'поло': 'polo', 'тигуан': 'tiguan', 'пассат': 'passat', 'туарег': 'touareg', 'гольф': 'golf',
        'фокус': 'focus', 'мондео': 'mondeo', 'куга': 'kuga', 'фьюжн': 'fusion', 'мондлео': 'mondeo',
        'октавиа': 'octavia', 'октавия': 'octavia', 'рапид': 'rapid', 'кодиак': 'kodiaq', 'суперб': 'superb',
        'дастер': 'duster', 'логан': 'logan', 'меган': 'megane', 'каптюр': 'kaptur', 'сандеро': 'sandero',
        'кашкай': 'qashqai', 'хтреил': 'x-trail', 'икстрейл': 'x-trail', 'альмера': 'almera', 'жук': 'juke', 'серена': 'serena',
        'лансер': 'lancer', 'аутлендер': 'outlander', 'паджеро': 'pajero',
        'королла': 'corolla', 'камри': 'camry', 'рав4': 'rav4', 'раф4': 'rav4', 'рф4': 'rav4', 'раф 4': 'rav4', 'ленд крузер': 'land cruiser', 'прадо': 'prado', 'филдер': 'fielder',
        'авео': 'aveo', 'круз': 'cruze', 'лачетти': 'lacetti', 'лачети': 'lacetti',
        'тигго': 'tiggo',
        'добло': 'doblo', 'альбеа': 'albea',
        'импреза': 'impreza', 'форестер': 'forester',
        'лиана': 'liana', 'витара': 'vitara'
    }
    
    words = text.split()
    norm_words = []
    for w in words:
        if w in translations:
            norm_words.append(translations[w])
        else:
            norm_words.append(w)
            
    return " ".join(norm_words)

def main():
    crm_cars_raw = get_crm_cars()
    db_cars = get_db_cars()
    
    db_cars_norm = {normalize(c): c for c in db_cars}
    
    missing = []
    found = []
    
    for crm_car in crm_cars_raw:
        if not crm_car or len(crm_car) < 3: continue
        
        # skip obvious human names
        common_names = ['иванов', 'петров', 'хакимов', 'журин', 'сергей', 'семенов', 'камалова', 'сукрова']
        if any(cn in crm_car.lower() for cn in common_names):
            continue
            
        norm_crm = normalize(crm_car)
        
        # Check if any db car string is a substring of norm_crm or vice versa
        is_found = False
        matched_db = ""
        
        for norm_db, orig_db in db_cars_norm.items():
            # if we have 'lada priora' in db, and crm is 'lada priora'
            # we check words overlap
            crm_words = set(norm_crm.split())
            db_words = set(norm_db.split())
            
            # if the db brand and model are in the crm words
            if len(db_words.intersection(crm_words)) >= 2: # At least brand and model match
                is_found = True
                matched_db = orig_db
                break
            elif db_words.issubset(crm_words):
                is_found = True
                matched_db = orig_db
                break
                
        if is_found:
            found.append((crm_car, matched_db))
        else:
            missing.append(crm_car)
            
    print(f"Total unique CRM entries evaluated: {len(found) + len(missing)}")
    print(f"Found in DB: {len(found)}")
    print(f"Missing from DB: {len(missing)}")
    
    print("\n--- MISSING CARS ---")
    for m in missing[:50]:
        print(m)
        
if __name__ == "__main__":
    main()
