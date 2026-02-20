"use client";

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { sendEvent } from '@/lib/analytics';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialService?: string;
}

export default function BookingModal({ isOpen, onClose, initialService = 'Сход-развал 3D' }: BookingModalProps) {
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

        // Basic validation
        if (!phone || phone.length < 11) {
            alert('Пожалуйста, введите корректный номер телефона');
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

        // Remove all non-digit characters except +
        val = val.replace(/[^\d+]/g, '');

        // Ensure it starts with +7
        if (!val.startsWith('+7')) {
            // Check if user started typing 8 or 9 or just a digit
            const digits = val.replace(/\D/g, '');
            if (digits.length > 0) {
                // If starts with 8, replace with 7. If 7, keep. Else just append.
                if (digits.startsWith('8')) {
                    val = '+7' + digits.substring(1);
                } else if (digits.startsWith('7')) {
                    val = '+7' + digits.substring(1);
                } else {
                    val = '+7' + digits;
                }
            } else {
                val = '+7';
            }
        }

        // Limit length (optional, e.g. +7 999 999 99 99 is 12 chars, but raw digits is 11)
        if (val.length > 12) return;

        setPhone(val);
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

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Запись</h2>
                <p className="font-bold opacity-60 mb-6 text-sm">Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">Услуга</label>
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:ring-4 focus:ring-black/20 appearance-none"
                        >
                            <option value="Сход-развал 3D">3D Сход-развал</option>
                            <option value="Ремонт ходовой">Ремонт ходовой</option>
                            <option value="Подбор запчастей">Подбор запчастей</option>
                            <option value="Техническое обслуживание">ТО (Замена масла и др.)</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </div>

                    {/* Conditionally render description for 'Others' */}
                    {service === 'Другое' && (
                        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="block font-bold text-sm uppercase mb-1 ml-2">Опишите проблему</label>
                            <textarea
                                required
                                rows={3}
                                placeholder="Например: стук в подвеске справа..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20 resize-none"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">Марка и модель авто</label>
                        <input
                            type="text"
                            required
                            placeholder="Например: Kia Rio"
                            value={car}
                            onChange={(e) => setCar(e.target.value)}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20"
                        />
                    </div>

                    <div>
                        <label className="block font-bold text-sm uppercase mb-1 ml-2">Ваш телефон</label>
                        <input
                            type="tel"
                            required
                            placeholder="+7 999 000 00 00"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={12}
                            className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-black/20"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#FF4500] text-white font-black uppercase tracking-wider py-4 rounded-xl mt-2 hover:bg-black hover:text-[#FFF500] hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-transparent hover:border-[#FFF500]"
                    >
                        {isLoading ? (
                            <span>Отправка...</span>
                        ) : (
                            <>
                                <span>Записаться</span>
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center font-bold opacity-40 mt-2">
                        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                </form>
            </div>
        </div>
    );
}
