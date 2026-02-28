"use client";

import ServicePageLayout from '../components/ServicePageLayout';
import { Settings, Search, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Diagnostika() {
    const { language } = useLanguage();
    const l = (ru: string, en: string) => language === 'ru' ? ru : en;

    return (
        <ServicePageLayout
            title={l("Диагностика подвески", "Suspension Diagnostics")}
            description={l(
                "Тщательный осмотр ходовой части на подъемнике. Найдем причину стука, люфтов и неустойчивости на дороге.",
                "Thorough chassis inspection on a lift. We'll find the source of knocking, play, and instability."
            )}
            price={l("0₽ (Бесплатно)", "0₽ (Free)")}
            heroImage="/gallery/1.jpg"
            symptoms={[
                l("Посторонние стуки при проезде неровностей", "Strange knocking over bumps"),
                l("Гул или шум во время движения", "Humming or noise while driving"),
                l("Вибрация на руле или кузове", "Vibration in steering or body"),
                l("Машину тянет в сторону", "Car pulls to one side"),
                l("Неравномерный износ шин", "Uneven tire wear"),
                l("Покупка подержанного автомобиля", "Buying a used car")
            ]}
            features={[
                {
                    icon: Settings,
                    title: l("Осмотр на подъемнике", "Lift inspection"),
                    desc: l("Проверка всех узлов: рычаги, сайлентблоки, шаровые, наконечники, амортизаторы.", "Full check: arms, bushings, ball joints, tie rods, shocks.")
                },
                {
                    icon: Search,
                    title: l("Честный подход", "Honest approach"),
                    desc: l("Покажем все неисправности лично, объясним, что критично, а что нет.", "We'll show you every issue in person and explain what's critical.")
                },
                {
                    icon: FileText,
                    title: l("Рекомендации", "Recommendations"),
                    desc: l("Подскажем, какие узлы требуют срочного ремонта, а с чем можно подождать.", "We'll advise what needs urgent repair and what can wait.")
                }
            ]}
            processSteps={[
                {
                    title: l("Опрос клиента", "Customer interview"),
                    desc: l("Выслушаем ваши жалобы на поведение автомобиля.", "We'll listen to your concerns about the car's behavior.")
                },
                {
                    title: l("Тест-драйв", "Test drive"),
                    desc: l("При необходимости мастер проедет с вами, чтобы услышать проблему в движении.", "If needed, a technician will ride along to hear the issue firsthand.")
                },
                {
                    title: l("Осмотр на подъемнике", "Lift inspection"),
                    desc: l("Визуальная и механическая проверка состояния ходовой части.", "Visual and mechanical inspection of the chassis.")
                },
                {
                    title: l("Проверка люфтов", "Play check"),
                    desc: l("Диагностика ступичных подшипников, рулевых тяг и шаровых опор.", "Testing wheel bearings, tie rods, and ball joints.")
                },
                {
                    title: l("Заключение", "Conclusion"),
                    desc: l("Выдача списка необходимых работ с точной стоимостью запчастей.", "A detailed list of needed repairs with exact parts pricing.")
                }
            ]}
            faq={[
                {
                    question: l("Диагностика платная?", "Is the diagnostics free?"),
                    answer: l("0 ₽ — если вы ремонтируете автомобиль у нас. В остальных случаях — 500 ₽.", "Free if you repair with us. Otherwise — 500 ₽.")
                },
                {
                    question: l("Сколько времени занимает диагностика?", "How long does it take?"),
                    answer: l("Обычно осмотр занимает 20-30 минут.", "Usually 20–30 minutes.")
                },
                {
                    question: l("Можно ли присутствовать в ремзоне?", "Can I be present in the service area?"),
                    answer: l("Да, вы можете пройти к подъемнику и мастер покажет вам все найденные неисправности.", "Yes! Walk over to the lift and the tech will show you everything.")
                },
                {
                    question: l("Если я буду ремонтироваться у вас?", "What if I repair with you?"),
                    answer: l("При ремонте ходовой части у нас — диагностика подвески БЕСПЛАТНО.", "Suspension diagnostics are FREE when you repair with us.")
                }
            ]}
        />
    );
}
