"use client";

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { sendEvent } from '@/lib/analytics';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService = 'Сход-развал 3D' }: BookingModalProps) {
    const { t, language } = useLanguage();
    const [service, setService] = useState(initialService);
    const [car, setCar] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Update service when initialService changes (if modal re-opens with different service)
    if (initialService && service !== initialService && !isOpen) {
        setService(initialService);
    }

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation (extract digits from formatted phone)
        const phoneDigits = phone.replace(/\D/g, '');
        if (!phone || phoneDigits.length < 11) {
            alert(language === 'ru' ? 'Пожалуйста, введите корректный номер телефона' : 'Please enter a valid phone number');
            return;
        }

        setIsLoading(true);

        try {
            // Send to server API — handles Telegram, DB, and Google Sheets
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service,
                    name: 'Клиент',
                    phone,
                    car,
                    description,
                    language, // Added language to lead data
                    utm: { source: 'modal' }
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API Error:', errorData);
            }

            sendEvent('generate_lead', {
                form_id: 'booking_modal',
                method: 'form'
            });

            window.location.href = '/thank-you';
        } catch (error) {
            console.error('Submit Error:', error);
            // Still redirect — the lead may have been partially saved
            window.location.href = '/thank-you';
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;

        // Extract only digits
        let digits = val.replace(/\D/g, '');

        // If starts with 8 or 7, treat as Russian number
        if (digits.startsWith('8')) {
            digits = '7' + digits.substring(1);
        }
        if (!digits.startsWith('7') && digits.length > 0) {
            digits = '7' + digits;
        }

        // Limit to 11 digits (7 + 10 digits)
        digits = digits.substring(0, 11);

        // Format as +7 (XXX) XXX-XX-XX
        let formatted = '';
        if (digits.length === 0) {
            formatted = '';
        } else if (digits.length <= 1) {
            formatted = '+7';
        } else if (digits.length <= 4) {
            formatted = `+7 (${digits.substring(1)}`;
        } else if (digits.length <= 7) {
            formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4)}`;
        } else if (digits.length <= 9) {
            formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7)}`;
        } else {
            formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7, 9)}-${digits.substring(9)}`;
        }

        setPhone(formatted);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop - Removed blur for performance */}
            <div
                className="absolute inset-0 bg-black/90"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-[#FFF500] text-black w-full max-w-md rounded-3xl p-8 relative shadow-2xl transform transition-all border-4 border-black max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{t('common.booking')}</h2>
                <p className="font-bold opacity-60 mb-6 text-sm">{t('common.booking_desc')}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">{t('booking.service_label')}</label>
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-black/20 appearance-none"
                        >
                            <option value="Сход-развал 3D">{t('booking.services.alignment')}</option>
                            <option value="Ремонт ходовой">{t('booking.services.suspension')}</option>
                            <option value="Подбор запчастей">{t('booking.services.parts')}</option>
                            <option value="Техническое обслуживание">{t('booking.services.maintenance')}</option>
                            <option value="Другое">{t('booking.services.other')}</option>
                        </select>
                    </div>

                    {/* Conditionally render description for 'Others' */}
                    {service === 'Другое' && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="block font-bold text-sm uppercase mb-1 ml-2">{t('booking.problem_label')}</label>
                            <textarea
                                required
                                rows={3}
                                placeholder={t('booking.problem_placeholder')}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20 resize-none"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">{t('booking.car_label')}</label>
                        <input
                            type="text"
                            required
                            placeholder={t('booking.car_placeholder')}
                            value={car}
                            onChange={(e) => setCar(e.target.value)}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">{t('booking.phone_label')}</label>
                        <input
                            type="tel"
                            required
                            placeholder="+7 (___) ___-__-__"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={18}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#FF4500] text-white font-black uppercase tracking-wider py-4 rounded-xl mt-2 hover:bg-black hover:text-[#FFF500] hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-transparent hover:border-[#FFF500]"
                    >
                        {isLoading ? (
                            <span>{t('common.sending')}</span>
                        ) : (
                            <>
                                <span>{t('common.submit')}</span>
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center font-bold opacity-40 mt-2">
                        {t('common.policy')}
                    </p>
                </form>
            </div>
        </div>
    );
}
