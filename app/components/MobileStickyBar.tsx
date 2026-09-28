"use client";

import { Phone, CalendarCheck } from 'lucide-react';
import { useBooking } from '@/app/context/BookingContext';
import { handleContactClick } from '@/lib/analytics';

export default function MobileStickyBar() {
    const { openBooking } = useBooking();
    const phoneNumber = '+79992699359';

    return (
        <aside
            aria-label="Быстрая связь с автосервисом"
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t-4 border-black px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_16px_rgba(0,0,0,0.3)]"
        >
            <div className="flex gap-2 max-w-md mx-auto">
                <a
                    href={`tel:${phoneNumber}`}
                    onClick={() => handleContactClick('phone', 'mobile_sticky_call', phoneNumber)}
                    className="flex-1 bg-brand-yellow text-black font-black uppercase text-xs sm:text-sm py-3 px-2 rounded-xl border-2 border-black flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-[2px_2px_0px_#000]"
                >
                    <Phone className="w-4 h-4 fill-current text-black flex-shrink-0" />
                    <span className="truncate">Позвонить в сервис</span>
                </a>
                <button
                    type="button"
                    onClick={() => openBooking('Сход-развал 3D')}
                    className="flex-1 bg-white text-black font-black uppercase text-xs sm:text-sm py-3 px-2 rounded-xl border-2 border-black flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-[2px_2px_0px_#000]"
                >
                    <CalendarCheck className="w-4 h-4 text-black flex-shrink-0" />
                    <span className="truncate">Запись онлайн</span>
                </button>
            </div>
        </aside>
    );
}
