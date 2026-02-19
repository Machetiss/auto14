"use client";

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';

const reviewsData = {
    yandex: [
        {
            text: "Отличный сервис! Делал сход-развал, всё четко, руль ровно, машину никуда не ведет. Мастера знают своё дело, лишнего не навязывают.",
            author: "Алексей С.",
            badge: "Знаток города"
        },
        {
            text: "Ребята молодцы, быстро и качественно. Цены адекватные. Нашли проблему, которую в другом сервисе не видели.",
            author: "Михаил К.",
            badge: "Рекомендует"
        },
        {
            text: "Все супер, заехал на ТО, сделали все быстро. Масло, фильтра - все в наличии. Отношение к клиенту на высоте.",
            author: "Дмитрий В.",
            badge: "Клиент"
        },
        {
            text: "Грамотные специалисты. Объяснили все нюансы по подвеске, показали наглядно. Сделали скидку на запчасти.",
            author: "Сергей П.",
            badge: "Постоянный клиент"
        },
        {
            text: "Записался день в день, приняли вовремя. Сход-развал сделали идеально, дали распечатку до и после.",
            author: "Андрей М.",
            badge: "Новичек"
        }
    ],
    gis: [
        {
            text: "Заезжал на диагностику ходовой. Быстро нашли причину стука, запчасти заказали сами. Цены адекватные, отношение человеческое.",
            author: "Руслан А.",
            badge: "Рекомендует"
        },
        {
            text: "Хороший сервис, грамотные специалисты. Сделали развал-схождение на отлично, машину не узнать. Спасибо!",
            author: "Ильдар Г.",
            badge: "Знаток"
        },
        {
            text: "Обслуживаю здесь свою машину уже год. Всегда все четко, по делу. Лишних работ не придумывают.",
            author: "Сергей Т.",
            badge: "Постоянный клиент"
        },
        {
            text: "Удобное расположение, есть где подождать. Мастера вежливые, все рассказывают и показывают.",
            author: "Тимур Б.",
            badge: "Клиент"
        },
        {
            text: "Спасли меня перед дальней дорогой! Быстро поменяли ступичный подшипник. Очень благодарен.",
            author: "Валерий Д.",
            badge: "Проездом"
        }
    ],
    avito: [
        {
            text: "Мастер - профессионал! Сделал всё качественно и в срок. Оборудование новое, в сервисе чисто. Буду обращаться ещё.",
            author: "Марат З.",
            badge: "Проверенный отзыв"
        },
        {
            text: "Отличный мастер, знает свое дело. Сделал все быстро и качественно. Рекомендую всем знакомым!",
            author: "Артем Е.",
            badge: "Сделка состоялась"
        },
        {
            text: "Все понравилось, вежливое общение, качественная работа. Цены ниже, чем у конкурентов.",
            author: "Евгений О.",
            badge: "5.0"
        },
        {
            text: "Обращался по шиномонтажу. Все сделали аккуратно, диски не поцарапали, отбалансировали идеально.",
            author: "Александр К.",
            badge: "Сделка состоялась"
        },
        {
            text: "Честный сервис. Не пытались развести на лишний ремонт, сделали только то, что требовалось.",
            author: "Николай Ф.",
            badge: "Сделка состоялась"
        }
    ]
};

export default function ReviewsSection() {
    const [mounted, setMounted] = useState(false);
    // Initial state with random selection to avoid hydration mismatch if possible, 
    // but usually better to start empty or first item and swap in useEffect for CSR.
    // For SEO we might want static content, but user asked for dynamic.
    const [reviews, setReviews] = useState({
        yandex: reviewsData.yandex[0],
        gis: reviewsData.gis[0],
        avito: reviewsData.avito[0]
    });

    useEffect(() => {
        setMounted(true);
        setReviews({
            yandex: reviewsData.yandex[Math.floor(Math.random() * reviewsData.yandex.length)],
            gis: reviewsData.gis[Math.floor(Math.random() * reviewsData.gis.length)],
            avito: reviewsData.avito[Math.floor(Math.random() * reviewsData.avito.length)]
        });
    }, []);

    // Return null or skeleton only if strictly needed, but showing default is better for LCP
    // However, to ensure "dynamic feel", the useEffect swap is key.

    return (
        <section id="reviews" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Settings className="w-96 h-96 absolute -top-20 -left-20 animate-spin-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] text-[#FFF500] mb-6">
                            Отзывы<br />Клиентов
                        </h2>
                        <p className="text-xl font-bold opacity-80 max-w-lg">
                            Нас рекомендуют друзьям. Рейтинг 5.0 на картах – это не просто цифры, это ваша уверенность в результате.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Yandex Maps */}
                    <a href="https://yandex.ru/maps/org/avto14/108623850068/reviews/?ll=49.264877%2C55.809049&z=16" target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] p-8 rounded-[2rem] hover:bg-[#2a2a2a] transition-colors group border border-white/10 hover:border-[#FFF500]/50 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-red-600 text-white font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">Яндекс</div>
                            <div className="flex text-[#FFF500]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                        </div>
                        <p className="font-bold text-lg mb-4 opacity-90 flex-grow">
                            &quot;{reviews.yandex.text}&quot;
                        </p>
                        <div className="flex items-center gap-3 opacity-60 mt-auto">
                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-bold text-xl">{reviews.yandex.author[0]}</div>
                            <div>
                                <div className="font-bold text-sm">{reviews.yandex.author}</div>
                                <div className="text-xs">{reviews.yandex.badge}</div>
                            </div>
                        </div>
                    </a>

                    {/* 2GIS */}
                    <a href="https://2gis.ru/kazan/firm/70000001065947100/tab/reviews" target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] p-8 rounded-[2rem] hover:bg-[#2a2a2a] transition-colors group border border-white/10 hover:border-[#FFF500]/50 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-[#78c331] text-white font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">2GIS</div>
                            <div className="flex text-[#FFF500]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                        </div>
                        <p className="font-bold text-lg mb-4 opacity-90 flex-grow">
                            &quot;{reviews.gis.text}&quot;
                        </p>
                        <div className="flex items-center gap-3 opacity-60 mt-auto">
                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-bold text-xl">{reviews.gis.author[0]}</div>
                            <div>
                                <div className="font-bold text-sm">{reviews.gis.author}</div>
                                <div className="text-xs">{reviews.gis.badge}</div>
                            </div>
                        </div>
                    </a>

                    {/* Avito */}
                    <a href="https://www.avito.ru/kazan/predlozheniya_uslug/avtoservis_shod-razval_3d_remont_avto_kazan_2642374619" target="_blank" rel="noopener noreferrer" className="bg-[#1e1e1e] p-8 rounded-[2rem] hover:bg-[#2a2a2a] transition-colors group border border-white/10 hover:border-[#FFF500]/50 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-[#00aaff] text-white font-bold px-3 py-1 rounded text-sm uppercase tracking-wider">Авито</div>
                            <div className="flex text-[#FFF500]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                            </div>
                        </div>
                        <p className="font-bold text-lg mb-4 opacity-90 flex-grow">
                            &quot;{reviews.avito.text}&quot;
                        </p>
                        <div className="flex items-center gap-3 opacity-60 mt-auto">
                            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-bold text-xl">{reviews.avito.author[0]}</div>
                            <div>
                                <div className="font-bold text-sm">{reviews.avito.author}</div>
                                <div className="text-xs">{reviews.avito.badge}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
