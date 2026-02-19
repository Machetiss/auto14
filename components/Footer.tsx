import React from 'react';
import Container from './ui/Container';
import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Integ */}
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent block mb-4">
                            Авто14
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Профессиональный автосервис в Казани. Мы заботимся о вашем автомобиле, как о своем собственном. Честные цены и гарантия на все работы.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Услуги</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/services/wheel-alignment" className="hover:text-primary-400 transition-colors">Развал-схождение</Link></li>
                            <li><Link href="/services/chassis-repair" className="hover:text-primary-400 transition-colors">Ремонт ходовой</Link></li>
                            <li><Link href="/services/tire-fitting" className="hover:text-primary-400 transition-colors">Шиномонтаж 3D</Link></li>
                            <li><Link href="/services/diagnostics" className="hover:text-primary-400 transition-colors">Диагностика авто</Link></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Контакты</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>г. Казань, Константиновка,<br />ул. Заречная 5Б</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                                <a href="tel:+79990000000" className="hover:text-white white-space-nowrap">+7 (999) 000-00-00</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary-500 shrink-0" />
                                <span>Пн–Сб: 09:00 – 19:00<br />Вс: Выходной</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Embed (Placeholder) */}
                    <div className="rounded-xl overflow-hidden h-48 bg-gray-800 relative">
                        {/* In a real app, this would be an Iframe to Yandex/Google Maps */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <span className="flex flex-col items-center gap-2">
                                <MapPin className="w-8 h-8" />
                                Карта проезда
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Автосервис «Авто14». Все права защищены.</p>
                    <p>Разработка и продвижение: Antigravity</p>
                </div>
            </Container>
        </footer>
    );
}
