"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../lib/translations';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ru');

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
        if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    };

    // Helper to get nested translation value by string path (e.g., 'nav.home')
    const t = (path: string) => {
        const keys = path.split('.');
        let value: any = translations[language];

        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                console.warn(`Translation key not found: ${path} (lang: ${language})`);
                return path; // Fallback to key name
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
