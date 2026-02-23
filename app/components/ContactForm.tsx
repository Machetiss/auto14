"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { sendEvent } from '@/lib/analytics';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phone || phone.length < 11) {
            alert('Пожалуйста, введите корректный номер телефона');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service: 'Контактная форма',
                    name: name || 'Клиент',
                    phone,
                    description: message,
                    utm: { source: 'contacts_page' }
                }),
            });

            if (response.ok) {
                sendEvent('generate_lead', {
                    form_id: 'contact_page_form',
                    method: 'form'
                });
                setIsSuccess(true);
                setName('');
                setPhone('');
                setMessage('');
            } else {
                alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Submit Error:', error);
            alert('Произошла ошибка сети.');
        } finally {
            setIsLoading(false);
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        val = val.replace(/[^\d+]/g, '');
        if (!val.startsWith('+7')) {
            const digits = val.replace(/\D/g, '');
            if (digits.length > 0) {
                if (digits.startsWith('8') || digits.startsWith('7')) {
                    val = '+7' + digits.substring(1);
                } else {
                    val = '+7' + digits;
                }
            } else {
                val = '+7';
            }
        }
        if (val.length > 12) return;
        setPhone(val);
    };

    if (isSuccess) {
        return (
            <div className="bg-green-500 text-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] text-center animate-in zoom-in duration-300">
                <h3 className="text-2xl font-black uppercase mb-2">Спасибо!</h3>
                <p className="font-bold">Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs underline font-bold uppercase tracking-widest opacity-80"
                >
                    Отправить еще одно
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col gap-4">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Напишите нам</h3>

            <div>
                <label className="block font-black text-xs uppercase mb-1 ml-2">Как вас зовут?</label>
                <input
                    type="text"
                    placeholder="Например: Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-[#FFF500]/50 transition-all"
                />
            </div>

            <div>
                <label className="block font-black text-xs uppercase mb-1 ml-2">Ваш телефон *</label>
                <input
                    type="tel"
                    required
                    placeholder="+7 999 000 00 00"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-[#FFF500]/50 transition-all"
                />
            </div>

            <div>
                <label className="block font-black text-xs uppercase mb-1 ml-2">Ваш вопрос</label>
                <textarea
                    rows={4}
                    placeholder="Напишите здесь, что вас интересует..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-bold placeholder:font-normal placeholder:opacity-50 focus:outline-none focus:ring-4 focus:ring-[#FFF500]/50 transition-all resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="bg-[#FFF500] text-black font-black uppercase tracking-wider py-4 rounded-xl mt-2 hover:bg-black hover:text-[#FFF500] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed border-2 border-black"
            >
                {isLoading ? (
                    <span className="animate-pulse">Отправка...</span>
                ) : (
                    <>
                        <span>Отправить запрос</span>
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>
            <p className="text-[10px] text-center font-bold opacity-40">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
        </form>
    );
}
