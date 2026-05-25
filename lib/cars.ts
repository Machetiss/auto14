import fs from 'fs';
import path from 'path';

export interface CarSpec {
    brand: string;
    model: string;
    year_from: string;
    year_to: string;
    engine_volume: string;
    fuel_type: string;
    oil_ngn_5w30_product: string;
    oil_ngn_5w30_article: string;
    oil_ngn_5w40_product: string;
    oil_ngn_5w40_article: string;
    oil_specs: string;
    oil_fill_liters: string;
    filter_oil_mann: string;
    filter_air_mann: string;
    filter_cabin_mann: string;
    notes: string;
}

export function getCarSpecs(): CarSpec[] {
    const csvPath = path.join(process.cwd(), 'data', 'Auto_Filters_DB.csv');
    
    if (!fs.existsSync(csvPath)) {
        return [];
    }

    const content = fs.readFileSync(csvPath, 'utf-8');
    const lines = content.split('\n');
    const headers = lines[0].split(';');

    return lines.slice(1)
        .filter(line => line.trim() !== '')
        .map(line => {
            const values = line.split(';');
            const spec: any = {};
            headers.forEach((header, index) => {
                spec[header.trim()] = values[index]?.trim() || '';
            });
            return spec as CarSpec;
        });
}

export function getBrands() {
    const specs = getCarSpecs();
    return Array.from(new Set(specs.map(s => s.brand))).sort();
}

export function getModelsByBrand(brand: string) {
    const specs = getCarSpecs();
    return Array.from(new Set(specs
        .filter(s => s.brand.toLowerCase() === brand.toLowerCase())
        .map(s => s.model)))
        .sort();
}

export function getSpecsByModel(brand: string, model: string) {
    const specs = getCarSpecs();
    return specs.filter(s => 
        s.brand.toLowerCase() === brand.toLowerCase() && 
        s.model.toLowerCase() === model.toLowerCase()
    );
}
