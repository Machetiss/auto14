"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Settings, MoveRight, CornerRightDown, Phone, Wrench, ChevronRight, PackageSearch, MapPin, Target, UserCheck, Banknote, ChevronDown, ChevronUp } from 'lucide-react';
import BookingModal from './components/BookingModal';
import NavigatorModal from './components/NavigatorModal';
import SpinWheelPopup from './components/SpinWheelPopup';
import ReviewsSection from './components/ReviewsSection';
import CarWheel from './components/CarWheel';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { TelegramIcon } from './components/icons/TelegramIcon';
import { handleContactClick } from '@/lib/analytics';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
    const { t, language, toggleLanguage } = useLanguage();
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [showAllGallery, setShowAllGallery] = useState(false);
    const [showAllFaq, setShowAllFaq] = useState(false);
    const [showHowWeWork, setShowHowWeWork] = useState(false);
    const [showServices, setShowServices] = useState(false);

    const faqs = t('faq.items') as Array<{ q: string, a: string }>;

    return (
        <div className={`min-h-screen bg-brand-yellow text-black font-sans selection:bg-black selection:text-brand-yellow relative`} style={{ overflowX: 'clip' }}>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            <NavigatorModal isOpen={isNavigatorOpen} onClose={() => setIsNavigatorOpen(false)} />
            <SpinWheelPopup />

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-4 px-4 bg-brand-yellow shadow-md border-b-2 border-black">
                <div className="w-full max-w-[1920px] mx-auto xl:px-8 flex justify-between items-center">
                    {/* Left: Nav Links */}
                    <nav className="flex gap-2 sm:gap-4 md:gap-6 font-black uppercase text-[10px] sm:text-xs md:text-sm tracking-widest text-black font-sans">
                        <Link href="#services" className="hover:text-accent-orange transition-colors">{t('nav.services')}</Link>
                        <Link href="#reviews" className="hidden sm:block hover:text-accent-orange transition-colors">{t('nav.reviews')}</Link>
                        <Link href="#gallery" className="hidden md:block hover:text-accent-orange transition-colors">{t('nav.gallery')}</Link>
                    </nav>

                    {/* Right: CTA & Phone & Address */}
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
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
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1 md:px-3 border-2 border-black rounded-lg font-black text-xs uppercase tracking-wider hover:bg-black hover:text-brand-yellow transition-colors"
                        >
                            {language === 'ru' ? 'EN' : 'RU'}
                        </button>
                        <button onClick={() => setIsBookingOpen(true)} className="btn-primary !px-4 !py-2 !text-[10px] md:!text-xs md:!px-8 md:!py-3 shadow-none hover:shadow-none whitespace-nowrap">
                            {t('hero.cta_book')}
                        </button>
                    </div>
                </div>
            </header>

            {/* HERO SECTION - "GIRL DESIGN" */}
            <main className="w-full max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 pt-24 pb-12 md:pt-32 min-h-screen flex flex-col md:flex-row items-center relative gap-12 md:gap-0 font-display">

                {/* Background Grid Pattern (Subtle) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Floating "Pain Points" Texts (Absolute Positioning) */}




                <div className="z-20 relative md:w-[70%] flex flex-col items-start text-left mb-12 md:mb-0 pl-0 md:pl-4">

                    {/* Top Logo/Brand Block */}
                    <div className="relative flex items-center mb-1 mt-8 md:mt-0">
                        <span className="text-black text-[8vw] md:text-[4vw] leading-[0.8] font-black uppercase tracking-tighter font-display">
                            АВТ
                        </span>
                        <div className="relative w-[6vw] h-[6vw] md:w-[3.5vw] md:h-[3.5vw] animate-spin-slow-custom mx-[-0.2vw]">
                            <Image
                                src="/logo-wheel.png"
                                alt="О"
                                fill
                                className="object-contain scale-110"
                                sizes="(max-width: 768px) 6vw, 3.5vw"
                            />
                        </div>
                        <span className="text-black text-[8vw] md:text-[4vw] leading-[0.8] font-black uppercase tracking-tighter font-display">
                            14
                        </span>
                    </div>

                    {/* Symptoms / Pain Points as structured tags */}
                    <div className="flex flex-wrap gap-2 mb-6 max-w-2xl">
                        {[
                            t('hero.pain_points.pulls_aside'),
                            t('hero.pain_points.wheel_crooked'),
                            t('hero.pain_points.throws_bumps'),
                            t('hero.pain_points.bad_handling'),
                            t('hero.pain_points.something_knocks'),
                            t('hero.pain_points.alignment_check')
                        ].map((tag, idx) => (
                            <span key={idx} className="bg-black/5 border border-black/10 px-3 py-1 text-[10px] md:text-sm font-medium uppercase tracking-wider text-black/60 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* MAIN TAGLINE - H1 and Subtitle */}
                    <h1 className="w-full text-[5.8vw] md:text-[3.9vw] leading-tight font-black tracking-tight uppercase mb-6 text-black drop-shadow-sm max-w-4xl" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {t('hero.title_pt1')}{" "}
                        <span className="bg-black text-white px-2 md:px-4 py-1 mx-0 md:mx-1 rounded-xl inline-block -rotate-[2deg] shadow-[3px_3px_0px_0px_#FF4500] leading-none transform -translate-y-1">
                            {t('hero.title_highlight')}
                        </span>{" "}
                        {t('hero.title_pt2')}
                    </h1>
                    <div className="bg-white/90 backdrop-blur-sm border-4 border-black rounded-2xl px-5 py-4 mb-6 max-w-2xl shadow-[4px_4px_0px_#FF4500] relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-orange"></div>
                        <p className="text-[3.5vw] md:text-[1.2vw] font-black leading-snug text-black pl-3 font-sans">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    {/* NEW: Free Consultation Message */}
                    <p className="flex items-center gap-2 text-xs md:text-sm font-black uppercase text-accent-orange mb-8 animate-pulse italic">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        {t('hero.consultation_free')}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 w-full sm:w-auto z-30 relative">
                        <div className="w-full sm:w-80 flex flex-col gap-2">
                            <button onClick={() => setIsBookingOpen(true)} className="btn-primary group w-full">
                                {t('hero.cta_book')}
                                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-[10px] sm:text-xs text-center font-bold opacity-70 uppercase tracking-widest leading-tight text-black">{t('hero.guarantee')}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 items-center">
                            <div className="flex flex-col gap-2 items-center w-full sm:w-auto flex-1">
                                <a
                                    href={`tel:${t('common.phone').replace(/[^\d+]/g, '')}`}
                                    className="btn-secondary w-full"
                                    onClick={() => handleContactClick('phone', 'hero_call', t('common.phone'))}
                                >
                                    {t('common.call_us')}
                                    <Phone className="w-5 h-5" />
                                </a>
                                <a
                                    href={`tel:${t('common.phone').replace(/[^\d+]/g, '')}`}
                                    className="text-[10px] font-black uppercase tracking-widest sm:hidden opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    {t('common.phone')}
                                </a>
                            </div>

                            <button
                                onClick={() => setIsNavigatorOpen(true)}
                                className="btn-secondary w-full sm:w-auto flex-1 bg-black text-[#FFF500] hover:bg-black/80"
                            >
                                {t('hero.cta_route')}
                                <MapPin className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* SOCIAL PROOF BADGES */}
                    <div className="flex flex-wrap gap-3 mt-6">
                        <a href="https://yandex.com/maps/org/avto14/108623850068/reviews/" target="_blank" rel="noopener noreferrer" className="bg-black text-[#FFF500] px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-black/80 transition-colors flex items-center gap-2">
                            ★ 5.0 {language === 'ru' ? 'Яндекс Карты' : 'Yandex Maps'}
                        </a>
                        <span className="bg-black/10 text-black px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider border-2 border-black/20">
                            13 000+ {language === 'ru' ? 'авто обслужено' : 'cars serviced'}
                        </span>
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
                            style={{
                                maskImage: 'radial-gradient(circle at bottom center, black 40%, transparent 80%)',
                                WebkitMaskImage: 'radial-gradient(circle at bottom center, black 40%, transparent 80%)'
                            }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </main>

            {/* SERVICES GRID — COLLAPSIBLE */}
            <section id="services" className="py-16 px-4 md:px-12 xl:px-24 w-full max-w-[1920px] mx-auto">
                <button
                    onClick={() => setShowServices(!showServices)}
                    className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 text-left cursor-pointer group"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                            {t('services_section.title')}<br />{t('services_section.title2')}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-base font-black opacity-60 text-right">
                            {t('services_section.subtitle')} <br />{t('services_section.subtitle2')}
                        </p>
                        <ChevronDown className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
                    </div>
                </button>

                {/* Expand button when collapsed */}
                {!showServices && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowServices(true)}
                            className="bg-black text-brand-yellow px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-base border-4 border-black shadow-[6px_6px_0_#FF4500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 animate-pulse hover:animate-none"
                        >
                            {language === 'ru' ? 'Развернуть все услуги' : 'Show all services'}
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out origin-top ${showServices ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {/* Service 1: Alignment */}
                    <Link href="/razval-shozhdenie" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">{t('services_section.alignment.name')}</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">{t('services_section.alignment.desc')}</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl">{language === 'ru' ? 'от 1400 ₽' : 'from 1400 ₽'}</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 2: Suspension */}
                    <Link href="/remont-podveski" className="bg-black text-[#FFF500] p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center border-2 border-white mb-6 group-hover:scale-110 transition-transform">
                            <Wrench className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">{t('services_section.suspension.name')}</h3>
                        <p className="text-sm font-black opacity-80 mb-6 flex-grow">{t('services_section.suspension.desc')}</p>
                        <div className="flex justify-between items-center border-t-2 border-[#FFF500]/30 pt-4">
                            <span className="font-black text-xl">{language === 'ru' ? 'от 600 ₽' : 'from 600 ₽'}</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 3: Tires */}
                    <Link href="/shinomontazh" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <Settings className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">{t('services_section.tires.name')}</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">{t('services_section.tires.desc')}</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl">{language === 'ru' ? 'от 2200 ₽' : 'from 2200 ₽'}</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 4: Oil Change */}
                    <Link href="/zamena-masla" className="bg-black text-[#FFF500] p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center border-2 border-white mb-6 group-hover:scale-110 transition-transform">
                            <PackageSearch className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">{t('services_section.oil.name')}</h3>
                        <p className="text-sm font-black opacity-80 mb-6 flex-grow">{t('services_section.oil.desc')}</p>
                        <div className="flex justify-between items-center border-t-2 border-[#FFF500]/30 pt-4">
                            <span className="font-black text-xl">{language === 'ru' ? 'от 1000 ₽' : 'from 1000 ₽'}</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    {/* Service 5: Diagnostics */}
                    <Link href="/diagnostika" className="bg-[#FFF500] text-black p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group flex flex-col h-[400px]">
                        <div className="bg-black text-[#FFF500] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-6 group-hover:scale-110 transition-transform">
                            <CarWheel className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4">{t('services_section.diagnostics.name')}</h3>
                        <p className="text-sm font-black opacity-60 mb-6 flex-grow">{t('services_section.diagnostics.desc')}</p>
                        <div className="flex justify-between items-center border-t-2 border-black pt-4">
                            <span className="font-black text-xl text-accent-orange">{language === 'ru' ? '0 ₽' : 'Free'}</span>
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>
                </div>
            </section>

            {/* WHY CHOOSE US / BENEFITS SECTION */}
            <section id="benefits" className="py-24 bg-ui-dark text-white border-y-4 border-black overflow-hidden relative">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 xl:px-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-display leading-none">
                            {t('benefits.title')}<br /><span className="text-brand-yellow">{t('benefits.title2')}</span>
                        </h2>
                        <div className="h-1 flex-grow bg-brand-yellow/20 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1: Hoffman */}
                        <div className="bg-white text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#FEE500] md:shadow-[8px_8px_0px_#FEE500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-black text-brand-yellow w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform border-2 border-black">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">{t('benefits.hoffman.title')}<br />{t('benefits.hoffman.title2')}</h3>
                            <p className="font-bold opacity-70 font-sans text-sm md:text-base">
                                {t('benefits.hoffman.desc')}
                            </p>
                        </div>

                        {/* Benefit 2: Masters */}
                        <div className="bg-brand-yellow text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">{t('benefits.masters.title')}<br />{t('benefits.masters.title2')}</h3>
                            <p className="font-black opacity-80 font-sans text-sm md:text-base">
                                {t('benefits.masters.desc')}
                            </p>
                        </div>

                        {/* Benefit 3: Fair Prices */}
                        <div className="bg-white text-black p-8 rounded-[2rem] border-4 border-black shadow-[4px_4px_0px_#FF4500] md:shadow-[8px_8px_0px_#FF4500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
                            <div className="bg-accent-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform border-2 border-black shadow-[4px_4px_0px_#000]">
                                <Banknote className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 font-display leading-tight">{t('benefits.prices.title')}<br />{t('benefits.prices.title2')}</h3>
                            <p className="font-bold opacity-70 font-sans text-sm md:text-base">
                                {t('benefits.prices.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* КАК МЫ РАБОТАЕМ / HOW WE WORK — COLLAPSIBLE */}
            <section className="py-16 px-4 md:px-12 xl:px-24 w-full max-w-[1920px] mx-auto">
                <button
                    onClick={() => setShowHowWeWork(!showHowWeWork)}
                    className="w-full flex items-center justify-between mb-8 group"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.8] text-left font-display">
                        {language === 'ru' ? 'Как мы' : 'How we'} <span className="text-accent-orange">{language === 'ru' ? 'работаем' : 'work'}</span>
                    </h2>
                    <ChevronDown className={`w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${showHowWeWork ? 'rotate-180' : ''}`} />
                </button>

                {/* Expand button when collapsed */}
                {!showHowWeWork && (
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowHowWeWork(true)}
                            className="bg-black text-brand-yellow px-10 py-5 rounded-2xl font-black uppercase tracking-wider text-base border-4 border-black shadow-[6px_6px_0_#FF4500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 animate-pulse hover:animate-none"
                        >
                            {language === 'ru' ? 'Развернуть' : 'Expand'}
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out origin-top ${showHowWeWork ? 'max-h-[1200px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {/* Step 1 */}
                    <div className="relative bg-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#FEE500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <div className="bg-black text-brand-yellow w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl mb-6 border-4 border-brand-yellow">1</div>
                        <h3 className="text-xl font-black uppercase mb-3 font-display">{language === 'ru' ? 'Запись' : 'Book'}</h3>
                        <p className="font-bold opacity-70 font-sans">{language === 'ru' ? 'Оставьте заявку — перезвоним за 5–10 минут' : "Leave a request — we'll call back in 5–10 minutes"}</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative bg-brand-yellow p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <div className="bg-black text-brand-yellow w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl mb-6 border-4 border-brand-yellow">2</div>
                        <h3 className="text-xl font-black uppercase mb-3 font-display">{language === 'ru' ? 'Диагностика' : 'Diagnostics'}</h3>
                        <p className="font-black opacity-80 font-sans">{language === 'ru' ? 'Приезжаете на диагностику. Находим причину, называем цену' : 'You come in for diagnostics. We find the cause and name the price'}</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative bg-white p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#FF4500] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        <div className="bg-accent-orange text-white w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl mb-6 border-4 border-black">3</div>
                        <h3 className="text-xl font-black uppercase mb-3 font-display">{language === 'ru' ? 'Результат' : 'Result'}</h3>
                        <p className="font-bold opacity-70 font-sans">{language === 'ru' ? 'Заберите исправный автомобиль с гарантией' : 'Pick up your fixed car with a warranty'}</p>
                    </div>
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <div id="reviews">
                <ReviewsSection />
            </div>

            {/* GALLERY SECTION (with spoiler) */}
            <section id="gallery" className="py-12 px-4 md:px-12 xl:px-24 w-full max-w-[1920px] mx-auto">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-12 text-center md:text-left">
                    {t('gallery_section.title')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                    {/* Always visible: first 3 images */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                        <Image src="/gallery/1.webp" alt="Автосервис Avto14 — рабочий процесс" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                        <Image src="/gallery/2.webp" alt="3D развал-схождение на стенде Hoffman" fill sizes="(max-width: 768px) 50vw, 66vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                        <Image src="/gallery/4.webp" alt="Ремонт ходовой части автомобиля" fill sizes="(max-width: 768px) 50vw, 66vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Hidden images under spoiler */}
                    {showAllGallery && (
                        <>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/5.webp" alt="Диагностика подвески на подъемнике" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/6.webp" alt="Шиномонтаж и балансировка колес" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/7.webp" alt="Замена масла и фильтров" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/8.webp" alt="Профессиональное оборудование автосервиса" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/9.webp" alt="Результат работы — довольный клиент" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group md:col-span-2">
                                <Image src="/gallery/10.webp" alt="Автосервис Avto14 — вид изнутри" fill sizes="(max-width: 768px) 50vw, 66vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden border-2 border-black group">
                                <Image src="/gallery/11.webp" alt="Команда автосервиса Avto14" fill sizes="(max-width: 768px) 50vw, 33vw" loading="lazy" unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </>
                    )}
                </div>
                {!showAllGallery && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => setShowAllGallery(true)}
                            className="bg-black text-brand-yellow px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-sm border-4 border-black shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
                        >
                            {language === 'ru' ? 'Показать ещё фото' : 'Show more photos'}
                            <ChevronDown className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </section>

            {/* SEO & FAQ BLOCK - Refreshed */}
            <section className="bg-white text-black py-24 border-t-4 border-black font-sans overflow-hidden">
                <div className="container mx-auto px-4 md:px-12 max-w-5xl">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display mb-4">
                            {t('faq.title')}<br /><span className="text-accent-orange">{t('faq.title2')}</span>
                        </h2>
                        <div className="h-2 w-32 bg-brand-yellow hidden md:block"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.slice(0, showAllFaq ? faqs.length : 4).map((faq, idx) => (
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
                        {!showAllFaq && faqs.length > 4 && (
                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={() => setShowAllFaq(true)}
                                    className="bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-wider text-sm border-4 border-black shadow-[4px_4px_0_#FEE500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
                                >
                                    {language === 'ru' ? `Ещё ${faqs.length - 4} вопросов` : `${faqs.length - 4} more questions`}
                                    <ChevronDown className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* SEO KEYWORDS CLOUD */}
                    <div className="mt-24 p-6 md:p-8 bg-black text-white rounded-3xl border-4 border-black shadow-[4px_4px_0px_#FEE500] md:shadow-[8px_8px_0px_#FEE500]">
                        <h3 className="text-xl font-black uppercase mb-6 text-brand-yellow font-display">
                            {t('seo.title')}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 font-bold text-xs md:text-sm opacity-60">
                            {(t('seo.keywords') as string[]).map((kw: string, idx: number) => (
                                <span key={idx}>
                                    {kw}{idx < (t('seo.keywords') as string[]).length - 1 && <span className="text-brand-yellow ml-4">•</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* CONTACTS / FOOTER */}
            < footer id="contacts" className="py-24 px-4 md:px-12 xl:px-24 w-full max-w-[1920px] mx-auto pb-32" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address & Map */}
                    <div className="bg-black text-[#FFF500] p-0 rounded-[2rem] border-4 border-black shadow-xl overflow-hidden flex flex-col h-[400px]">
                        <div className="p-8 pb-4 text-center">
                            <h3 className="font-black uppercase text-xl mb-2">{t('footer.map_title')}</h3>
                            <p className="font-black text-sm mb-4">{t('common.address')}</p>
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
                        <h3 className="font-black uppercase text-xl mb-6">{t('nav.contacts')}</h3>
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
                            {t('footer.brand')}
                        </h2>
                        <div className="mt-4 font-black text-xl">
                            {t('common.working_hours')}
                        </div>
                        <p className="font-bold opacity-60 mt-8 text-sm">
                            © 2022–{new Date().getFullYear()}
                        </p>
                    </div>
                </div>

                {/* SEO internal links for generated Brand pages */}
                <div className="mt-16 pt-8 border-t-2 border-black/10">
                    <h3 className="font-black uppercase text-center mb-6 opacity-50">Ремонт по маркам авто</h3>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {[
                            { slug: "kia", name: "KIA" },
                            { slug: "hyundai", name: "Hyundai" },
                            { slug: "lada", name: "LADA" },
                            { slug: "toyota", name: "Toyota" },
                            { slug: "volkswagen", name: "Volkswagen" },
                            { slug: "skoda", name: "Skoda" },
                            { slug: "renault", name: "Renault" },
                            { slug: "nissan", name: "Nissan" },
                            { slug: "chevrolet", name: "Chevrolet" },
                            { slug: "ford", name: "Ford" },
                            { slug: "mazda", name: "Mazda" },
                            { slug: "mitsubishi", name: "Mitsubishi" },
                            { slug: "bmw", name: "BMW" },
                            { slug: "mercedes", name: "Mercedes-Benz" },
                            { slug: "audi", name: "Audi" },
                            { slug: "honda", name: "Honda" },
                            { slug: "lexus", name: "Lexus" },
                            { slug: "chery", name: "Chery" },
                            { slug: "haval", name: "Haval" },
                            { slug: "geely", name: "Geely" }
                        ].map((brand, idx) => (
                            <Link 
                                key={idx} 
                                href={`/brands/${brand.slug}`} 
                                className="text-xs md:text-sm font-bold opacity-50 hover:opacity-100 hover:text-brand-yellow hover:bg-black px-2 py-1 rounded transition-all"
                            >
                                Ремонт {brand.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer >

        </div >
    );
}
