"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Phone, Gift, Clock, ChevronRight } from 'lucide-react';
import { sendEvent } from '@/lib/analytics';
import { useLanguage } from '../context/LanguageContext';

// Prize configuration with weighted probabilities
const PRIZES = [
    { id: 0, weight: 45, color: '#FFF500', textColor: '#000000' }, // Бесплатная диагностика
    { id: 1, weight: 15, color: '#1a1a1a', textColor: '#FFF500' }, // Скидка 10% на развал
    { id: 2, weight: 20, color: '#FF4500', textColor: '#FFFFFF' }, // Скидка 10% на шиномонтаж
    { id: 3, weight: 10, color: '#FFF500', textColor: '#000000' }, // Скидка 10% на замену масла
    { id: 4, weight: 8, color: '#1a1a1a', textColor: '#FFF500' }, // Балансировка 4 колёс
    { id: 5, weight: 2, color: '#FF4500', textColor: '#FFFFFF' }, // Попробуй ещё раз
];

const STORAGE_KEY = 'avto14_wheel_shown';
const COOLDOWN_DAYS = 7;
const TIMER_SECONDS = 15 * 60; // 15 minutes

function getWeightedPrize(): number {
    const totalWeight = PRIZES.reduce((sum, p) => sum + p.weight, 0);
    let random = Math.random() * totalWeight;
    for (const prize of PRIZES) {
        random -= prize.weight;
        if (random <= 0) return prize.id;
    }
    return 0;
}

