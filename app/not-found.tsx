import Link from 'next/link';
import { Home, FileQuestion } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FFF500] text-black flex items-center justify-center p-4">
            <div className="bg-black text-white p-12 rounded-[3rem] border-8 border-black shadow-2xl text-center max-w-2xl w-full">
                <FileQuestion className="w-24 h-24 text-[#FFF500] mx-auto mb-6 animate-pulse" />

                <h1 className="text-8xl font-black uppercase mb-2 text-[#FFF500] tracking-tighter">404</h1>
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Страница не найдена</h2>

                <p className="text-xl font-bold opacity-80 mb-10 max-w-md mx-auto">
                    Похоже, мы заехали не туда. Этой страницы больше не существует или она переехала.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-[#FFF500] text-black px-8 py-4 rounded-full font-black uppercase hover:scale-105 transition-transform flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        На главную
                    </Link>
                    <Link
                        href="/#services"
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                    >
                        Наши услуги
                    </Link>
                </div>
            </div>
        </div>
    );
}
