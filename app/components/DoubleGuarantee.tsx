import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function DoubleGuarantee() {
    return (
        <section className="mt-8 mb-12 border-4 border-black bg-[#FFF500] text-black p-5 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-black/30">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-black fill-black/10" />
                    <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight">
                        Двойная железная гарантия Авто14
                    </h3>
                </div>
                <span className="bg-black text-[#FFF500] font-black text-xs uppercase px-2.5 py-1 tracking-wider">
                    Честный сервис
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Гарантия 1: Финансовая */}
                <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-black text-white font-black text-xs px-2 py-0.5 uppercase">
                                Гарантия 1
                            </span>
                            <h4 className="font-black text-sm uppercase">0 ₽ скрытых доплат</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                            Смету фиксируем <span className="font-black">до заезда на подъемник</span>. Любые дополнительные работы — строго по согласованию с вами до начала ремонта. В чеке не появится ни одного лишнего рубля.
                        </p>
                    </div>
                </div>

                {/* Гарантия 2: Техническая */}
                <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-black text-white font-black text-xs px-2 py-0.5 uppercase">
                                Гарантия 2
                            </span>
                            <h4 className="font-black text-sm uppercase">7 дней тест-драйва</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                            Если после сход-развала руль смещен хоть на 1° или машину тянет в сторону — <span className="font-black">бесплатная повторная калибровка</span> на стенде 3D Hoffman без лишних споров и экспертиз.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
