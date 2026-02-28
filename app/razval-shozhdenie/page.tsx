"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Target, Gauge, Clock, Settings, Wrench, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RazvalShozhdenie() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("3D Развал-схождение", "3D Wheel Alignment")}
            description={l(
                "Идеальная точность на стенде Hoffman. Устраним жор резины и увод руля за 20 минут.",
                "Perfect precision on a Hoffman stand. We'll fix tire wear and steering pull in 20 minutes."
            )}
            price={l("от 1200₽", "from 1200₽")}
            heroImage="/job/razval.jpg"
            symptoms={[
                l("Машину тянет в сторону на ровной дороге", "Car pulls to one side on a straight road"),
                l("Неравномерный износ резины (жрет край)", "Uneven tire wear (edge wear)"),
                l("Руль стоит криво при движении прямо", "Steering wheel is off-center when driving straight"),
                l("После ремонта ходовой или замены шин", "After suspension repair or tire replacement"),
                l("Плохой возврат руля после поворота", "Poor steering return after turning"),
                l("Влетели в большую яму или бордюр", "Hit a pothole or curb")
            ]}
            features={[
                {
                    icon: Target,
                    title: l("Точность 0.01°", "0.01° Precision"),
                    desc: l("Стенд Hoffman (Германия) с 3D-технологией исключает ошибки.", "Hoffman stand (Germany) with 3D technology eliminates errors.")
                },
                {
                    icon: Clock,
                    title: l("20 минут", "20 minutes"),
                    desc: l("Среднее время работы.", "Average service time.")
                },
                {
                    icon: Wrench,
                    title: l("Любые авто", "Any car"),
                    desc: l("База данных на 50 000+ моделей, включая правый руль.", "Database of 50,000+ models, including right-hand drive.")
                }
            ]}
            processSteps={[
                {
                    title: l("Диагностика подвески", "Suspension check"),
                    desc: l("Бесплатно проверяем ходовую перед регулировкой. Если есть люфты – развал делать нельзя.", "Free chassis inspection before adjustment. If there's play — alignment can't be done.")
                },
                {
                    title: l("Установка мишеней", "Target installation"),
                    desc: l("Крепим 3D-мишени на колеса. Аккуратная установка на диски.", "We mount 3D targets on the wheels. Careful installation on rims.")
                },
                {
                    title: l("Прокатка и измерения", "Rolling & measurements"),
                    desc: l("Прокатываем авто на 20 см. Камеры считывают углы установки колес.", "We roll the car 20 cm. Cameras read the wheel alignment angles.")
                },
                {
                    title: l("Регулировка", "Adjustment"),
                    desc: l("Выставляем заводские параметры (развал, схождение).", "We set factory specifications (camber, toe).")
                },
                {
                    title: l("Отчет", "Report"),
                    desc: l("Показываем результаты ДО и ПОСЛЕ.", "We show you before & after results.")
                }
            ]}
            faq={[
                {
                    question: l("Сколько стоит развал-схождение?", "How much does wheel alignment cost?"),
                    answer: l("От 1200 ₽ за одну ось (например, Kia Rio). Две оси — от 2200 ₽ (схождение) до 2600 ₽ (полный комплекс).", "From 1,200 ₽ for one axle (e.g. Kia Rio). Two axles — from 2,200 ₽ (toe) to 2,600 ₽ (full package).")
                },
                {
                    question: l("Нужно ли делать развал после смены резины?", "Do I need alignment after changing tires?"),
                    answer: l("Да. Износ деталей подвески меняет углы, новая резина требует идеальных настроек для долгой службы.", "Yes. Suspension wear changes the angles, and new tires need perfect settings for long life.")
                },
                {
                    question: l("Если ходовая разбита, сделаете?", "Can you do it if the suspension is worn?"),
                    answer: l("Нет. С люфтами в шаровых или наконечниках точный развал невозможен. Сначала ремонт (можно у нас), потом регулировка.", "No. With play in ball joints or tie rods, precise alignment is impossible. Repair first (we can do it), then alignment.")
                },
                {
                    question: l("Даете гарантию?", "Do you offer a warranty?"),
                    answer: l("Да, гарантия на работы – 2 недели. Если руль будет стоять криво – переделаем бесплатно.", "Yes, 2-week warranty. If the steering is still off-center — we'll redo it free of charge.")
                }
            ]}
        />
    );
}
