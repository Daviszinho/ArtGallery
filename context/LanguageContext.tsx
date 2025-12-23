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
        loadMore: string;
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
            subtitle: "I was born in Costa Rica in the eighties, and currently reside in Heredia. By training, I am a computer engineer, a profession that has led me to live for years with logic, structure, and analytical thinking. However, parallel to that rational world, there has always been a constant need for creative exploration.\\n\\nThis gallery is born from that intersection: between technique and sensibility. I do not consider myself an academic artist, but an enthusiast of art in its broadest sense, as a space for play, curiosity, and discovery. At this stage of my life, art is a playful activity, a territory free from productive demands, where the process matters as much as the result.\\n\\nMy interests are diverse and dialogue with each other: chess as an exercise in strategy and contemplation, astronomy as a reminder of our smallness and wonder, and reading as a refuge and inner expansion. These hobbies traverse the works presented here, sometimes obviously and other times subtly.\\n\\nThis gallery does not pretend to offer definitive answers, but to invite paused observation and personal experience. It is an open space, in constant transformation, reflecting an honest search: that of creating for the simple pleasure of doing so."
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
            },
            loadMore: "Load More"
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
            subtitle: "Nací en Costa Rica, en la década de los ochenta, y actualmente resido en Heredia. De formación soy ingeniero en computación, una profesión que me ha llevado a convivir durante años con la lógica, la estructura y el pensamiento analítico. Sin embargo, en paralelo a ese mundo racional, siempre ha existido una necesidad constante de exploración creativa.\\n\\nEsta galería nace desde ese cruce: el de la técnica y la sensibilidad. No me considero un artista académico, sino un entusiasta del arte en su sentido más amplio, como un espacio de juego, curiosidad y descubrimiento. En esta etapa de mi vida, el arte es una actividad lúdica, un territorio libre de exigencias productivas, donde el proceso importa tanto como el resultado.\\n\\nMis intereses son diversos y dialogan entre sí: el ajedrez como ejercicio de estrategia y contemplación, la astronomía como recordatorio de nuestra pequeñez y asombro, y la lectura como refugio y expansión interior. Estas aficiones atraviesan las obras aquí presentadas, a veces de forma evidente y otras de manera sutil.\\n\\nEsta galería no pretende ofrecer respuestas definitivas, sino invitar a la observación pausada y a la experiencia personal. Es un espacio abierto, en constante transformación, que refleja una búsqueda honesta: la de crear por el simple placer de hacerlo."
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
            },
            loadMore: "Cargar Más"
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
            subtitle: "Nasci na Costa Rica, na década de oitenta, e atualmente resido em Heredia. De formação sou engenheiro de computação, uma profissão que me levou a conviver durante anos com a lógica, a estrutura e o pensamento analítico. No entanto, paralelamente a esse mundo racional, sempre existiu uma necessidade constante de exploração criativa.\\n\\nEsta galeria nasce desse cruzamento: o da técnica e da sensibilidade. Não me considero um artista acadêmico, mas um entusiasta da arte em seu sentido mais amplo, como um espaço de jogo, curiosidade e descoberta. Nesta fase da minha vida, a arte é uma atividade lúdica, um território livre de exigências produtivas, onde o processo importa tanto quanto o resultado.\\n\\nMeus interesses são diversos e dialogam entre si: o xadrez como exercício de estratégia e contemplação, a astronomia como lembrete de nossa pequenez e assombro, e a leitura como refúgio e expansão interior. Esses hobbies atravessam as obras aqui apresentadas, às vezes de forma evidente e outras de maneira sutil.\\n\\nEsta galeria não pretende oferecer respostas definitivas, mas convidar à observação pausada e à experiência pessoal. É um espaço aberto, em constante transformação, que reflete uma busca honesta: a de criar pelo simples prazer de fazê-lo."
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
            },
            loadMore: "Carregar Mais"
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
            subtitle: "Je suis né au Costa Rica dans les années quatre-vingt et je réside actuellement à Heredia. De formation, je suis ingénieur en informatique, une profession qui m'a conduit à vivre pendant des années avec la logique, la structure et la pensée analytique. Cependant, parallèlement à ce monde rationnel, il a toujours existé un besoin constant d'exploration créative.\\n\\nCette galerie naît de ce croisement : celui de la technique et de la sensibilité. Je ne me considère pas comme un artiste académique, mais comme un passionné d'art au sens le plus large, comme un espace de jeu, de curiosité et de découverte. À cette étape de ma vie, l'art est une activité ludique, un territoire libre d'exigences productives, où le processus importe autant que le résultat.\\n\\nMes intérêts sont divers et dialoguent entre eux : les échecs comme exercice de stratégie et de contemplation, l'astronomie comme rappel de notre petitesse et émerveillement, et la lecture comme refuge et expansion intérieure. Ces loisirs traversent les œuvres présentées ici, parfois de manière évidente et d'autres fois de manière subtile.\\n\\nCette galerie ne prétend pas offrir de réponses définitives, mais inviter à l'observation posée et à l'expérience personnelle. C'est un espace ouvert, en constante transformation, qui reflète une recherche honnête : celle de créer pour le simple plaisir de le faire."
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
            },
            loadMore: "Charger Plus"
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
            subtitle: "Sono nato in Costa Rica negli anni ottanta e attualmente risiedo a Heredia. Di formazione sono ingegnere informatico, una professione che mi ha portato a convivere per anni con la logica, la struttura e il pensiero analitico. Tuttavia, parallelamente a quel mondo razionale, è sempre esistita una necessità costante di esplorazione creativa.\\n\\nQuesta galleria nasce da quell'incrocio: quello della tecnica e della sensibilità. Non mi considero un artista accademico, ma un appassionato d'arte nel suo senso più ampio, come uno spazio di gioco, curiosità e scoperta. In questa fase della mia vita, l'arte è un'attività ludica, un territorio libero da esigenze produttive, dove il processo conta tanto quanto il risultato.\\n\\nI miei interessi sono diversi e dialogano tra loro: gli scacchi come esercizio di strategia e contemplazione, l'astronomia come promemoria della nostra piccolezza e meraviglia, e la lettura come rifugio ed espansione interiore. Questi hobby attraversano le opere qui presentate, a volte in modo evidente e altre volte in modo sottile.\\n\\nQuesta galleria non pretende di offrire risposte definitive, ma di invitare all'osservazione pausata e all'esperienza personale. È uno spazio aperto, in costante trasformazione, che riflette una ricerca onesta: quella di creare per il semplice piacere di farlo."
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
            },
            loadMore: "Carica Altro"
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
            subtitle: "Ich wurde in den achtziger Jahren in Costa Rica geboren und lebe derzeit in Heredia. Von der Ausbildung her bin ich Computeringenieur, ein Beruf, der mich jahrelang mit Logik, Struktur und analytischem Denken zusammenleben ließ. Parallel zu dieser rationalen Welt gab es jedoch immer ein ständiges Bedürfnis nach kreativer Erkundung.\\n\\nDiese Galerie entsteht aus dieser Kreuzung: der von Technik und Sensibilität. Ich betrachte mich nicht als akademischen Künstler, sondern als Kunstenthusiasten im weitesten Sinne, als Raum für Spiel, Neugier und Entdeckung. In dieser Phase meines Lebens ist Kunst eine spielerische Tätigkeit, ein von produktiven Anforderungen freies Gebiet, in dem der Prozess genauso wichtig ist wie das Ergebnis.\\n\\nMeine Interessen sind vielfältig und stehen im Dialog miteinander: Schach als Übung in Strategie und Kontemplation, Astronomie als Erinnerung an unsere Kleinheit und unser Staunen sowie Lesen als Zuflucht und innere Erweiterung. Diese Hobbys durchziehen die hier präsentierten Werke, manchmal offensichtlich und manchmal subtil.\\n\\nDiese Galerie erhebt nicht den Anspruch, definitive Antworten zu bieten, sondern lädt zur ruhigen Beobachtung und persönlichen Erfahrung ein. Es ist ein offener Raum in ständiger Transformation, der eine ehrliche Suche widerspiegelt: die des Erschaffens aus der einfachen Freude am Tun."
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
            },
            loadMore: "Mehr Laden"
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
