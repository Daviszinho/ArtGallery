"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt' | 'fr' | 'it' | 'de';

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
    gallery: {
        filters: {
            all: string;
            oleo: string;
            acrilico: string;
            acuarela: string;
            tecnicaMixta: string;
        };
        sort: {
            label: string;
            featured: string;
            yearDesc: string;
            yearAsc: string;
            titleAsc: string;
            titleDesc: string;
        };
    };
    detail: {
        back: string;
        about: string;
        inquire: string;
        dimensions: string;
        by: string;
    };
}

const translations: Record<Language, Translations> = {
    en: {
        header: {
            title: "Davis Peñaranda Gallery",
            subtitle: "Explore the unique collection of Davis Peñaranda, featuring works in oil, acrylic, watercolor, and mixed media."
        },
        footer: {
            copyright: "Davis Peñaranda. All rights reserved.",
            selectLanguage: "Select Language"
        },
        status: {
            available: "Available",
            sold: "Sold"
        },
        gallery: {
            filters: {
                all: "All",
                oleo: "Oil",
                acrilico: "Acrylic",
                acuarela: "Watercolor",
                tecnicaMixta: "Mixed Media"
            },
            sort: {
                label: "Sort",
                featured: "Featured",
                yearDesc: "Year: Newest",
                yearAsc: "Year: Oldest",
                titleAsc: "Title: A–Z",
                titleDesc: "Title: Z–A"
            }
        },
        detail: {
            back: "Back to Gallery",
            about: "About the Artwork",
            inquire: "Inquire to Purchase",
            dimensions: "Dimensions",
            by: "by"
        }
    },
    es: {
        header: {
            title: "Galería de Davis Peñaranda",
            subtitle: "Explore la colección única de Davis Peñaranda, con obras en óleo, acrílico, acuarela y técnica mixta."
        },
        footer: {
            copyright: "Davis Peñaranda. Todos los derechos reservados.",
            selectLanguage: "Seleccionar Idioma"
        },
        status: {
            available: "Disponible",
            sold: "Vendido"
        },
        gallery: {
            filters: {
                all: "Todos",
                oleo: "Óleo",
                acrilico: "Acrílico",
                acuarela: "Acuarela",
                tecnicaMixta: "Técnica Mixta"
            },
            sort: {
                label: "Ordenar",
                featured: "Destacado",
                yearDesc: "Año: Más reciente",
                yearAsc: "Año: Más antiguo",
                titleAsc: "Título: A–Z",
                titleDesc: "Título: Z–A"
            }
        },
        detail: {
            back: "Volver a la Galería",
            about: "Sobre la obra",
            inquire: "Consultar compra",
            dimensions: "Dimensiones",
            by: "de"
        }
    },
    pt: {
        header: {
            title: "Galeria Davis Peñaranda",
            subtitle: "Explore a coleção única de Davis Peñaranda, com obras em óleo, acrílico, aquarela e técnica mista."
        },
        footer: {
            copyright: "Davis Peñaranda. Todos os direitos reservados.",
            selectLanguage: "Selecionar Idioma"
        },
        status: {
            available: "Disponível",
            sold: "Vendido"
        },
        gallery: {
            filters: {
                all: "Todos",
                oleo: "Óleo",
                acrilico: "Acrílico",
                acuarela: "Aquarela",
                tecnicaMixta: "Técnica Mista"
            },
            sort: {
                label: "Ordenar",
                featured: "Destaque",
                yearDesc: "Ano: Mais recente",
                yearAsc: "Ano: Mais antigo",
                titleAsc: "Título: A–Z",
                titleDesc: "Título: Z–A"
            }
        },
        detail: {
            back: "Voltar para Galeria",
            about: "Sobre a obra",
            inquire: "Consultar compra",
            dimensions: "Dimensões",
            by: "de"
        }
    },
    fr: {
        header: {
            title: "Galerie Davis Peñaranda",
            subtitle: "Explorez la collection unique de Davis Peñaranda, comprenant des œuvres à l'huile, à l'acrylique, à l'aquarelle et en technique mixte."
        },
        footer: {
            copyright: "Davis Peñaranda. Tous droits réservés.",
            selectLanguage: "Choisir la langue"
        },
        status: {
            available: "Disponible",
            sold: "Vendu"
        },
        gallery: {
            filters: {
                all: "Tous",
                oleo: "Huile",
                acrilico: "Acrylique",
                acuarela: "Aquarelle",
                tecnicaMixta: "Technique Mixte"
            },
            sort: {
                label: "Trier",
                featured: "En vedette",
                yearDesc: "Année : Plus récent",
                yearAsc: "Année : Plus ancien",
                titleAsc: "Titre : A–Z",
                titleDesc: "Titre : Z–A"
            }
        },
        detail: {
            back: "Retour à la galerie",
            about: "À propos de l'œuvre",
            inquire: "Demande d'achat",
            dimensions: "Dimensions",
            by: "par"
        }
    },
    it: {
        header: {
            title: "Galleria Davis Peñaranda",
            subtitle: "Esplora la collezione unica di Davis Peñaranda, con opere in olio, acrilico, acquerello e tecnica mista."
        },
        footer: {
            copyright: "Davis Peñaranda. Tutti i diritti riservati.",
            selectLanguage: "Seleziona Lingua"
        },
        status: {
            available: "Disponibile",
            sold: "Venduto"
        },
        gallery: {
            filters: {
                all: "Tutti",
                oleo: "Olio",
                acrilico: "Acrilico",
                acuarela: "Acquerello",
                tecnicaMixta: "Tecnica Mista"
            },
            sort: {
                label: "Ordina",
                featured: "In primo piano",
                yearDesc: "Anno: Più recente",
                yearAsc: "Anno: Più vecchio",
                titleAsc: "Titolo: A–Z",
                titleDesc: "Titolo: Z–A"
            }
        },
        detail: {
            back: "Torna alla galleria",
            about: "Sull'opera",
            inquire: "Richiedi acquisto",
            dimensions: "Dimensioni",
            by: "di"
        }
    },
    de: {
        header: {
            title: "Davis Peñaranda Galerie",
            subtitle: "Entdecken Sie die einzigartige Sammlung von Davis Peñaranda mit Werken in Öl, Acryl, Aquarell und Mischtechnik."
        },
        footer: {
            copyright: "Davis Peñaranda. Alle Rechte vorbehalten.",
            selectLanguage: "Sprache auswählen"
        },
        status: {
            available: "Verfügbar",
            sold: "Verkauft"
        },
        gallery: {
            filters: {
                all: "Alle",
                oleo: "Öl",
                acrilico: "Acryl",
                acuarela: "Aquarell",
                tecnicaMixta: "Mischtechnik"
            },
            sort: {
                label: "Sortieren",
                featured: "Vorgestellt",
                yearDesc: "Jahr: Neueste",
                yearAsc: "Jahr: Älteste",
                titleAsc: "Titel: A–Z",
                titleDesc: "Titel: Z–A"
            }
        },
        detail: {
            back: "Zurück zur Galerie",
            about: "Über das Kunstwerk",
            inquire: "Kaufanfrage",
            dimensions: "Maße",
            by: "von"
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
