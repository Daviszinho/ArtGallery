"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es' | 'pt';

interface Translations {
    header: {
        title: string;
        subtitle: string;
    };
    footer: {
        copyright: string;
        selectLanguage: string;
    };
    status: {
        available: string;
        sold: string;
    };
}

const translations: Record<Language, Translations> = {
    en: {
        header: {
            title: "Davis Penaranda Gallery",
            subtitle: "Explore the unique collection of Davis Penaranda, featuring works in oil, acrylic, watercolor, and mixed media."
        },
        footer: {
            copyright: "Davis Penaranda. All rights reserved.",
            selectLanguage: "Select Language"
        },
        status: {
            available: "Available",
            sold: "Sold"
        }
    },
    es: {
        header: {
            title: "Galería de Davis Penaranda",
            subtitle: "Explore la colección única de Davis Penaranda, con obras en óleo, acrílico, acuarela y técnica mixta."
        },
        footer: {
            copyright: "Davis Penaranda. Todos los derechos reservados.",
            selectLanguage: "Seleccionar Idioma"
        },
        status: {
            available: "Disponible",
            sold: "Vendido"
        }
    },
    pt: {
        header: {
            title: "Galeria Davis Penaranda",
            subtitle: "Explore a coleção única de Davis Penaranda, com obras em óleo, acrílico, aquarela e técnica mista."
        },
        footer: {
            copyright: "Davis Penaranda. Todos os direitos reservados.",
            selectLanguage: "Selecionar Idioma"
        },
        status: {
            available: "Disponível",
            sold: "Vendido"
        }
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && ['en', 'es', 'pt'].includes(savedLang)) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
