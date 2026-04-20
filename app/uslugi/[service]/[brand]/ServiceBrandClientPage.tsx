"use client";

import ServicePageLayout from '@/app/components/ServicePageLayout';
import { Wrench, Settings, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { CarBrand } from '@/app/data/carBrands';
import { Service } from '@/app/data/services';

interface Props {
  service: Service;
  brand: CarBrand;
}

export default function ServiceBrandClientPage({ service, brand }: Props) {
  const { language } = useLanguage();
  const ru = language === 'ru';

  const title = ru
    ? `${service.nameRu} ${brand.name} в Казани`
    : `${service.nameEn} for ${brand.name} in Kazan`;

  const description = ru
    ? `Профессиональный ${service.nameRu.toLowerCase()} для автомобилей ${brand.nameRu} (${brand.name}) в Казани. ${service.description}`
    : `Professional ${service.nameEn.toLowerCase()} for ${brand.name} vehicles in Kazan. ${service.descriptionEn}`;

  const price = service.priceFrom > 0
    ? (ru ? `от ${service.priceFrom}₽` : `from ${service.priceFrom}₽`)
    : (ru ? 'Бесплатно' : 'Free');

  return (
    <ServicePageLayout
      title={title}
      description={description}
      price={price}
      heroImage={service.heroImage}
      symptoms={ru ? service.symptoms : service.symptomsEn}
      features={[
        {
          icon: Wrench,
          title: ru
            ? `Знаем особенности ${brand.name}`
            : `We know ${brand.name} specifics`,
          desc: ru
            ? `Мастера Авто14 имеют опыт работы с автомобилями ${brand.nameRu}. Знаем типичные болячки и быстро ставим диагноз.`
            : `Avto14 technicians have hands-on experience with ${brand.name} vehicles. We know common issues and diagnose them fast.`,
        },
        {
          icon: Clock,
          title: ru ? `Быстро: ${service.duration}` : `Fast: ${service.durationEn}`,
          desc: ru
            ? `Большинство деталей для ${brand.nameRu} есть в наличии у наших поставщиков в Казани. Доставка от 30 минут.`
            : `Most ${brand.name} parts are available from our Kazan suppliers. Delivery from 30 minutes.`,
        },
        {
          icon: ShieldCheck,
          title: ru ? 'Гарантия на работы' : 'Warranty on work',
          desc: ru
            ? 'Даём гарантию на все выполненные работы и установленные запчасти. Прозрачная смета до начала ремонта.'
            : 'We provide a warranty on all work and installed parts. Transparent estimate before any work begins.',
        },
        {
          icon: Settings,
          title: ru ? 'Стенд Hoffman 3D' : 'Hoffman 3D Stand',
          desc: ru
            ? 'После ремонта ходовой делаем сход-развал на немецком стенде Hoffman. Точность до 0,01°.'
            : 'After suspension repair, we perform alignment on a German Hoffman stand. Accuracy to 0.01°.',
        },
      ]}
      processSteps={[
        {
          title: ru ? 'Запись и приём' : 'Booking & Arrival',
          desc: ru
            ? `Запишитесь онлайн или по телефону. Подъедьте в удобное время — мы вас ждём.`
            : 'Book online or by phone. Come at a convenient time — we will be ready.',
        },
        {
          title: ru ? 'Диагностика бесплатно' : 'Free Diagnostics',
          desc: ru
            ? `Поднимаем ${brand.nameRu} на подъёмник, осматриваем ходовую и составляем смету. Всё честно, без скрытых доплат.`
            : `We lift your ${brand.name} on a hoist, inspect the suspension and prepare an estimate. No hidden charges.`,
        },
        {
          title: ru ? service.nameRu : service.nameEn,
          desc: ru
            ? `Выполняем ${service.nameRu.toLowerCase()} с гарантией. Используем качественные запчасти и расходники.`
            : `We perform ${service.nameEn.toLowerCase()} with a warranty using quality parts and consumables.`,
        },
        {
          title: ru ? 'Проверка и выдача' : 'Check & Delivery',
          desc: ru
            ? 'Проверяем результат, при необходимости делаем сход-развал. Выдаём авто с объяснением выполненных работ.'
            : 'We verify the result, perform alignment if needed, and hand over the car with a full explanation of work done.',
        },
      ]}
      faq={[
        {
          question: ru
            ? `Вы делаете ${service.nameRu.toLowerCase()} для всех годов выпуска ${brand.name}?`
            : `Do you do ${service.nameEn.toLowerCase()} for all ${brand.name} model years?`,
          answer: ru
            ? `Да, работаем со всеми поколениями ${brand.nameRu} — от старых моделей до новых. Оборудование и база запчастей позволяют обслуживать любые автомобили.`
            : `Yes, we work with all ${brand.name} generations — from older to the latest models. Our equipment and parts network covers them all.`,
        },
        {
          question: ru
            ? `Сколько стоит ${service.nameRu.toLowerCase()} для ${brand.nameRu}?`
            : `How much does ${service.nameEn.toLowerCase()} cost for ${brand.name}?`,
          answer: ru
            ? `Цена зависит от года, модели и комплектации. ${service.nameRu} начинается ${service.priceFrom > 0 ? `от ${service.priceFrom} рублей` : 'бесплатно при заказе ремонта'}. Точную стоимость назовём после осмотра авто.`
            : `Price depends on the year, model and trim. ${service.nameEn} starts ${service.priceFrom > 0 ? `from ${service.priceFrom} rubles` : 'free with a repair order'}. We will give you the exact price after inspecting the car.`,
        },
        {
          question: ru ? 'Есть ли запчасти в наличии?' : 'Do you have parts in stock?',
          answer: ru
            ? `Для ${brand.nameRu} держим в наличии расходники и часто меняемые детали. Запчасти от поставщиков в Казани доставляются за 30–120 минут.`
            : `We keep consumables and frequently replaced parts for ${brand.name} in stock. Parts from Kazan suppliers arrive in 30–120 minutes.`,
        },
      ]}
    />
  );
}
