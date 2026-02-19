"use client";

import { useBooking } from '@/app/context/BookingContext';
import { cn } from '@/lib/utils'; // Assuming you have clsx/tailwind-merge or just use template literals

interface BookingModalTriggerProps {
    className?: string;
    text?: string;
    service?: string;
}

export default function BookingModalTrigger({ className, text = "Записаться", service }: BookingModalTriggerProps) {
    const { openBooking } = useBooking();

    return (
        <button
            onClick={() => openBooking(service)}
            className={`px-8 py-4 font-black uppercase text-sm md:text-base tracking-wider transition-transform hover:scale-105 active:scale-95 ${className}`}
        >
            {text}
        </button>
    );
}
