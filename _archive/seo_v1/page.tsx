import Link from 'next/link';
import Image from 'next/image';
import { Settings, MoveRight, CornerRightDown, Globe, MapPin, Phone, Clock, MessageCircle, Send, PackageSearch, Wrench, ChevronRight } from 'lucide-react';
import ReviewsSection from './components/ReviewsSection';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { TelegramIcon } from './components/icons/TelegramIcon';
import BookingModalTrigger from './components/BookingModalTrigger';
import CarWheel from './components/CarWheel';

export default function Home() {
    return (
        <div className={`min-h-screen bg-[#FFF500] text-black font-sans selection:bg-black selection:text-[#FFF500] relative overflow-x-hidden font-sans`}>

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF500]/90 backdrop-blur-md border-b-4 border-black transition-all duration-300">
                <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-180">
                            <CarWheel className="w-full h-full text-black animate-spin-slow" />
                        </div>
                        <span className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase relative">
                            Avto14
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex gap-8 font-black uppercase text-sm tracking-widest">
                        <Link href="#services" className="hover:underline decoration-2 underline-offset-4">Услуги</Link>
                        <Link href="#reviews" className="hover:underline decoration-2 underline-offset-4">Отзывы</Link>
                        <Link href="#contacts" className="hover:underline decoration-2 underline-offset-4">Контакты</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="tel:+79992699359" className="hidden md:flex items-center gap-2 font-bold hover:opacity-70 transition-opacity">
                            <Phone className="w-5 h-5" />
                            <span>+7 (999) 269-93-59</span>
                        </Link>
                        <BookingModalTrigger className="bg-black text-[#FFF500] hover:bg-black/80" text="Записаться" />
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white min-h-[85vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/hero-final.jpg" // Using the latest confirmed hero image
                        alt="Автосервис Казань"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-2/3 mb-10 md:mb-0">
                            <div className="inline-block bg-[#FFF500] text-black font-black px-3 py-1 mb-6 rotate-[-2deg] uppercase tracking-wider text-sm md:text-base">
                                Казань • Константиновка
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8 drop-shadow-xl">
                                Нам в радость <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF500] to-white">
                                    сделать машину
                                </span> <br />
                                идеальной
                            </h1>

                            <p className="text-xl font-bold mb-10 max-w-xl leading-relaxed opacity-90">
                                Профессиональный автосервис. 3D развал-схождение Hoffman, диагностика и ремонт подвески, запчасти.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <BookingModalTrigger className="bg-[#FFF500] text-black hover:bg-white text-lg px-10 py-5" text="Записаться на сервис" />
                                <Link href="#services" className="px-10 py-5 border-2 border-white text-white font-black uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 group">
                                    <span>Услуги</span>
                                    <CornerRightDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES TICKER */}
            <section className="bg-[#FFF500] border-y-4 border-black py-4 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8 mx-4">
                            <span className="text-4xl font-black uppercase italic tracking-tighter">Ремонт Ходовой</span>
                            <CarWheel className="w-8 h-8 animate-spin-slow-custom" />
                            <span className="text-4xl font-black uppercase italic tracking-tighter text-transparent text-stroke-black">3D Развал</span>
                            <CarWheel className="w-8 h-8 animate-spin-slow-custom" />
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES GRID (UPDATED LINKS) */}
            <section id="services" className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
                            Наши <br />Услуги
                        </h2>
                        <p className="text-xl font-bold max-w-md text-right md:text-left">
                            Комплексный подход к вашему автомобилю. От диагностики до сложного ремонта.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1: Alignment */}
                        <Link href="/services/3d-alignment" className="group relative block h-[400px] border-4 border-black bg-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-[#dba800] transition-colors">3D Сход-развал</h3>
                                    <p className="font-bold text-gray-600">На стенде Hoffman</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-xl font-black">от 1 500 ₽</span>
                                    <div className="bg-black text-white p-3 rounded-full group-hover:rotate-45 transition-transform">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            {/* Image placeholder - update with real images if available */}
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Settings className="w-full h-full p-20" />
                            </div>
                        </Link>

                        {/* Service 2: Suspension */}
                        <Link href="/services/suspension-repair" className="group relative block h-[400px] border-4 border-black bg-[#1a1a1a] text-white hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-[#FFF500] transition-colors">Ремонт ходовой</h3>
                                    <p className="font-bold text-gray-400">Диагностика и устранение стуков</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-xl font-black">Диагностика — 0 ₽*</span>
                                    <div className="bg-white text-black p-3 rounded-full group-hover:rotate-45 transition-transform">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Wrench className="w-full h-full p-20" />
                            </div>
                        </Link>

                        {/* Service 3: Tires */}
                        <Link href="/services/tire-fitting" className="group relative block h-[400px] border-4 border-black bg-gray-100 hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-black uppercase mb-2 group-hover:text-[#dba800] transition-colors">Шиномонтаж</h3>
                                    <p className="font-bold text-gray-600">Сезонная переобувка</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-xl font-black">от 1 600 ₽</span>
                                    <div className="bg-black text-white p-3 rounded-full group-hover:rotate-45 transition-transform">
                                        <ChevronRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Globe className="w-full h-full p-20" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACTS SECTION (Simplified for Server Component) */}
            <section id="contacts" className="py-20 bg-black text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Контакты</h2>
                            <div className="space-y-6 text-lg md:text-xl font-bold">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-8 h-8 text-[#FFF500] flex-shrink-0" />
                                    <div>
                                        <p className="text-[#FFF500] text-sm uppercase tracking-wider mb-1">Адрес</p>
                                        <p>г. Казань, жилой массив Константиновка, <br />ул. Заречная 5Б</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-8 h-8 text-[#FFF500] flex-shrink-0" />
                                    <div>
                                        <p className="text-[#FFF500] text-sm uppercase tracking-wider mb-1">Телефон</p>
                                        <p>+7 (999) 269-93-59</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-8 h-8 text-[#FFF500] flex-shrink-0" />
                                    <div>
                                        <p className="text-[#FFF500] text-sm uppercase tracking-wider mb-1">Режим работы</p>
                                        <p>Пн-Сб: 09:00 - 19:00 <br /> Вс: Выходной</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex gap-4">
                                <a href="https://wa.me/79992699359" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full hover:scale-110 transition-transform">
                                    <WhatsAppIcon className="w-8 h-8" />
                                </a>
                                <a href="https://t.me/avto14_bot" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white p-4 rounded-full hover:scale-110 transition-transform">
                                    <TelegramIcon className="w-8 h-8" />
                                </a>
                            </div>
                        </div>

                        {/* Map or Image Placeholder */}
                        <div className="h-[400px] bg-gray-800 rounded-3xl border-4 border-white overflow-hidden relative group">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=49.227284%2C55.827663&z=16&pt=49.227284%2C55.827663&z=17&l=map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <div id="reviews">
                <ReviewsSection />
            </div>

            {/* SEO & FAQ BLOCK (Preserving SEO content) */}
            <section className="bg-white text-black py-20 border-t-4 border-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">Вопросы и ответы</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">Где сделать 3D развал-схождение?</h3>
                            <p className="font-bold opacity-80 mb-8">
                                Автосервис Avto14 в Константиновке (Казань) оборудован современным 3D стендом Hoffman.
                                Гарантируем точность регулировки.
                            </p>
                            <h3 className="text-2xl font-black uppercase mb-4">Какие машины обслуживаете?</h3>
                            <p className="font-bold opacity-80 mb-8">
                                Мы работаем с любыми марками: от отечественных авто (Lada/VAZ) до иномарок (Kia, Hyundai, Toyota, VAG и др.).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">Нужно ли записываться заранее?</h3>
                            <p className="font-bold opacity-80 mb-8">
                                Да, мы работаем по записи, чтобы вы не ждали в очереди. Запишитесь через сайт или по телефону.
                            </p>
                            <h3 className="text-2xl font-black uppercase mb-4">Даете гарантию?</h3>
                            <p className="font-bold opacity-80 mb-8">
                                Конечно. На все работы и установленные нами запчасти действует гарантия.
                            </p>
                        </div>
                    </div>

                    {/* SEO Keywords Block */}
                    <div className="bg-black text-white p-8 rounded-3xl">
                        <h3 className="text-xl font-black uppercase mb-4 text-[#FFF500]">Популярные услуги в Казани</h3>
                        <div className="flex flex-wrap gap-3 font-bold text-sm opacity-80">
                            <span>Ремонт ходовой Казань</span>
                            <span className="text-[#FFF500]">•</span>
                            <span>3D Развал схождение</span>
                            <span className="text-[#FFF500]">•</span>
                            <span>Автосервис Константиновка</span>
                            <span className="text-[#FFF500]">•</span>
                            <span>Замена масла</span>
                            <span className="text-[#FFF500]">•</span>
                            <span>Диагностика подвески</span>
                            <span className="text-[#FFF500]">•</span>
                            <span>Шиномонтаж цены</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#FFF500] text-black py-12 border-t-4 border-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-black">
                        Авто14
                    </h2>
                    <p className="font-bold opacity-80">
                        Работаем для вас
                    </p>
                    <div className="mt-4 font-black text-xl">
                        Пн – Сб<br />09:00 – 19:00
                    </div>
                    <div className="text-center mt-12 opacity-40 font-bold text-sm">
                        © {new Date().getFullYear()} Avto14. Все права защищены.
                    </div>
                </div>
            </footer>
        </div>
    );
}
