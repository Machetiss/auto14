"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Disc, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Shinomontazh() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Шиномонтаж и Балансировка", "Tire Service & Balancing")}
            description={l(
                "Сезонная переобувка без очередей (по записи). Бережное отношение к датчикам давления и низкому профилю.",
                "Seasonal tire swap by appointment — no waiting. Careful handling of pressure sensors and low-profile tires."
            )}
            price={l("от 2200₽", "from 2200₽")}
            heroImage="/job/shin.jpg"
            symptoms={[
                l("Наступил сезон (зима/лето)", "Seasonal change (winter/summer)"),
                l("Биение руля на скорости 80-100 км/ч", "Steering vibration at 80–100 km/h"),
                l("Шум резины (неравномерный износ)", "Tire noise (uneven wear)"),
                l("Купили новые шины", "Bought new tires"),
                l("Нужно проверить балансировку", "Need to check balancing"),
                l("Подготовка к дальней поездке", "Preparing for a long trip")
            ]}
            features={[
                {
                    icon: Clock,
                    title: l("По записи", "By appointment"),
                    desc: l("Ценим ваше время. Приезжаете к назначенному часу — заезжаете сразу в бокс.", "We value your time. Arrive at your scheduled time — drive straight into the bay.")
                },
                {
                    icon: Disc,
                    title: l("Бережем диски", "Rim protection"),
                    desc: l("Используем пластиковые насадки, чтобы не поцарапать литье.", "We use plastic guards to prevent scratching alloy wheels.")
                },
                {
                    icon: ShieldCheck,
                    title: l("Гарантия на работы", "Work warranty"),
                    desc: l("Мы уверены в качестве балансировки и даем гарантию.", "We stand behind our balancing quality with a warranty.")
                }
            ]}
            processSteps={[
                {
                    title: l("Демонтаж/Монтаж", "Dismount/Mount"),
                    desc: l("Аккуратная работа на профессиональном станке. Работаем с низким профилем.", "Careful work on professional equipment. Low-profile compatible.")
                },
                {
                    title: l("Балансировка", "Balancing"),
                    desc: l("Калиброванные станки. Клеим грузики так, чтобы их не оторвало керхером на мойке.", "Calibrated machines. Weights applied securely — won't come off at the car wash.")
                },
                {
                    title: l("Установка на авто", "Mounting on car"),
                    desc: l("Затяжка болтов крест-накрест.", "Cross-pattern bolt tightening.")
                },
                {
                    title: l("Упаковка", "Packaging"),
                    desc: l("Старые шины упакуем в плотные пакеты, чтобы не испачкать салон.", "Old tires packed in bags to keep your car clean.")
                }
            ]}
            faq={[
                {
                    question: l("Какая цена на шиномонтаж?", "What's the price for tire service?"),
                    answer: l("Комплексная переобувка (R14) — от 2200 ₽ за комплект. В цену входит снятие/установка, монтаж и балансировка.", "Full swap (R14) — from 2,200 ₽ per set. Includes removal, mounting, and balancing.")
                },
                {
                    question: l("Можно ли записаться день в день?", "Can I book same-day?"),
                    answer: l("В пик сезона лучше записываться за 2-3 дня. В остальное время — возможно, звоните!", "During peak season, book 2–3 days ahead. Otherwise — call us, we might fit you in!")
                },
                {
                    question: l("Сколько времени занимает переобувка?", "How long does a swap take?"),
                    answer: l("Обычно полный комплекс (4 колеса) занимает от 30 до 40 минут.", "A full set (4 wheels) typically takes 30–40 minutes.")
                },
                {
                    question: l("Датчики давления не сломаете?", "Will you damage my TPMS sensors?"),
                    answer: l("Нет, наши мастера умеют работать с датчиками TPMS.", "No, our techs are trained to handle TPMS sensors carefully.")
                }
            ]}
        />
    );
}
