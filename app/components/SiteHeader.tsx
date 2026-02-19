"use client";

import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import { useState } from 'react';

interface SiteHeaderProps {
    onOpenBooking: () => void;
}

import { handleContactClick } from '@/lib/analytics';

export default function SiteHeader({ onOpenBooking }: SiteHeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 px-4 bg-transparent backdrop-blur-sm md:backdrop-blur-none">
            <div className="container mx-auto flex justify-between items-start bg-white/10 md:bg-transparent rounded-2xl p-2 md:p-0 backdrop-blur-md md:backdrop-blur-none border border-white/20 md:border-none shadow-lg md:shadow-none">
                {/* Left: Nav Links */}
                <nav className="flex gap-6 font-black uppercase text-xs md:text-sm tracking-widest mt-2 items-center text-black">
                    <Link href="/" className="hover:text-accent-orange transition-colors flex items-center gap-2">
                        <span className="md:hidden text-accent-orange text-xl">●</span>
                        <span className="hidden md:inline">Главная</span>
                    </Link>
                    <Link href="/#services" className="hover:text-accent-orange transition-colors">Услуги</Link>
                    <Link href="/#reviews" className="hover:text-accent-orange transition-colors">Отзывы</Link>
                    <Link href="/#contacts" className="hover:text-accent-orange transition-colors">Контакты</Link>
                </nav>

                {/* Right: CTA & Phone */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+79992699359"
                        className="hidden md:flex items-center gap-2 font-black text-3xl uppercase tracking-wider text-black hover:text-accent-orange transition-colors"
                        onClick={() => handleContactClick('phone', 'phone_header', '+79992699359')}
                    >
                        <Phone className="w-8 h-8 text-accent-orange fill-current" />
                        <span>+7 (999) 269-93-59</span>
                    </a>
                    <button onClick={onOpenBooking} className="bg-[#FF4500] text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-wider hover:bg-black hover:text-[#FFF500] hover:scale-105 transition-all shadow-lg animate-pulse hover:animate-none border-2 border-transparent hover:border-[#FFF500]">
                        Записаться
                    </button>
                </div>
            </div>
        </header>
    );
}
