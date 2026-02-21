"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Settings, MoveRight, CornerRightDown, Phone, Wrench, ChevronRight, PackageSearch, MapPin, Target, UserCheck, Banknote, ChevronDown, ChevronUp } from 'lucide-react';
import BookingModal from './components/BookingModal';
import ReviewsSection from './components/ReviewsSection';
import CarWheel from './components/CarWheel';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { TelegramIcon } from './components/icons/TelegramIcon';

export default function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "Где сделать 3D развал-схождение в Казани?",
            a: "Автосервис Авто14 находится в Константиновке по адресу ул. Заречная 5Б. Мы используем современный 3D стенд Hoffman, который гарантирует высочайшую точность регулировки."
        },
        {
            q: "Как часто и когда нужно проверять развал-схождение?",
            a: "Мы рекомендуем проверять углы при каждой сезонной смене шин. Также проверка обязательна после попадания в глубокую яму, при неравномерном износе резины или после любого ремонта элементов подвески."
        },
        {
            q: "Какие автомобили вы обслуживаете?",
            a: "Мы работаем практически со всеми марками авто: от Lada и VAZ до современных иномарок (Kia, Toyota, BMW, Mercedes) и автомобилей старше 15 лет."
        },
        {
            q: "Нужно ли записываться заранее?",
            a: "Да, во избежание очередей мы работаем по предварительной записи. Вы можете записаться через форму на сайте или по телефону — выберем удобное для вас время."
        },
        {
            q: "Даете ли вы гарантию на работы?",
            a: "Конечно. Мы несем полную ответственность за качество выполненных работ. На все услуги нашего сервиса действует официальная гарантия."
        },
        {
            q: "Можно ли приехать со своими запчастями?",
            a: "Да, мы без проблем установим ваши запчасти. Однако в этом случае гарантия будет распространяться только на правильность установки, но не на саму деталь."
        },
        {
            q: "У вас есть запчасти в наличии?",
            a: "Своего склада запчастей у нас нет, но мы сотрудничаем с крупнейшими поставщиками Казани. При заказе у нас любые детали доставляются прямо в сервис в течение 2 часов."
        },
        {
            q: "Бесплатная ли у вас диагностика?",
            a: "Диагностика ходовой части проводится бесплатно при условии, что выявленные неисправности вы будете устранять в нашем автосервисе."
        },
        {
            q: "Сколько времени занимает процедура развала?",
            a: "В среднем процедура 3D развал-схождения на одну ось занимает от 20 до 40 минут, в зависимости от состояния регулировочных болтов."
        },
        {
            q: "На каком оборудовании вы работаете?",
            a: "Наш главный инструмент — профессиональный немецкий 3D стенд Hoffman. Это эталон точности в мире авторемонта, исключающий человеческий фактор."
        }
    ];

    return (
        <div className={`min-h-screen bg-brand-yellow text-black font-sans selection:bg-black selection:text-brand-yellow relative overflow-x-hidden`}>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-4 px-4 bg-brand-yellow shadow-md border-b-2 border-black">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left: Nav Links */}
                    <nav className="flex gap-4 md:gap-6 font-black uppercase text-xs md:text-sm tracking-widest text-black font-sans">
                        <Link href="#services" className="hover:text-accent-orange transition-colors">Услуги</Link>
                        <Link href="#reviews" className="hover:text-accent-orange transition-colors">Отзывы</Link>
                        <Link href="#gallery" className="hover:text-accent-orange transition-colors">Галерея</Link>
                    </nav>

                    {/* Right: CTA & Phone & Address */}
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex flex-col items-end">
                            <a href="tel:+79992699359" className="flex items-center gap-2 font-black text-xl xl:text-2xl uppercase tracking-wider text-black group hover:text-accent-orange transition-colors">
                                <Phone className="w-6 h-6 text-accent-orange fill-current" />
                                <span>+7 (999) 269-93-59</span>
                            </a>
                            <div className="flex items-center gap-1 text-[10px] font-bold uppercase opacity-70">
                                <MapPin className="w-3 h-3" />
                                <span>ул. Заречная 5Б, Казань</span>
                            </div>
                        </div>
                        <button onClick={() => setIsBookingOpen(true)} className="btn-primary !px-6 !py-2 !text-[10px] md:!text-xs md:!px-8 md:!py-3 shadow-none hover:shadow-none">
                            Записаться
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO SECTION - "GIRL DESIGN" */}
            <main className="container mx-auto px-4 pt-24 min-h-screen flex flex-col md:flex-row items-center relative gap-8 md:gap-0">

                {/* Background Grid Pattern (Subtle) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Floating "Pain Points" Texts (Absolute Positioning) */}




                <div className="z-20 relative md:w-[60%] flex flex-col items-start text-left mb-12 md:mb-0 pl-0 md:pl-4">

                    {/* Top Logo/Brand Block */}
                    <div className="relative flex items-center mb-6 mt-8 md:mt-0">
                        <span className="text-black text-[10vw] md:text-[6vw] leading-[0.8] font-black uppercase tracking-tighter font-display">
                            АВТ
                        </span>
                        <div className="relative w-[8vw] h-[8vw] md:w-[5vw] md:h-[5vw] animate-spin-slow-custom mx-[-0.2vw]">
                            <Image
                                src="/logo-wheel.png"
                                alt="О"
                                fill
                                className="object-contain scale-110"
                            />
                        </div>
                        <span className="text-black text-[10vw] md:text-[6vw] leading-[0.8] font-black uppercase tracking-tighter font-display">
                            14
                        </span>
                    </div>

                    {/* Symptoms / Pain Points as structured tags */}
                    <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
                        {[
                            "Тянет руль?", "Ест резину?", "Стучит подвеска?", "Увод в сторону?", "Кривой руль?"
                        ].map((tag, idx) => (
                            <span key={idx} className="bg-black/5 border border-black/10 px-3 py-1 text-[10px] md:text-sm font-bold uppercase tracking-wider text-black/70 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* MAIN TAGLINE - HUGE & MODERN */}
                    <h1 className="text-[14vw] md:text-[8vw] leading-[0.9] md:leading-[0.8] font-black tracking-tighter uppercase mb-4 text-black flex flex-col font-display">
                        <span>НАМ В</span>
                        <span>РАДОСТЬ</span>
                    </h1>
                    <p className="text-[5.5vw] md:text-[2.2vw] font-black uppercase leading-[1.3] md:leading-[1.1] text-black opacity-90 mb-10 max-w-xl font-sans">
                        СДЕЛАТЬ ВАШУ МАШИНУ <br />ИДЕАЛЬНОЙ
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-30 relative">
                        <button onClick={() => setIsBookingOpen(true)} className="btn-primary group">
                            Записаться
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+79992699359" className="btn-secondary w-full">
                                Позвонить
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Image Content - The Girl */}
                <div className="md:w-[45%] relative h-[50vh] md:h-[85vh] w-full flex items-end justify-center z-10 md:absolute md:right-0 md:bottom-0 pointer-events-none">
                    <div className="relative w-full h-full">
                        <Image
                            src="/hero-girl.png"
                            alt="Happy driver"
                            fill
                            priority
                            className="object-contain object-bottom drop-shadow-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </main>

            {/* SERVICES TICKER */}
            <div className="bg-black text-[#FFF500] py-6 overflow-hidden border-y-4 border-black">
                <div className="animate-marquee whitespace-nowrap flex gap-16 text-3xl font-black uppercase tracking-widest min-w-full">
                    <span>• Ремонт Ходовой</span>
                    <span>• 3D Развал-схождение</span>
                    <span>• Диагностика Подвески</span>
                    <span>• Замена Масла</span>
                    <span>• Автосервис Казань</span>
                    <span>• Ремонт Ходовой</span>
                    <span>• 3D Развал-схождение</span>
                </div>
            </div>

            {/* SERVICES GRID */}
            <section id="services" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
                {/* ... (Existing Services Grid Content - Minimal changes needed here, keeping it structured) ... */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                        Наши<br />Услуги
                    </h2>
                    <p className="max-w-md text-lg font-black opacity-60 text-right md:text-left">
                        Всё, что нужно вашему автомобилю. <br />Быстро, честно, качественно.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service 1: Alignment */}
                    <Link href="/razval-shozhdenie" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">3D Развал-схождение</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">Стенд Hoffman 3D. Высочайшая точность регулировки углов.</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl">Подробнее</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 2: Suspension */}
                    <Link href="/remont-podveski" className="bg-black text-[#FFF500] p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center border-2 border-white mb-6 group-hover:scale-110 transition-transform">
                            <Wrench className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Ремонт ходовой</h3>
                        <p className="text-sm font-black opacity-80 mb-6 flex-grow">Диагностика и устранение неисправностей подвески.</p>
                        <div className="flex justify-between items-center border-t-2 border-[#FFF500]/30 pt-4">
                            <span className="font-black text-xl">Подробнее</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 3: Tires */}
                    <Link href="/shinomontazh" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Шиномонтаж</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">Сезонная переобувка, балансировка, правка дисков.</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl">Подробнее</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 4: Oil Change */}
                    <Link href="/zamena-masla" className="bg-black text-[#FFF500] p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center border-2 border-white mb-6 group-hover:scale-110 transition-transform">
                            <PackageSearch className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Замена масла</h3>
                        <p className="text-sm font-black opacity-80 mb-6 flex-grow">Экспресс-замена масла и фильтров. Качественные расходные материалы.</p>
                        <div className="flex justify-between items-center border-t-2 border-[#FFF500]/30 pt-4">
                            <span className="font-black text-xl">Подробнее</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 5: Diagnostics */}
                    <Link href="/diagnostika" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <CarWheel className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">Диагностика</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">Диагностика подвески и ходовой части. Найдем причину стука.</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl">Подробнее</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>
                </div>
            </section>

            {/* WHY CHOOSE US / BENEFITS SECTION */}
            <section id="benefits" className="py-24 bg-ui-dark text-white border-y-4 border-black overflow-hidden relative">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="container mx-auto px-4 md:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-display leading-none">
                            Почему<br /><span className="text-brand-yellow">Авто14?</span>
                        </h2>
                        <div className="h-1 flex-grow bg-brand-yellow/20 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1: Hoffman */}
                        <div className="bg-white text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#FEE500] md:shadow-[8px_8px_0px_#FEE500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-black text-brand-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform border-2 border-black">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">3D Стенд<br />Hoffman</h3>
                            <p className="font-bold opacity-70 font-sans text-sm md:text-base">
                                Премиальное немецкое оборудование. Точность регулировки до 0.01°. Гарантируем идеальный результат.
                            </p>
                        </div>

                        {/* Benefit 2: Masters */}
                        <div className="bg-brand-yellow text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">Опытные<br />мастера</h3>
                            <p className="font-black opacity-80 font-sans text-sm md:text-base">
                                Специалисты с опытом 10+ лет. Знаем особенности подвески любой марки: от Lada до Porsche.
                            </p>
                        </div>

                        {/* Benefit 3: Fair Prices */}
                        <div className="bg-white text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#FF4500] md:shadow-[8px_8px_0px_#FF4500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-accent-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform border-2 border-black shadow-[4px_4px_0px_#000]">
                                <Banknote className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">Честные<br />цены</h3>
                            <p className="font-bold opacity-70 font-sans text-sm md:text-base">
                                Никаких скрытых платежей и «накруток». Согласовываем стоимость до начала работ. Честный подход к каждому клиенту.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <div id="reviews">
                <ReviewsSection />
            </div>

            {/* GALLERY SECTION (Expanded) */}
            <section id="gallery" className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-12 text-center md:text-left">
                    Галерея
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                    {/* Gallery Items */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/1.jpg" alt="Автосервис Avto14 — рабочий процесс" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                        <Image src="/gallery/2.jpg" alt="3D развал-схождение на стенде Hoffman" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                        <Image src="/gallery/4.jpg" alt="Ремонт ходовой части автомобиля" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/5.jpg" alt="Диагностика подвески на подъемнике" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/6.jpg" alt="Шиномонтаж и балансировка колес" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/7.jpg" alt="Замена масла и фильтров" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/8.jpg" alt="Профессиональное оборудование автосервиса" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/9.jpg" alt="Результат работы — довольный клиент" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                        <Image src="/gallery/10.jpg" alt="Автосервис Avto14 — вид изнутри" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/11.jpg" alt="Команда автосервиса Avto14" fill loading="lazy" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            </section>


            {/* SEO & FAQ BLOCK - Refreshed */}
            <section className="bg-white text-black py-24 border-t-4 border-black font-sans overflow-hidden">
                <div className="container mx-auto px-4 md:px-12 max-w-5xl">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display mb-4">
                            Вопросы<br /><span className="text-accent-orange">& ответы</span>
                        </h2>
                        <div className="h-2 w-32 bg-brand-yellow hidden md:block"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border-4 border-black rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'shadow-[4px_4px_0px_#FEE500] md:shadow-[8px_8px_0px_#FEE500]' : 'shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]'
                                    }`}
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-brand-yellow/5"
                                >
                                    <span className="text-base md:text-xl font-black uppercase tracking-tight font-display pr-4 md:pr-8 leading-tight">
                                        {faq.q}
                                    </span>
                                    {activeFaq === idx ? (
                                        <ChevronUp className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-accent-orange" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-black" />
                                    )}
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out border-t-4 border-black ${activeFaq === idx ? 'max-h-[800px] p-6 md:p-8 bg-black/5 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                                        }`}
                                >
                                    <p className="text-base md:text-lg font-bold opacity-80 font-sans leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SEO KEYWORDS CLOUD */}
                    <div className="mt-24 p-6 md:p-8 bg-black text-white rounded-3xl border-4 border-black shadow-[4px_4px_0px_#FEE500] md:shadow-[8px_8px_0px_#FEE500]">
                        <h3 className="text-xl font-black uppercase mb-6 text-brand-yellow font-display">Популярные услуги в Казани</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-xs md:text-sm opacity-60">
                            <span>Ремонт ходовой Казань</span> <span className="text-brand-yellow">•</span>
                            <span>3D Развал схождение</span> <span className="text-brand-yellow">•</span>
                            <span>Автосервис Константиновка</span> <span className="text-brand-yellow">•</span>
                            <span>Замена масла</span> <span className="text-brand-yellow">•</span>
                            <span>Диагностика подвески</span> <span className="text-brand-yellow">•</span>
                            <span>Шиномонтаж цены</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACTS / FOOTER */}
            <footer id="contacts" className="py-24 px-4 md:px-12 max-w-7xl mx-auto pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address & Map */}
                    <div className="bg-black text-[#FFF500] p-0 rounded-[2rem] border-4 border-black shadow-xl overflow-hidden flex flex-col h-[400px]">
                        <div className="p-8 pb-4 text-center">
                            <h3 className="font-black uppercase text-xl mb-2">На карте</h3>
                            <p className="font-black text-sm mb-4">г. Казань, Константиновка, ул. Заречная 5Б</p>
                        </div>
                        <div className="flex-grow w-full relative h-[300px]">
                            {/* Yandex Map Widget */}
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=49.264877%2C55.809049&z=16&pt=49.264877%2C55.809049&z=17&l=map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="grayscale hover:grayscale-0 transition-all duration-500 relative z-10"
                            ></iframe>
                        </div>
                    </div>

                    {/* Phones (3 Numbers with WA/TG) */}
                    <div className="bg-white p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col items-center text-center justify-center">
                        <h3 className="font-black uppercase text-xl mb-6">Контакты</h3>
                        <div className="flex flex-col gap-6 w-full">

                            {/* Number 1 */}
                            <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                                <a href="tel:+79992699359" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (999) 269-93-59</a>
                                <div className="flex gap-4">
                                    <a href="https://wa.me/79992699359" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                    <a href="https://t.me/+79992699359" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                                </div>
                            </div>

                            {/* Number 2 */}
                            <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                                <a href="tel:+79294945174" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (929) 494-51-74</a>
                                <div className="flex gap-4">
                                    <a href="https://wa.me/79294945174" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                    <a href="https://t.me/+79294945174" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                                </div>
                            </div>

                            {/* Number 3 */}
                            <div className="flex flex-col items-center border-b border-black/10 pb-4 last:border-0 last:pb-0">
                                <a href="tel:+79241619754" className="text-xl font-black hover:text-[#dba800] transition-colors mb-2">+7 (924) 161-97-54</a>
                                <div className="flex gap-4">
                                    <a href="https://wa.me/79241619754" className="text-[#25D366] hover:scale-110 transition-transform"><WhatsAppIcon className="w-6 h-6" /></a>
                                    <a href="https://t.me/+79241619754" className="text-[#0088cc] hover:scale-110 transition-transform"><TelegramIcon className="w-6 h-6" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branding/Hours */}
                    <div className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-xl flex flex-col items-center text-center justify-center">
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-black">
                            Авто14
                        </h2>
                        <div className="mt-4 font-black text-xl">
                            Пн – Сб<br />09:00 – 19:00
                        </div>
                        <p className="font-bold opacity-60 mt-8 text-sm">
                            © 2024–{new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
