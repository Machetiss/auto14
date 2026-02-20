"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Settings, MoveRight, CornerRightDown, Phone, Wrench, ChevronRight, PackageSearch, MapPin } from 'lucide-react';
import BookingModal from './components/BookingModal';
import ReviewsSection from './components/ReviewsSection';
import CarWheel from './components/CarWheel';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { TelegramIcon } from './components/icons/TelegramIcon';

export default function Home() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className={`min-h-screen bg-[#FFF500] text-black font-sans selection:bg-black selection:text-[#FFF500] relative overflow-x-hidden font-sans`}>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-4 px-4 bg-brand-yellow shadow-md border-b-2 border-black">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left: Nav Links */}
                    <nav className="flex gap-6 font-black uppercase text-xs md:text-sm tracking-widest text-black font-sans">
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
                    <h1 className="text-[14vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-4 text-black flex flex-col font-display">
                        <span>НАМ В</span>
                        <span>РАДОСТЬ</span>
                    </h1>
                    <p className="text-[5vw] md:text-[2.2vw] font-black uppercase leading-[1.1] text-black opacity-90 mb-10 max-w-xl font-sans">
                        СДЕЛАТЬ ВАШУ МАШИНУ <br />ИДЕАЛЬНОЙ
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20 relative">
                        <button onClick={() => setIsBookingOpen(true)} className="btn-primary group">
                            Записаться на диагностику
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="tel:+79992699359" className="btn-secondary">
                            Позвонить
                            <Phone className="w-5 h-5" />
                        </a>
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

            {/* REVIEWS SECTION */}
            <ReviewsSection />

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


            {/* SEO & FAQ BLOCK */}
            <section className="bg-white text-black py-20 border-t-4 border-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">Вопросы и ответы</h2>
                    {/* ... (Existing FAQ Content) ... */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">Где сделать 3D развал-схождение?</h3>
                            <p className="font-black opacity-80 mb-8">
                                Автосервис Авто14 в Константиновке (Казань) оборудован современным 3D стендом Hoffman.
                                Гарантируем точность регулировки.
                            </p>
                            <h3 className="text-2xl font-black uppercase mb-4">Какие машины обслуживаете?</h3>
                            <p className="font-black opacity-80 mb-8">
                                Мы работаем с любыми марками: от отечественных авто (Lada/VAZ) до иномарок (Kia, Hyundai, Toyota, VAG и др.).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">Нужно ли записываться заранее?</h3>
                            <p className="font-black opacity-80 mb-8">
                                Да, мы работаем по записи, чтобы вы не ждали в очереди. Запишитесь через сайт или по телефону.
                            </p>
                            <h3 className="text-2xl font-black uppercase mb-4">Даете гарантию?</h3>
                            <p className="font-black opacity-80 mb-8">
                                Конечно. На все работы и установленные нами запчасти действует гарантия.
                            </p>
                        </div>
                    </div >

                    <div className="bg-black text-white p-8 rounded-3xl">
                        <h3 className="text-xl font-black uppercase mb-4 text-[#FFF500]">Популярные услуги в Казани</h3>
                        <div className="flex flex-wrap gap-3 font-bold text-sm opacity-80">
                            <span>Ремонт ходовой Казань</span> <span className="text-[#FFF500]">•</span>
                            <span>3D Развал схождение</span> <span className="text-[#FFF500]">•</span>
                            <span>Автосервис Константиновка</span> <span className="text-[#FFF500]">•</span>
                            <span>Замена масла</span> <span className="text-[#FFF500]">•</span>
                            <span>Диагностика подвески</span> <span className="text-[#FFF500]">•</span>
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
