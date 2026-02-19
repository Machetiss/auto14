import Link from 'next/link';
import { CheckCircle, Phone, Home } from 'lucide-react';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="bg-[#1e1e1e] p-8 md:p-12 rounded-[2rem] border-4 border-[#FFF500] max-w-2xl w-full text-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FFF500]"></div>

                <div className="bg-[#FFF500] text-black w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                </div>

                <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 text-[#FFF500] leading-none">
                    Заявка<br />Принята!
                </h1>

                <p className="text-xl font-bold mb-8 opacity-90">
                    Спасибо! Мы уже получили вашу заявку. <br />
                    Мастер перезвонит вам в течение 15 минут для подтверждения записи.
                </p>

                <div className="bg-black/50 p-6 rounded-xl border border-white/10 mb-8 inline-block">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Срочный вопрос?</p>
                    <a href="tel:+79992699359" className="text-2xl font-black hover:text-[#FFF500] transition-colors flex items-center justify-center gap-2">
                        <Phone className="w-6 h-6" />
                        +7 (999) 269-93-59
                    </a>
                </div>

                <div className="flex justify-center">
                    <Link href="/" className="bg-[#FFF500] text-black px-8 py-4 rounded-full font-black uppercase hover:bg-white hover:scale-105 transition-all flex items-center gap-2">
                        <Home className="w-5 h-5" />
                        На главную
                    </Link>
                </div>
            </div>
        </div>
    );
}
