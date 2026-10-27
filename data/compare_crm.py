import os
import csv
import re
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

# Настройки берутся строго из .env (без открытых ссылок в репозитории)
CRM_SHEET_ID = os.environ.get('CRM_SHEET_ID')
CRM_RANGE = os.environ.get('CRM_RANGE', 'A1:Z5000')
SERVICE_ACCOUNT_FILE = os.environ.get('GOOGLE_APPLICATION_CREDENTIALS')
db_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'Auto_Filters_DB.csv')

def get_crm_cars():
    if not CRM_SHEET_ID or not SERVICE_ACCOUNT_FILE:
        raise RuntimeError("CRM_SHEET_ID и GOOGLE_APPLICATION_CREDENTIALS должны быть заданы в .env")
    creds = Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE,
        scopes=['https://www.googleapis.com/auth/spreadsheets.readonly']
    )
    service = build('sheets', 'v4', credentials=creds)
    result = service.spreadsheets().values().get(
        spreadsheetId=CRM_SHEET_ID,
        range=CRM_RANGE
    ).execute()
    rows = result.get('values', [])
    if not rows:
        return []
    
    model_idx = 4
    name_idx = 1
    
    unique_cars = set()
    for row in rows[1:]:
        if len(row) > model_idx:
            model = row[model_idx].strip()
            name = row[name_idx].strip() if len(row) > name_idx else ''
            if model:
                unique_cars.add(model)
            elif name and len(name) > 2 and any(char.isalpha() for char in name):
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
