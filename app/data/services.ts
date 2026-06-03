export interface Service {
  slug: string;
  name: string;         // Название для URL и заголовков
  nameRu: string;       // Русское название
  nameEn: string;       // Английское
  priceFrom: number;    // Цена от (руб)
  duration: string;     // Примерное время (рус)
  durationEn: string;   // Примерное время (eng)
  description: string;  // Краткое описание (рус)
  descriptionEn: string;
  symptoms: string[];   // Симптомы (рус)
  symptomsEn: string[];
  heroImage: string;    // Путь к картинке
}

export const services: Service[] = [
  {
    slug: "razval-shozhdenie",
    name: "3D Сход-развал",
    nameRu: "3D Сход-развал",
    nameEn: "3D Wheel Alignment",
    priceFrom: 1400,
    duration: "от 30 минут",
    durationEn: "from 30 minutes",
    description: "Точная регулировка углов установки колёс на немецком стенде Hoffman 3D. Устраняем увод машины в сторону и неравномерный износ шин.",
    descriptionEn: "Precise wheel angle adjustment on a German Hoffman 3D stand. We eliminate pulling to the side and uneven tire wear.",
    symptoms: [
      "Машину уводит в сторону на прямой дороге",
      "Руль стоит не прямо при езде прямо",
      "Шины изнашиваются неравномерно (с одной стороны)",
      "Автомобиль 'рыскает' по колее",
    ],
    symptomsEn: [
      "Car pulls to the side on a straight road",
      "Steering wheel is off-center when driving straight",
      "Tires wear unevenly (on one side)",
      "Vehicle follows ruts in the road",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "shinomontazh",
    name: "Шиномонтаж",
    nameRu: "Шиномонтаж и балансировка",
    nameEn: "Tire Service & Balancing",
    priceFrom: 2200,
    duration: "от 30 минут",
    durationEn: "from 30 minutes",
    description: "Сезонная смена резины, балансировка колёс и проверка давления. Работаем с дисками R13–R21.",
    descriptionEn: "Seasonal tire change, wheel balancing and pressure check. We work with R13–R21 rims.",
    symptoms: [
      "Вибрация руля на скорости 60–120 км/ч",
      "Нужна сезонная смена резины",
      "Биение колеса при движении",
      "Шум от колёс на трассе",
    ],
    symptomsEn: [
      "Steering wheel vibration at 60–120 km/h",
      "Seasonal tire change is needed",
      "Wheel wobble while driving",
      "Tire noise on the highway",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "zamena-masla",
    name: "Замена масла",
    nameRu: "Замена масла в двигателе",
    nameEn: "Engine Oil Change",
    priceFrom: 1000,
    duration: "от 20 минут",
    durationEn: "from 20 minutes",
    description: "Замена моторного масла и масляного фильтра. Используем масла ведущих брендов, подбираем вязкость по регламенту производителя.",
    descriptionEn: "Engine oil and filter replacement. We use oils from leading brands, selected by the manufacturer's specifications.",
    symptoms: [
      "Подошёл срок по пробегу (каждые 10 000–15 000 км)",
      "Масло потемнело или пахнет горелым",
      "Загорелась лампа давления масла",
      "Нужно пройти ТО",
    ],
    symptomsEn: [
      "Due by mileage (every 10,000–15,000 km)",
      "Oil has darkened or smells burnt",
      "Oil pressure warning light is on",
      "Scheduled maintenance is due",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "remont-podveski",
    name: "Ремонт подвески",
    nameRu: "Ремонт ходовой части",
    nameEn: "Suspension Repair",
    priceFrom: 600,
    duration: "от 1 часа",
    durationEn: "from 1 hour",
    description: "Диагностика и ремонт ходовой части: замена сайлентблоков, шаровых, рычагов, стабилизаторов. Работаем быстро — большинство деталей в наличии.",
    descriptionEn: "Full suspension diagnostics and repair: bushings, ball joints, control arms, stabilizer links. We work fast — most parts are in stock.",
    symptoms: [
      "Стук или скрип при проезде неровностей",
      "Стук в передней подвеске на кочках",
      "Вибрация кузова при движении",
      "Скрежет при повороте руля",
    ],
    symptomsEn: [
      "Knocking or squeaking over bumps",
      "Clunking from front suspension on rough roads",
      "Body vibration while driving",
      "Grinding noise when turning the wheel",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "zamena-rulevogo-nakonechnika",
    name: "Замена рулевого наконечника",
    nameRu: "Замена рулевого наконечника",
    nameEn: "Tie Rod End Replacement",
    priceFrom: 700,
    duration: "от 40 минут",
    durationEn: "from 40 minutes",
    description: "Замена изношенных рулевых наконечников и тяг. После замены обязательно делаем сход-развал для корректной управляемости.",
    descriptionEn: "Replacement of worn tie rod ends and rods. After replacement, we always perform wheel alignment for proper handling.",
    symptoms: [
      "Люфт руля, нечёткая реакция на поворот",
      "Стук в рулевой при движении по кочкам",
      "Машину уводит в сторону после замены шин",
      "Вибрация рулевого колеса",
    ],
    symptomsEn: [
      "Steering play, vague steering response",
      "Knocking in steering over bumps",
      "Car pulls after a tire change",
      "Steering wheel vibration",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "zamena-sharovoy",
    name: "Замена шаровой опоры",
    nameRu: "Замена шаровой опоры",
    nameEn: "Ball Joint Replacement",
    priceFrom: 800,
    duration: "от 1 часа",
    durationEn: "from 1 hour",
    description: "Замена шаровых опор болтового и прессованного типа. Неисправная шаровая — прямая угроза безопасности. Проверим и заменим в день обращения.",
    descriptionEn: "Replacement of both bolt-in and pressed ball joints. A worn ball joint is a direct safety hazard. We will inspect and replace it same day.",
    symptoms: [
      "Стук при повороте и торможении",
      "Скрип при вращении руля на месте",
      "Неравномерный износ шин",
      "Ощущение, что колесо гуляет",
    ],
    symptomsEn: [
      "Knocking when turning and braking",
      "Squeaking when steering at standstill",
      "Uneven tire wear",
      "Feeling that the wheel is loose",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "zamena-amortizatorov",
    name: "Замена амортизаторов",
    nameRu: "Замена амортизаторов",
    nameEn: "Shock Absorber Replacement",
    priceFrom: 1700,
    duration: "от 1 часа",
    durationEn: "from 1 hour",
    description: "Диагностика и замена передних и задних амортизаторов. Восстанавливаем комфорт, безопасность и управляемость автомобиля.",
    descriptionEn: "Inspection and replacement of front and rear shock absorbers. We restore comfort, safety and handling.",
    symptoms: [
      "Машину сильно раскачивает на кочках",
      "Долгое раскачивание после проезда лежачего полицейского",
      "Масляные подтёки на амортизаторе",
      "Пробои подвески при езде с пассажирами",
    ],
    symptomsEn: [
      "Heavy body bounce over bumps",
      "Car keeps bouncing after speed bumps",
      "Oil leaks on the shock absorber body",
      "Suspension bottoming out with passengers",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
  {
    slug: "diagnostika",
    name: "Диагностика",
    nameRu: "Диагностика ходовой части",
    nameEn: "Chassis Diagnostics",
    priceFrom: 0,
    duration: "от 20 минут",
    durationEn: "from 20 minutes",
    description: "Бесплатная диагностика ходовой части при заказе ремонта. Поднимем автомобиль на подъёмник, осмотрим все узлы и честно скажем что нужно заменить.",
    descriptionEn: "Free chassis diagnostics with any repair order. We will lift your car, inspect all components and honestly tell you what needs to be replaced.",
    symptoms: [
      "Слышен подозрительный звук, но непонятно откуда",
      "Хотите знать состояние ходовой перед покупкой авто",
      "Готовитесь к длинной поездке",
      "Давно не проверяли ходовую (более 1 года)",
    ],
    symptomsEn: [
      "Suspicious noise but unsure of the source",
      "Want to check suspension before buying a used car",
      "Preparing for a long trip",
      "Have not inspected suspension in over a year",
    ],
    heroImage: "/job/hodovaya.jpg",
  },
];
