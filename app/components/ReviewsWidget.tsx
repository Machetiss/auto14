"use client";

import { useState } from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

type ReviewPlatform = 'yandex' | '2gis' | 'avito';

export default function ReviewsWidget() {
    const [activeTab, setActiveTab] = useState<ReviewPlatform>('yandex');

    const platforms = [
        {
            id: 'yandex' as const,
            name: 'Яндекс',
            color: '#fc3f1d', // Yandex Red
            textColor: 'text-white',
            hoverColor: 'hover:bg-[#e0381a]'
        },
        {
            id: '2gis' as const,
            name: '2ГИС',
            color: '#2fa83e', // 2GIS Green / Brand
            textColor: 'text-white',
            hoverColor: 'hover:bg-[#278c33]'
        },
        {
            id: 'avito' as const,
            name: 'Авито',
            color: '#00aaff', // Avito Blue
            textColor: 'text-white',
            hoverColor: 'hover:bg-[#0092db]'
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border-4 border-black">
            {/* Header / Tabs */}
            <div className="bg-gray-100 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center border-b-4 border-black">
                <h3 className="font-black uppercase text-xl">
                    Рейтинг сервиса
                </h3>
                <div className="flex gap-2 bg-white p-1 rounded-full border-2 border-black">
                    {platforms.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActiveTab(p.id)}
                            className={`px-6 py-2 rounded-full font-black uppercase text-sm transition-all ${activeTab === p.id
                                    ? `bg-black text-[#FFF500] shadow-md transform scale-105`
                                    : `bg-transparent text-gray-500 hover:bg-gray-200`
                                }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="h-[600px] w-full bg-white relative">
                {activeTab === 'yandex' && (
                    <div className="w-full h-full">
                        <iframe
                            className="w-full h-full border-none"
                            src="https://yandex.ru/maps-reviews-widget/108623850068?comments"
                            title="Отзывы на Яндекс.Картах"
                        />
                        <div className="absolute bottom-4 right-4 z-10">
                            <a
                                href="https://yandex.com/maps/org/avto14/108623850068/reviews/?ll=49.264877%2C55.809049&z=16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-6 py-3 rounded-full font-bold uppercase text-xs hover:bg-[#fc3f1d] transition-colors flex items-center gap-2 shadow-lg"
                            >
                                Оставить отзыв <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                )}

                {activeTab === '2gis' && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#f7f7f7]">
                        {/* 2GIS doesn't have a simple public iframe for reviews only, so we show a card */}
                        <div className="bg-white p-8 rounded-3xl border-2 border-[#2fa83e] max-w-md w-full shadow-2xl relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#2fa83e] text-white px-4 py-1 rounded-full font-bold uppercase text-xs">
                                Проверенный сервис
                            </div>
                            <h4 className="text-3xl font-black uppercase mb-2">Avto14 на 2ГИС</h4>
                            <div className="flex justify-center items-center gap-2 mb-6">
                                <span className="text-5xl font-black text-[#2fa83e]">5.0</span>
                                <div className="flex text-[#2fa83e]">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
                                </div>
                            </div>
                            <p className="font-bold opacity-70 mb-8">
                                Читайте честные отзывы наших клиентов и смотрите фото работ в 2ГИС.
                            </p>
                            <a
                                href="https://2gis.ru/kazan/firm/70000001065947100/tab/reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#2fa83e] text-white px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-[#278c33] transition-transform hover:scale-105"
                            >
                                Читать отзывы <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="mt-8 text-sm opacity-50 max-w-lg">
                            * Виджет 2ГИС требует API ключа. Перейдите по ссылке, чтобы увидеть актуальные отзывы.
                        </p>
                    </div>
                )}

                {activeTab === 'avito' && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#f0f9ff]">
                        <div className="bg-white p-8 rounded-3xl border-2 border-[#00aaff] max-w-md w-full shadow-2xl relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#00aaff] text-white px-4 py-1 rounded-full font-bold uppercase text-xs">
                                Профи на Авито
                            </div>
                            <h4 className="text-3xl font-black uppercase mb-2">Avto14 на Авито</h4>
                            <div className="flex justify-center items-center gap-2 mb-6">
                                <span className="text-5xl font-black text-[#00aaff]">5.0</span>
                                <div className="flex text-[#00aaff]">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
                                </div>
                            </div>
                            <p className="font-bold opacity-70 mb-8">
                                Более 50 положительных отзывов о нашей работе.
                            </p>
                            <a
                                href="https://www.avito.ru/kazan/predlozheniya_uslug/avtoservis_shod-razval_3d_remont_avto_kazan_2642374619"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#00aaff] text-white px-8 py-4 rounded-full font-black uppercase text-lg hover:bg-[#0092db] transition-transform hover:scale-105"
                            >
                                Читать отзывы <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="mt-8 text-sm opacity-50 max-w-lg">
                            * Авито не предоставляет виджет отзывов. Перейдите по ссылке для просмотра.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
