import { Language } from '../context/LanguageContext';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  category: 'Oleo' | 'Acrilico' | 'Acuarela' | 'Tecnica Mixta';
  imageUrl: string;
  description: Record<Language, string>;
  year: number;
  dimensions: {
    height: number;
    width: number;
  };
  status: 'available' | 'sold';
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Abstracto I',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/abstracto1.jpg',
    description: {
      en: 'Abstract composition exploring complex shapes and textures.',
      es: 'Composición abstracta explorando formas y texturas complejas.',
      pt: 'Composição abstrata explorando formas e texturas complexas.',
      fr: 'Composition abstraite explorant des formes et des textures complexes.',
      it: 'Composizione astratta che esplora forme e trame complesse.',
      de: 'Abstrakte Komposition, die komplexe Formen und Texturen erforscht.'
    },
    year: 2019,
    dimensions: { height: 60, width: 60 },
    status: 'sold',
  },
  {
    id: '2',
    title: 'Abstracto II',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/abstracto2.jpg',
    description: {
      en: 'Second work in the abstract series, focused on dynamic contrast and flow exploration.',
      es: 'Segunda obra de la serie abstracta, enfocada en el contraste dinámico, exploracion de flujos.',
      pt: 'Segunda obra da série abstrata, focada no contraste dinâmico e exploração de fluxos.',
      fr: 'Deuxième œuvre de la série abstraite, axée sur le contraste dynamique et l\'exploration des flux.',
      it: 'Seconda opera della serie astratta, focalizzata sul contrasto dinamico e l\'esplorazione dei flussi.',
      de: 'Zweites Werk der abstrakten Serie, konzentriert auf dynamischen Kontrast und Flusserforschung.'
    },
    year: 2021,
    dimensions: { height: 70, width: 100 },
    status: 'available',
  },
  {
    id: '3',
    title: 'Abstracto III',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/abstracto3.jpg',
    description: {
      en: 'Chromatic evolution in the abstract series, with vibrant tones and a search for depth.',
      es: 'Evolución cromática en la serie abstracta, con tonos vibrantes y busqueda de la profundidad.',
      pt: 'Evolução cromática na série abstrata, com tons vibrantes e busca pela profundidade.',
      fr: 'Évolution chromatique dans la série abstraite, avec des tons vibrants et une recherche de profondeur.',
      it: 'Evoluzione cromatica nella serie astratta, con toni vibranti e ricerca della profondità.',
      de: 'Chromatische Entwicklung in der abstrakten Serie, mit lebendigen Tönen und Suche nach Tiefe.'
    },
    year: 2024,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '4',
    title: 'Abstracto IV',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/abstracto4.jpg',
    description: {
      en: 'Culmination of the series with a minimalist and powerful expression.',
      es: 'Culminación de la serie con una expresión minimalista y potente.',
      pt: 'Culminação da série com uma expressão minimalista e potente.',
      fr: 'Culmination de la série avec une expression minimaliste et puissante.',
      it: 'Culmine della serie con un\'espressione minimalista e potente.',
      de: 'Höhepunkt der Serie mit einem minimalistischen und kraftvollen Ausdruck.'
    },
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '5',
    title: 'Acuarela',
    artist: 'Davis Peñaranda',
    category: 'Acuarela',
    imageUrl: '/images/acuarela.jpg',
    description: {
      en: 'Soft and ethereal work created with traditional watercolor technique.',
      es: 'Obra suave y etérea realizada con técnica de acuarela tradicional.',
      pt: 'Obra suave e etérea realizada com técnica de aquarela tradicional.',
      fr: 'Œuvre douce et éthérée réalisée avec la technique traditionnelle de l\'aquarelle.',
      it: 'Opera morbida ed eterea realizzata con tecnica ad acquerello tradizionale.',
      de: 'Weiches und ätherisches Werk, erstellt mit traditioneller Aquarelltechnik.'
    },
    year: 2025,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '6',
    title: 'Aficiones',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/aficiones.jpg',
    description: {
      en: 'Oil representation of personal passions and hobbies.',
      es: 'Representación al óleo de pasiones y pasatiempos personales.',
      pt: 'Representação a óleo de paixões e passatempos pessoais.',
      fr: 'Représentation à l\'huile de passions et loisirs personnels.',
      it: 'Rappresentazione a olio di passioni e hobby personali.',
      de: 'Öldarstellung persönlicher Leidenschaften und Hobbys.'
    },
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '7',
    title: 'Africa',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/africa.jpg',
    description: {
      en: 'Homage to the landscapes and warm colors of the African continent.',
      es: 'Homenaje a los paisajes y colores cálidos del continente africano.',
      pt: 'Homenagem às paisagens e cores quentes do continente africano.',
      fr: 'Hommage aux paysages et aux couleurs chaudes du continent africain.',
      it: 'Omaggio ai paesaggi e ai colori caldi del continente africano.',
      de: 'Hommage an die Landschaften und warmen Farben des afrikanischen Kontinents.'
    },
    year: 2021,
    dimensions: { height: 40, width: 40 },
    status: 'available',
  },
  {
    id: '8',
    title: 'Flores',
    artist: 'Davis Peñaranda',
    category: 'Acrilico',
    imageUrl: '/images/flores.jpg',
    description: {
      en: 'Modern floral still life with intense acrylic colors.',
      es: 'Bodegón floral moderno con colores acrílicos intensos.',
      pt: 'Natureza morta floral moderna com cores acrílicas intensas.',
      fr: 'Nature morte florale moderne aux couleurs acryliques intenses.',
      it: 'Natura morta floreale moderna con colori acrilici intensi.',
      de: 'Modernes Blumenstilleben mit intensiven Acrylfarben.'
    },
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '9',
    title: 'Hongos',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/hongos.jpg',
    description: {
      en: 'Detailed botanical study of wild mushrooms.',
      es: 'Estudio botánico detallado de hongos silvestres.',
      pt: 'Estudo botânico detalhado de cogumelos silvestres.',
      fr: 'Étude botanique détaillée de champignons sauvages.',
      it: 'Studio botanico dettagliato di funghi selvatici.',
      de: 'Detaillierte botanische Studie über wilde Pilze.'
    },
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '10',
    title: 'Noche',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/noche.jpg',
    description: {
      en: 'Night landscape capturing the stillness and mystery of darkness.',
      es: 'Paisaje nocturno que captura la quietud y el misterio de la oscuridad.',
      pt: 'Paisagem noturna que captura a quietude e o mistério da escuridão.',
      fr: 'Paysage nocturne capturant le calme et le mystère de l\'obscurité.',
      it: 'Paesaggio notturno che cattura la quiete e il mistero dell\'oscurità.',
      de: 'Nachtlandschaft, die die Stille und das Geheimnis der Dunkelheit einfängt.'
    },
    year: 2020,
    dimensions: { height: 40, width: 40 },
    status: 'sold',
  },
  {
    id: '11',
    title: 'Noche II',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/noche2.jpg',
    description: {
      en: 'Continuation of the night study, focusing on moonlight.',
      es: 'Continuación del estudio nocturno, enfocándose en la luz de luna.',
      pt: 'Continuação do estudo noturno, focando na luz do luar.',
      fr: 'Continuation de l\'étude nocturne, se concentrant sur le clair de lunt.',
      it: 'Continuazione dello studio notturno, concentrandosi sulla luce lunare.',
      de: 'Fortsetzung der Nachtstudie mit Fokus auf Mondlicht.'
    },
    year: 2020,
    dimensions: { height: 40, width: 40 },
    status: 'sold',
  },
  {
    id: '12',
    title: 'Paisaje Cubista',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/paisajecubista.jpg',
    description: {
      en: 'Modern reinterpretation of landscape through geometric shapes.',
      es: 'Reinterpretación moderna del paisaje a través de formas geométricas.',
      pt: 'Reinterpretação moderna da paisagem através de formas geométricas.',
      fr: 'Réinterprétation moderne du paysage à travers des formes géométriques.',
      it: 'Reinterpretazione moderna del paesaggio attraverso forme geometriche.',
      de: 'Moderne Neuinterpretation der Landschaft durch geometrische Formen.'
    },
    year: 2024,
    dimensions: { height: 70, width: 100 },
    status: 'sold',
  },
  {
    id: '13',
    title: 'Barco',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/barco.jpg',
    description: {
      en: 'The essence of a boat paused to capture calm and serenity.',
      es: 'La esencia de un barco en pausa para capturar la calma y la serenidad.',
      pt: 'A essência de um barco em pausa para capturar calma e serenidade.',
      fr: 'L\'essence d\'un bateau en pause pour capturer le calme et la sérénité.',
      it: 'L\'essenza di una barca in pausa per catturare calma e serenità.',
      de: 'Die Essenz eines Bootes, das pausiert, um Ruhe und Gelassenheit einzufangen.'
    },
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '14',
    title: 'Dots 1',
    artist: 'Davis Peñaranda',
    category: 'Acrilico',
    imageUrl: '/images/dots1.jpg',
    description: {
      en: 'Exploration of color through dots.',
      es: 'Exploración del color a través de puntos.',
      pt: 'Exploração da cor através de pontos.',
      fr: 'Exploration de la couleur à travers des points.',
      it: 'Esplorazione del colore attraverso i punti.',
      de: 'Erforschung der Farbe durch Punkte.'
    },
    year: 2024,
    dimensions: { height: 70, width: 100 },
    status: 'available',
  },
  {
    id: '15',
    title: 'Dots 2',
    artist: 'Davis Peñaranda',
    category: 'Acrilico',
    imageUrl: '/images/dots2.jpg',
    description: {
      en: 'Exploration of color, contrast and harmony through dots.',
      es: 'Exploración del color, contraste y armonía a través de puntos.',
      pt: 'Exploração da cor, contraste e harmonia através de pontos.',
      fr: 'Exploration de la couleur, du contraste et de l\'harmonie à travers des points.',
      it: 'Esplorazione del colore, contrasto e armonia attraverso i punti.',
      de: 'Erforschung von Farbe, Kontrast und Harmonie durch Punkte.'
    },
    year: 2024,
    dimensions: { height: 70, width: 100 },
    status: 'available',
  },
  {
    id: '16',
    title: 'Flores amarillas',
    artist: 'Davis Peñaranda',
    category: 'Oleo',
    imageUrl: '/images/floresamarillas.jpg',
    description: {
      en: 'Tree with yellow bark.',
      es: 'Arbol de corteza amarilla.',
      pt: 'Árvore de casca amarela.',
      fr: 'Arbre à écorce jaune.',
      it: 'Albero con corteccia gialla.',
      de: 'Baum mit gelber Rinde.'
    },
    year: 2020,
    dimensions: { height: 70, width: 100 },
    status: 'available',
  },
  {
    id: '17',
    title: 'Noche y luna',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/noche3.jpg',
    description: {
      en: 'Exploration of night and moon through mixed media with bright colors.',
      es: 'Exploracion de la noche y la luna a través de la tecnica mixta con colores brillantes .',
      pt: 'Exploração da noite e da lua através de técnica mista com cores brilhantes.',
      fr: 'Exploration de la nuit et de la lune à travers une technique mixte aux couleurs vives.',
      it: 'Esplorazione della notte e della luna attraverso tecnica mista con colori brillanti.',
      de: 'Erforschung von Nacht und Mond durch Mischtechnik mit leuchtenden Farben.'
    },
    year: 2025,
    dimensions: { height: 70, width: 100 },
    status: 'sold',
  },
  {
    id: '18',
    title: 'Lado oscuro de la luna',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/luna1.jpg',
    description: {
      es: 'Interpretacion artistica del lado oscuro de la luna.',
      pt: 'Interpretacao artistica do lado oscuro da lua.',
      fr: 'Interpretation artistique du côté sombre de la lune.',
      it: 'Interpretazione artistica del lato scuro della luna.',
      de: 'Interpretation artistisch des dunklen Seitenes der Mond.',
      en: 'Artistic interpretation of the dark side of the moon.'
    },
    year: 2023,
    dimensions: { height: 50, width: 50 },
    status: 'sold',
  },
  {
    id: '19',
    title: 'Lado oscuro de la luna roja',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/luna2.jpg',
    description: {
      en: 'Artistic interpretation of the dark side of the moon.',
      es: 'Interpretacion artistica del lado oscuro de la luna con veladuras rojas.',
      pt: 'Interpretacao artistica do lado oscuro da lua.',
      fr: 'Interpretation artistique du côté sombre de la lune.',
      it: 'Interpretazione artistica del lato scuro della luna.',
      de: 'Interpretation artistisch des dunklen Seitenes der Mond.',
    },
    year: 2024,
    dimensions: { height: 50, width: 50 },
    status: 'sold',
  },
  {
    id: '20',
    title: 'Luna',
    artist: 'Davis Peñaranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/luna3.jpg',
    description: {
      en: 'Artistic interpretation of the moon.',
      es: 'Interpretacion artistica de la luna.',
      pt: 'Interpretacao artistica da lua.',
      fr: 'Interpretation artistique de la lune.',
      it: 'Interpretazione artistica della luna.',
      de: 'Interpretation artistisch der Mond.'
    },
    year: 2024,
    dimensions: { height: 50, width: 50 },
    status: 'sold',
  }

];


