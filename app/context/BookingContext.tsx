"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookingModal from '../components/BookingModal'; // Verify path

interface BookingContextType {
    openBooking: (service?: string) => void;
    closeBooking: () => void;
    isBookingOpen: boolean;
    preselectedService: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [preselectedService, setPreselectedService] = useState('Сход-развал 3D');

    const openBooking = (service?: string) => {
        if (service) setPreselectedService(service);
        setIsBookingOpen(true);
    };

    const closeBooking = () => setIsBookingOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking, isBookingOpen, preselectedService }}>
            {children}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} initialService={preselectedService} />
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
}
