"use client";

import { X, Navigation, Map as MapIcon, Compass } from 'lucide-react';

interface NavigatorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigatorModal({ isOpen, onClose }: NavigatorModalProps) {
    if (!isOpen) return null;

    const lat = "55.809049";
    const lon = "49.264877";
    const address = "г. Казань, Константиновка, ул. Заречная 5Б";

    const navigators = [
        {
            name: "Яндекс Карты",
            icon: MapIcon,
            color: "bg-[#FFF500]",
            textColor: "text-black",
            link: `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`,
            appLink: `yandexnavi://build_route_on_map?lat=${lat}&lon=${lon}`
        },
        {
            name: "Google Maps",
            icon: Navigation,
            color: "bg-black",
            textColor: "text-white",
            link: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`,
            appLink: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`
        },
        {
            name: "2ГИС",
            icon: Compass,
            color: "bg-[#6ABC28]",
            textColor: "text-white",
            link: `https://2gis.ru/routeSearch/rsType/car/to/${lon},${lat}`,
            appLink: `dgis://2gis.ru/routeSearch/rsType/car/to/${lon},${lat}`
        }
    ];

    const handleOpen = (nav: typeof navigators[0]) => {
        // Try to open app link, fallback to web
        window.open(nav.link, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white text-black w-full max-w-sm rounded-3xl p-8 relative shadow-2xl border-4 border-black animate-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Навигатор</h2>
                <p className="font-bold opacity-60 mb-6 text-sm italic">Выберите удобный навигатор для поездки к нам.</p>

                <div className="flex flex-col gap-4">
                    {navigators.map((nav, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOpen(nav)}
                            className={`${nav.color} ${nav.textColor} flex items-center justify-between px-6 py-4 rounded-2xl border-2 border-black font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[4px_4px_0px_#000] hover:shadow-none`}
                        >
                            <div className="flex items-center gap-4">
                                <nav.icon className="w-6 h-6" />
                                <span>{nav.name}</span>
                            </div>
                            <Navigation className="w-4 h-4 opacity-40 rotate-45" />
                        </button>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-black/5 rounded-xl border-2 border-black/10">
                    <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Наш адрес:</h3>
                    <p className="font-bold text-xs">{address}</p>
                </div>
            </div>
        </div>
    );
}
