import Link from 'next/link';
import { Star, ShieldCheck, MapPin, ExternalLink, Award, Users } from 'lucide-react';
import ReviewsSection from '../components/ReviewsSection';
import { getCurrentSeasonYear } from '../lib/season';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Отзывы об автосервисе в Казани | Рейтинг 5.0',
    description: 'Более 160 реальных отзывов об автосервисе Авто14 на Заречной 5Б. Высокий рейтинг 5.0 на Яндекс Картах, 2ГИС и Авито. Читайте мнения автовладельцев.',
};

export default function OtzyvyPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 bg-brand-yellow text-black font-sans">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Breadcrumb */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-widest hover:text-accent-orange transition-colors"
                    >
                        ← На главную
                    </Link>
                </div>

                {/* Header */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight font-display">
                    Отзывы об автосервисе <span className="text-accent-orange">Авто14</span>
                </h1>

                {/* 50-word answer paragraph directly after H1 */}
                <div className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 mb-10 shadow-[6px_6px_0px_#000]">
                    <p className="text-base md:text-lg font-bold leading-relaxed text-black">
                        На странице собрано более 160 подтверждённых отзывов клиентов автосервиса «Авто14» на Заречной 5Б в Казани. Совокупный рейтинг мастерской на Яндекс Картах, 2ГИС и Авито составляет 5.0 звёзд из 5 возможных на основе более чем 200 реальных оценок за 2023–2026 годы. 98% клиентов обращаются повторно и рекомендуют наших мастеров друзьям.
                    </p>
                </div>

                {/* Trust stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-black text-brand-yellow p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] text-center">
                        <div className="text-3xl md:text-4xl font-black">5.0 ★</div>
                        <div className="text-xs font-bold uppercase opacity-80 mt-1">Средний балл</div>
                    </div>
                    <div className="bg-white text-black p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] text-center">
                        <div className="text-3xl md:text-4xl font-black">160+</div>
                        <div className="text-xs font-bold uppercase opacity-60 mt-1">Отзывов в базах</div>
                    </div>
                    <div className="bg-white text-black p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] text-center">
                        <div className="text-3xl md:text-4xl font-black">98%</div>
                        <div className="text-xs font-bold uppercase opacity-60 mt-1">Рекомендуют нас</div>
                    </div>
                    <div className="bg-black text-white p-5 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] text-center">
                        <div className="text-3xl md:text-4xl font-black text-accent-orange">10+ лет</div>
                        <div className="text-xs font-bold uppercase opacity-80 mt-1">Опыт мастеров</div>
                    </div>
                </div>

                {/* Rating platforms table */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_#000] mb-16">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                        Статистика оценок на независимых площадках
                    </h2>
                    <p className="text-xs md:text-sm font-bold opacity-60 uppercase tracking-wider mb-6">
                        Проверяйте честные отзывы в официальных карточках нашего автосервиса
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-4 border-black bg-black text-white text-xs md:text-sm uppercase tracking-wider font-black">
                                    <th className="p-3 md:p-4 rounded-tl-xl">Площадка</th>
                                    <th className="p-3 md:p-4">Количество отзывов</th>
                                    <th className="p-3 md:p-4">Рейтинг сервиса</th>
                                    <th className="p-3 md:p-4 rounded-tr-xl text-right">Ссылка</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-black/10 font-bold text-sm md:text-base">
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Яндекс Карты</td>
                                    <td className="p-3 md:p-4 opacity-70">62 подтвержденных отзыва</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">5.0 из 5 ★</td>
                                    <td className="p-3 md:p-4 text-right">
                                        <a
                                            href="https://yandex.ru/maps/org/avto14/108623850068/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-black text-xs uppercase underline decoration-2 hover:text-accent-orange"
                                        >
                                            Карты <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">2ГИС</td>
                                    <td className="p-3 md:p-4 opacity-70">23 подтвержденных отзыва</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">5.0 из 5 ★</td>
                                    <td className="p-3 md:p-4 text-right">
                                        <a
                                            href="https://2gis.ru/kazan/firm/70000001065947100"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-black text-xs uppercase underline decoration-2 hover:text-accent-orange"
                                        >
                                            2ГИС <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-brand-yellow/10 transition-colors">
                                    <td className="p-3 md:p-4 font-black">Авито Услуги</td>
                                    <td className="p-3 md:p-4 opacity-70">82 отзыва клиентов</td>
                                    <td className="p-3 md:p-4 font-black text-accent-orange">5.0 из 5 ★</td>
                                    <td className="p-3 md:p-4 text-right">
                                        <a
                                            href="https://www.avito.ru/brands/i165449740"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-black text-xs uppercase underline decoration-2 hover:text-accent-orange"
                                        >
                                            Авито <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-xs font-bold opacity-60 text-right">
                        Статистика обновлена {getCurrentSeasonYear('ru')}
                    </div>
                </div>

                {/* Trust Factors Section */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0_#000] mb-16">
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                        За что нас чаще всего благодарят в отзывах
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold text-sm md:text-base">
                        <div className="border-2 border-black/10 rounded-xl p-4 bg-brand-yellow/10">
                            <h3 className="font-black uppercase mb-1">Точность 3D сход-развала</h3>
                            <p className="opacity-80">Настройка углов установки колёс на немецком стенде Hoffman решает проблемы увода автомобиля в сторону и неравномерного износа протектора с первого заезда.</p>
                        </div>
                        <div className="border-2 border-black/10 rounded-xl p-4 bg-brand-yellow/10">
                            <h3 className="font-black uppercase mb-1">Бесплатная диагностика 0 ₽</h3>
                            <p className="opacity-80">Осмотр ходовой части на подъёмнике проводится бесплатно для всех без скрытых условий. Мастер наглядно показывает каждый люфт в шаровых, сайлентблоках и рулевых тягах.</p>
                        </div>
                        <div className="border-2 border-black/10 rounded-xl p-4 bg-brand-yellow/10">
                            <h3 className="font-black uppercase mb-1">Быстрый подбор автозапчастей</h3>
                            <p className="opacity-80">Заказываем детали напрямую со складов ведущих партнеров Казани (ПартКом, Росско и др.). Доставка занимает 1–2 часа прямо в бокс под ваш автомобиль.</p>
                        </div>
                        <div className="border-2 border-black/10 rounded-xl p-4 bg-brand-yellow/10">
                            <h3 className="font-black uppercase mb-1">Гарантия до 12 месяцев</h3>
                            <p className="opacity-80">Предоставляем гарантию на выполненный ремонт подвески и установленные детали до 1 года. Смета фиксируется до начала работ без скрытых доплат.</p>
                        </div>
                    </div>
                </div>

                {/* Section with live rotating reviews */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6">
                        Живые отзывы автовладельцев
                    </h2>
                    <ReviewsSection />
                </div>

                {/* CTA Box */}
                <div className="bg-black text-white p-8 md:p-12 rounded-[2rem] text-center border-4 border-black shadow-[8px_8px_0_#FF4500]">
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-brand-yellow">
                        Приезжайте и убедитесь сами
                    </h2>
                    <p className="text-base md:text-xl font-bold opacity-80 max-w-xl mx-auto mb-8">
                        Сделаем бесплатную диагностику подвески и точный 3D сход-развал на немецком стенде Hoffman. Без навязанных услуг.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+79992699359"
                            className="bg-brand-yellow text-black px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider hover:bg-white transition-colors"
                        >
                            Позвонить: +7 (999) 269-93-59
                        </a>
                        <Link
                            href="/"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                        >
                            На главную
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
