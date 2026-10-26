import csv

file_path = r'c:\Users\lenovo\Pictures\Авто14\Сайт\avto14\data\Auto_Filters_DB.csv'

expected_columns = 34

errors = []

with open(file_path, mode='r', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=';')
    header = next(reader)
    if len(header) != expected_columns:
        errors.append(f"Header has {len(header)} columns instead of {expected_columns}")
        
    for line_num, row in enumerate(reader, start=2):
        if len(row) != expected_columns:
            errors.append(f"Row {line_num} has {len(row)} columns: {row[0] if len(row) > 0 else ''}")
            continue
            
        brand, model, year_from, year_to, engine_volume, fuel_type, oil_ngn_5w30_product, oil_ngn_5w30_article, oil_ngn_5w40_product, oil_ngn_5w40_article, oil_specs, oil_fill_liters, filter_oil_mann, filter_oil_lynx, filter_oil_sufix, filter_air_mann, filter_air_lynx, filter_air_sufix, filter_cabin_mann, filter_cabin_lynx, filter_cabin_sufix, notes, at_type, at_oil_specs, at_oil_fill_liters, at_ngn_product, at_ngn_article, filter_oil_oe, filter_air_oe, filter_cabin_oe, oil_ngn_aline_5w30_product, oil_ngn_aline_5w30_article, oil_ngn_aline_5w40_product, oil_ngn_aline_5w40_article = row
        
        # Check for empty strings where there should be some data or "нет данных"
        empty_fields = [i for i, val in enumerate(row) if val.strip() == '']
        if empty_fields:
            errors.append(f"Row {line_num} ({brand} {model}) has empty fields (should be 'нет данных' or value) at columns: {empty_fields}")
            
        # Check oil_fill_liters format (should be a float or float-like or 'нет данных')
        if oil_fill_liters.strip() != 'нет данных':
            try:
                # Often it's a number like 3.6 or 4
                float(oil_fill_liters.replace(',', '.'))
            except ValueError:
                errors.append(f"Row {line_num} ({brand} {model}) has strange oil_fill_liters: '{oil_fill_liters}'")
                
        # Check notes
        if 'Ожидает проверки' in notes:
            errors.append(f"Row {line_num} ({brand} {model}) requires manual check ('Ожидает проверки')")

if errors:
    print(f"Found {len(errors)} issues:")
    for err in errors[:50]: # print up to 50 errors
        print(err)
    if len(errors) > 50:
        print(f"... and {len(errors) - 50} more.")
else:
    print("No obvious formatting errors or missing data found in the CSV!")
