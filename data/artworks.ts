export interface Artwork {
  id: string;
  title: string;
  artist: string;
  category: 'Oleo' | 'Acrilico' | 'Acuarela' | 'Tecnica Mixta';
  imageUrl: string;
  description: string;
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
    artist: 'Davis Pe&nacute;aranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/abstracto1.jpg',
    description: 'Composición abstracta explorando formas y texturas complejas.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '2',
    title: 'Abstracto II',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/abstracto2.jpg',
    description: 'Segunda obra de la serie abstracta, enfocada en el contraste dinámico.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '3',
    title: 'Abstracto III',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/abstracto3.jpg',
    description: 'Evolución cromática en la serie abstracta, con tonos vibrantes.',
    year: 2024,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '4',
    title: 'Abstracto IV',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Tecnica Mixta',
    imageUrl: '/images/abstracto4.jpg',
    description: 'Culminación de la serie con una expresión minimalista y potente.',
    year: 2024,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '5',
    title: 'Acuarela',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Acuarela',
    imageUrl: '/images/acuarela.jpg',
    description: 'Obra suave y etérea realizada con técnica de acuarela tradicional.',
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '6',
    title: 'Aficiones',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Oleo',
    imageUrl: '/images/aficiones.jpg',
    description: 'Representación al óleo de pasiones y pasatiempos personales.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '7',
    title: 'Africa',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Oleo',
    imageUrl: '/images/africa.jpg',
    description: 'Homenaje a los paisajes y colores cálidos del continente africano.',
    year: 2021,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '8',
    title: 'Flores',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Acrilico',
    imageUrl: '/images/flores.jpg',
    description: 'Bodegón floral moderno con colores acrílicos intensos.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '9',
    title: 'Hongos',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Acuarela',
    imageUrl: '/images/hongos.jpg',
    description: 'Estudio botánico detallado de hongos silvestres.',
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '10',
    title: 'Noche',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Oleo',
    imageUrl: '/images/noche.jpg',
    description: 'Paisaje nocturno que captura la quietud y el misterio de la oscuridad.',
    year: 2020,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '11',
    title: 'Noche II',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Oleo',
    imageUrl: '/images/noche2.jpg',
    description: 'Continuación del estudio nocturno, enfocándose en la luz de luna.',
    year: 2020,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '12',
    title: 'Paisaje Cubista',
    artist: 'Davis Pe&nacute;aranda',
    category: 'Acrilico',
    imageUrl: '/images/paisajecubista.jpg',
    description: 'Reinterpretación moderna del paisaje a través de formas geométricas.',
    year: 2024,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
];


