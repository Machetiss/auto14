"use client";

import ServicePageLayout from '@/app/components/ServicePageLayout';
import { Settings, Search, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';
import { CarBrand } from '@/app/data/carBrands';

export default function BrandClientPage({ brand }: { brand: CarBrand }) {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l(`Ремонт и обслуживание ${brand.name}`, `Repair and Service for ${brand.name}`)}
            description={l(
                `Профессиональный сервис, 3D сход-развал и диагностика ходовой для ${brand.nameRu} (${brand.name}) в Казани.`,
                `Professional auto service, 3D wheel alignment, and diagnostics for ${brand.name} in Kazan.`
            )}
            price={l("от 600₽", "from 600₽")}
            heroImage="/job/hodovaya.jpg"
            symptoms={[
                l("Стук или гул при проезде неровностей", "Knocking or humming over bumps"),
                l("Нужно сделать 3D сход-развал", "3D alignment is needed"),
                l("Требуется замена масла", "Oil change is required"),
                l("Машину уводит в сторону", "Car pulls to the side")
            ]}
            features={[
                {
                    icon: Wrench,
                    title: l(`Опыт работы с ${brand.name}`, `Experienced with ${brand.name}`),
                    desc: l(`Знаем особенности подвески и типичные болячки автомобилей ${brand.name}.`, `We know the suspension specifics and typical issues of ${brand.name} cars.`)
                },
                {
                    icon: Settings,
                    title: l("Запчасти в наличии", "Parts in stock"),
                    desc: l(`Быстро найдем оригинальные детали или хорошие аналоги для вашего ${brand.nameRu}.`, `We quickly source OEM or quality aftermarket parts for your ${brand.name}.`)
                },
                {
                    icon: ShieldCheck,
                    title: l("Гарантия", "Warranty"),
                    desc: l("Даем честную гарантию на детали и все выполненные работы.", "We provide an honest warranty for parts and work performed.")
                }
            ]}
            processSteps={[
                {
                    title: l("Диагностика", "Diagnostics"),
                    desc: l("Осматриваем ходовую часть вашего автомобиля на подъемнике.", "We lift your car and carefully inspect the chassis.")
                },
                {
                    title: l("Согласование сметы", "Cost estimate"),
                    desc: l("Показываем все неисправности и фиксируем цену до начала работ.", "We show you the issues and fix the price before starting.")
                },
                {
                    title: l("Ремонт", "Repair"),
                    desc: l("Меняем изношенные детали и проводим регулировку схода-развала.", "We replace worn parts and adjust the wheel alignment.")
                }
            ]}
            faq={[
                {
                    question: l(`Вы берете старые модели ${brand.name}?`, `Do you work on older ${brand.name} models?`),
                    answer: l("Да, мы работаем с машинами любого года выпуска. У нас есть необходимое оборудование для большинства авто.", "Yes, we work on cars of any year. We have the required equipment.")
                },
                {
                    question: l("Есть ли нужные детали в наличии?", "Are the required parts in stock?"),
                    answer: l("У нас огромная база поставщиков в Казани. Большинство ходовых деталей для иномарок и отечественных авто доставляют нам от 30 минут до 2 часов.", "We have a vast supplier base. Most common parts arrive within 30 minutes to 2 hours.")
                }
            ]}
        />
    );
}