export default function SpinWheelPopup() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [phase, setPhase] = useState<'spin' | 'result'>('spin');
    const [phone, setPhone] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [wonPrize, setWonPrize] = useState<number | null>(null);
    const [rotation, setRotation] = useState(0);
    const [timer, setTimer] = useState(TIMER_SECONDS);
    const [isLoading, setIsLoading] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const hasTriggeredRef = useRef(false);
    const sessionTriggeredRef = useRef(false);

    const prizes = t('spinWheel.prizes') as string[];

    // Check if popup should be shown (cooldown check)
    const canShow = useCallback(() => {
        if (sessionTriggeredRef.current) return false;
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const lastShown = new Date(stored).getTime();
                const now = Date.now();
                const daysPassed = (now - lastShown) / (1000 * 60 * 60 * 24);
                if (daysPassed < COOLDOWN_DAYS) return false;
            }
        } catch { /* localStorage unavailable */ }
        return true;
    }, []);

    // Mark as shown
    const markShown = useCallback(() => {
        sessionTriggeredRef.current = true;
        try {
            localStorage.setItem(STORAGE_KEY, new Date().toISOString());
        } catch { /* localStorage unavailable */ }
    }, []);

    // Exit intent detection (desktop: mouseout, mobile: scroll up quickly)
    useEffect(() => {
        if (!canShow()) return;

        // Desktop: detect mouse leaving viewport
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggeredRef.current) {
                hasTriggeredRef.current = true;
                markShown();
                setIsVisible(true);
                sendEvent('popup_shown', { popup_type: 'spin_wheel', trigger: 'exit_intent' });
            }
        };

        // Mobile: detect rapid scroll up (back-to-top gesture)
        let lastScrollY = window.scrollY;
        let scrollUpAccumulator = 0;

        const handleScroll = () => {
            const currentY = window.scrollY;
            const diff = lastScrollY - currentY;

            if (diff > 0) {
                scrollUpAccumulator += diff;
                if (scrollUpAccumulator > 300 && currentY > 200 && !hasTriggeredRef.current) {
                    hasTriggeredRef.current = true;
                    markShown();
                    setIsVisible(true);
                    sendEvent('popup_shown', { popup_type: 'spin_wheel', trigger: 'scroll_up_mobile' });
                }
            } else {
                scrollUpAccumulator = 0;
            }
            lastScrollY = currentY;
        };

        // Add a small delay before enabling (don't trigger on page load)
        const timeoutId = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
            window.addEventListener('scroll', handleScroll, { passive: true });
        }, 5000); // Wait 5 seconds before arming

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [canShow, markShown]);

    // Draw wheel on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = canvas.width;
        const center = size / 2;
        const radius = center - 8;
        const sliceAngle = (2 * Math.PI) / PRIZES.length;

        ctx.clearRect(0, 0, size, size);

        // Draw slices
        PRIZES.forEach((prize, i) => {
            const startAngle = i * sliceAngle + (rotation * Math.PI) / 180;
            const endAngle = startAngle + sliceAngle;

            // Slice
            ctx.beginPath();
            ctx.moveTo(center, center);
            ctx.arc(center, center, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = prize.color;
            ctx.fill();

            // Border between slices
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Text
            ctx.save();
            ctx.translate(center, center);
            ctx.rotate(startAngle + sliceAngle / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = prize.textColor;
            ctx.font = `bold ${size < 280 ? 9 : 11}px sans-serif`;
            
            const text = prizes[i] || '';
            // Wrap text if too long
            const maxWidth = radius * 0.7;
            if (ctx.measureText(text).width > maxWidth) {
                const words = text.split(' ');
                let line1 = '';
                let line2 = '';
                for (const word of words) {
                    if (ctx.measureText(line1 + ' ' + word).width < maxWidth) {
                        line1 += (line1 ? ' ' : '') + word;
                    } else {
                        line2 += (line2 ? ' ' : '') + word;
                    }
                }
                ctx.fillText(line1, radius - 16, -6);
                ctx.fillText(line2, radius - 16, 10);
            } else {
                ctx.fillText(text, radius - 16, 4);
            }
            ctx.restore();
        });

        // Center circle
        ctx.beginPath();
        ctx.arc(center, center, radius * 0.15, 0, 2 * Math.PI);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.strokeStyle = '#FFF500';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Outer ring
        ctx.beginPath();
        ctx.arc(center, center, radius + 4, 0, 2 * Math.PI);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Decorative dots on outer ring
        for (let i = 0; i < 24; i++) {
            const angle = (i / 24) * 2 * Math.PI;
            const dotX = center + (radius + 4) * Math.cos(angle);
            const dotY = center + (radius + 4) * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
            ctx.fillStyle = i % 2 === 0 ? '#FFF500' : '#FF4500';
            ctx.fill();
        }

    }, [rotation, prizes]);

    // Timer countdown
    useEffect(() => {
        if (phase === 'result' && wonPrize !== null && wonPrize !== 5) {
            timerRef.current = setInterval(() => {
                setTimer(prev => {
                    if (prev <= 1) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [phase, wonPrize]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        let digits = val.replace(/\D/g, '');
        if (digits.startsWith('8')) digits = '7' + digits.substring(1);
        if (!digits.startsWith('7') && digits.length > 0) digits = '7' + digits;
        digits = digits.substring(0, 11);

        let formatted = '';
        if (digits.length === 0) formatted = '';
        else if (digits.length <= 1) formatted = '+7';
        else if (digits.length <= 4) formatted = `+7 (${digits.substring(1)}`;
        else if (digits.length <= 7) formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4)}`;
        else if (digits.length <= 9) formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7)}`;
        else formatted = `+7 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7, 9)}-${digits.substring(9)}`;

        setPhone(formatted);
    };

    const handleSpin = () => {
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length < 11) {
            // Shake the input
            const input = document.getElementById('spin-phone-input');
            if (input) {
                input.classList.add('animate-shake');
                setTimeout(() => input.classList.remove('animate-shake'), 500);
            }
            return;
        }

        setIsSpinning(true);
        const prizeIndex = getWeightedPrize();
        setWonPrize(prizeIndex);

        // Calculate target rotation: 5 full spins + landing on prize sector
        const sliceAngle = 360 / PRIZES.length;
        const targetAngle = 360 * 5 + (360 - prizeIndex * sliceAngle - sliceAngle / 2);

        sendEvent('spin_wheel_spun', { prize_id: prizeIndex, prize_name: prizes[prizeIndex] });

        // Animate rotation
        let startTime: number | null = null;
        const duration = 4000; // 4 seconds
        const startRotation = rotation;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentRotation = startRotation + targetAngle * eased;
            setRotation(currentRotation);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Animation complete — show result
                setIsSpinning(false);
                setPhase('result');
            }
        };

        requestAnimationFrame(animate);
    };

    const handleClaim = async () => {
        if (wonPrize === null) return;
        setIsLoading(true);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service: prizes[wonPrize],
                    name: 'Клиент (Колесо удачи)',
                    phone,
                    car: '',
                    description: `Выигрыш: ${prizes[wonPrize]}`,
                    language,
                    utm: { source: 'spin_wheel', prize: prizes[wonPrize] }
                }),
            });

            if (!response.ok) {
                console.error('API Error:', await response.json().catch(() => ({})));
            }

            sendEvent('generate_lead', { form_id: 'spin_wheel', method: 'gamification', prize: prizes[wonPrize] });
            window.location.href = '/thank-you';
        } catch (error) {
            console.error('Submit Error:', error);
            window.location.href = '/thank-you';
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        sendEvent('popup_closed', { popup_type: 'spin_wheel', phase });
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // ESC key to close
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isVisible) handleClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 animate-fadeIn"
                onClick={handleClose}
            ></div>

            {/* Popup Container */}
            <div className="relative bg-[#FFF500] text-black w-full max-w-[440px] rounded-3xl border-4 border-black shadow-[8px_8px_0px_#FF4500] overflow-hidden animate-scaleIn max-h-[95vh] overflow-y-auto">
                
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {phase === 'spin' ? (
                    /* ==================== PHASE 1: SPIN ==================== */
                    <div className="p-6 pt-4 flex flex-col items-center">
                        {/* Header */}
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-center leading-none mb-1">
                            {t('spinWheel.title')}
                        </h2>
                        <p className="text-sm font-black uppercase tracking-wider text-center opacity-70 mb-4">
                            {t('spinWheel.subtitle')}
                        </p>

                        {/* Wheel Container */}
                        <div className="relative mb-4">
                            {/* Arrow / Pointer */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20">
                                <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-t-[28px] border-l-transparent border-r-transparent border-t-black drop-shadow-md"></div>
                            </div>
                            
                            <canvas
                                ref={canvasRef}
                                width={280}
                                height={280}
                                className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] drop-shadow-lg"
                            />

                            {/* Center button text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center border-2 border-[#FFF500]">
                                    <Gift className="w-5 h-5 md:w-6 md:h-6 text-[#FFF500]" />
                                </div>
                            </div>
                        </div>

                        {/* Phone Input */}
                        <div className="w-full mb-3">
                            <label className="block font-black text-xs uppercase tracking-wider mb-1 ml-1">
                                <Phone className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                                {t('spinWheel.phoneLabel')}
                            </label>
                            <input
                                id="spin-phone-input"
                                type="tel"
                                required
                                placeholder={t('spinWheel.phonePlaceholder') as string}
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength={18}
                                className="w-full bg-white border-3 border-black rounded-xl px-4 py-3.5 font-bold text-lg placeholder:font-normal placeholder:opacity-40 focus:outline-none focus:ring-4 focus:ring-black/20 shadow-[3px_3px_0px_#000] transition-shadow focus:shadow-none"
                            />
                        </div>

                        {/* Spin Button */}
                        <button
                            onClick={handleSpin}
                            disabled={isSpinning}
                            className="w-full bg-black text-[#FFF500] font-black uppercase tracking-wider text-lg py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_#FF4500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_#FF4500] disabled:hover:translate-x-0 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                        >
                            {isSpinning ? (
                                <span className="animate-pulse">🎰 ...</span>
                            ) : (
                                <>
                                    <span>{t('spinWheel.spinButton')}</span>
                                </>
                            )}
                        </button>

                        {/* Social proof */}
                        <p className="text-[10px] font-bold uppercase tracking-wider mt-2 opacity-50 text-center">
                            {t('spinWheel.slotsLeft')} <span className="text-[#FF4500] font-black text-xs">3</span>
                        </p>

                        {/* Decline */}
                        <button
                            onClick={handleClose}
                            className="mt-2 text-xs font-bold opacity-40 hover:opacity-70 transition-opacity uppercase tracking-wider"
                        >
                            {t('spinWheel.declineText')}
                        </button>
                    </div>
                ) : (
                    /* ==================== PHASE 2: RESULT ==================== */
                    <div className="p-6 pt-8 flex flex-col items-center">
                        {wonPrize !== null && wonPrize !== 5 ? (
                            <>
                                {/* Confetti-like emoji */}
                                <div className="text-5xl mb-2 animate-bounce">🎉</div>
                                
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-center leading-none mb-2">
                                    {t('spinWheel.winTitle')}
                                </h2>

                                {/* Prize Card */}
                                <div className="w-full bg-black text-[#FFF500] rounded-2xl p-5 mb-4 border-3 border-black shadow-[4px_4px_0px_#FF4500]">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">
                                        {t('spinWheel.winSubtitle')}
                                    </p>
                                    <p className="text-2xl md:text-3xl font-black uppercase leading-tight">
                                        {prizes[wonPrize]}
                                    </p>
                                </div>

                                {/* Countdown Timer */}
                                <div className="flex items-center gap-3 mb-4 bg-white/80 px-4 py-2.5 rounded-xl border-2 border-black">
                                    <Clock className="w-5 h-5 text-[#FF4500] animate-pulse" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                            {t('spinWheel.timerText')}
                                        </p>
                                        <p className={`text-2xl font-black font-mono tracking-wider ${timer < 300 ? 'text-[#FF4500]' : 'text-black'}`}>
                                            {formatTime(timer)}
                                        </p>
                                    </div>
                                </div>

                                {/* Claim Button */}
                                <button
                                    onClick={handleClaim}
                                    disabled={isLoading}
                                    className="w-full bg-[#FF4500] text-white font-black uppercase tracking-wider text-lg py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <span className="animate-pulse">{language === 'ru' ? 'Отправка...' : 'Sending...'}</span>
                                    ) : (
                                        <>
                                            <span>{t('spinWheel.claimButton')}</span>
                                            <ChevronRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center font-bold opacity-30 mt-2">
                                    {t('spinWheel.policy')}
                                </p>
                            </>
                        ) : (
                            /* Lost / Try again */
                            <>
                                <div className="text-5xl mb-3">😅</div>
                                <h2 className="text-2xl font-black uppercase text-center mb-3">
                                    {prizes[5]}
                                </h2>
                                <p className="text-sm font-bold opacity-60 text-center mb-4">
                                    {language === 'ru' 
                                        ? 'Но мы всё равно ждём вас! Запишитесь на бесплатную диагностику.' 
                                        : 'But we look forward to seeing you! Book a free diagnostic.'}
                                </p>
                                <button
                                    onClick={handleClaim}
                                    disabled={isLoading}
                                    className="w-full bg-black text-[#FFF500] font-black uppercase tracking-wider py-4 rounded-xl border-3 border-black shadow-[4px_4px_0px_#FF4500] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                                >
                                    {language === 'ru' ? 'Записаться на диагностику →' : 'Book a diagnostic →'}
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="mt-3 text-xs font-bold opacity-40 hover:opacity-70 transition-opacity uppercase"
                                >
                                    {t('spinWheel.declineText')}
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.8) translateY(20px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-8px); }
                    40% { transform: translateX(8px); }
                    60% { transform: translateX(-4px); }
                    80% { transform: translateX(4px); }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
                .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
                .animate-shake { animation: shake 0.5s ease-in-out; }
            `}</style>
        </div>
    );
}
