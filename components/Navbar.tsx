'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/#services' },
    { name: 'Цены', href: '/#prices' },
    { name: 'Отзывы', href: '/#reviews' },
    { name: 'Контакты', href: '/#contacts' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                                Авто14
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right - Contacts & CTA */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">
                        <div className="flex flex-col items-end text-sm hidden xl:flex">
                            <a href="tel:+79990000000" className="font-bold text-gray-900 hover:text-primary-600 flex items-center gap-1">
                                <Phone className="w-4 h-4" /> +7 (999) 000-00-00
                            </a>
                            <span className="text-gray-500 text-xs flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> Казань, ул. Заречная 5Б
                            </span>
                        </div>
                        <Button variant="primary" size="sm" href="#contacts">Записаться</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4">
                    <Container>
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-base font-semibold leading-7 text-gray-900 hover:text-primary-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <hr className="border-gray-100 my-2" />
                            <a href="tel:+79990000000" className="block text-base font-semibold text-gray-900">
                                <Phone className="w-5 h-5 inline mr-2 text-primary-600" /> +7 (999) 000-00-00
                            </a>
                            <Button variant="primary" className="w-full justify-center" href="#contacts">
                                Записаться онлайн
                            </Button>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
