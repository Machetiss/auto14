export interface CarBrand {
  slug: string;
  name: string;
  nameRu: string;
}

export const carBrands: CarBrand[] = [
  // Самые популярные в РФ / Татарстане
  { slug: "kia", name: "KIA", nameRu: "Киа" },
  { slug: "hyundai", name: "Hyundai", nameRu: "Хёндай" },
  { slug: "lada", name: "LADA", nameRu: "Лада" },
  { slug: "toyota", name: "Toyota", nameRu: "Тойота" },
  { slug: "volkswagen", name: "Volkswagen", nameRu: "Фольксваген" },
  { slug: "skoda", name: "Skoda", nameRu: "Шкода" },
  { slug: "renault", name: "Renault", nameRu: "Рено" },
  { slug: "nissan", name: "Nissan", nameRu: "Ниссан" },
  { slug: "chevrolet", name: "Chevrolet", nameRu: "Шевроле" },
  { slug: "ford", name: "Ford", nameRu: "Форд" },
  { slug: "mazda", name: "Mazda", nameRu: "Мазда" },
  { slug: "mitsubishi", name: "Mitsubishi", nameRu: "Митсубиси" },
  { slug: "bmw", name: "BMW", nameRu: "БМВ" },
  { slug: "mercedes", name: "Mercedes-Benz", nameRu: "Мерседес" },
  { slug: "audi", name: "Audi", nameRu: "Ауди" },
  { slug: "honda", name: "Honda", nameRu: "Хонда" },
  { slug: "lexus", name: "Lexus", nameRu: "Лексус" },
  // Китайские (растут в Татарстане)
  { slug: "chery", name: "Chery", nameRu: "Чери" },
  { slug: "haval", name: "Haval", nameRu: "Хавейл" },
  { slug: "geely", name: "Geely", nameRu: "Джили" },
  { slug: "changan", name: "Changan", nameRu: "Чанган" },
  { slug: "exeed", name: "Exeed", nameRu: "Эксид" },
  { slug: "omoda", name: "Omoda", nameRu: "Омода" },
  { slug: "jaecoo", name: "Jaecoo", nameRu: "Джеку" },
  // Дополнительные европейские и азиатские
  { slug: "suzuki", name: "Suzuki", nameRu: "Сузуки" },
  { slug: "subaru", name: "Subaru", nameRu: "Субару" },
  { slug: "opel", name: "Opel", nameRu: "Опель" },
  { slug: "peugeot", name: "Peugeot", nameRu: "Пежо" },
  { slug: "citroen", name: "Citroën", nameRu: "Ситроен" },
  { slug: "daewoo", name: "Daewoo", nameRu: "Дэу" },
  { slug: "infiniti", name: "Infiniti", nameRu: "Инфинити" },
  { slug: "land-rover", name: "Land Rover", nameRu: "Ленд Ровер" },
  { slug: "volvo", name: "Volvo", nameRu: "Вольво" },
  { slug: "uaz", name: "UAZ", nameRu: "УАЗ" },
  { slug: "gaz", name: "GAZ", nameRu: "ГАЗ" },
];
