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
    title: 'Sunset Boulevard',
    artist: 'Davis Penaranda',
    category: 'Oleo',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c42?q=80&w=800&auto=format&fit=crop',
    description: 'Un vibrante óleo que captura los matices cálidos de un atardecer urbano, mezclando trazos abstractos con iluminación realista.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '2',
    title: 'Modern Solitude',
    artist: 'Davis Penaranda',
    category: 'Tecnica Mixta',
    imageUrl: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800&auto=format&fit=crop',
    description: 'Una composición en técnica mixta que explora temas de aislamiento en la arquitectura moderna.',
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '3',
    title: 'Fluid Dynamics',
    artist: 'Davis Penaranda',
    category: 'Tecnica Mixta',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop',
    description: 'Obra en técnica mixta simulando el movimiento caótico pero armonioso de partículas líquidas.',
    year: 2024,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '4',
    title: 'Bronze Guardian',
    artist: 'Davis Penaranda',
    category: 'Tecnica Mixta',
    imageUrl: 'https://images.unsplash.com/photo-1553658078-96b605f47994?q=80&w=800&auto=format&fit=crop',
    description: 'Representación contemporánea que fusiona texturas clásicas con abstracción moderna.',
    year: 2021,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '5',
    title: 'Neon Dreams',
    artist: 'Davis Penaranda',
    category: 'Acrilico',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    description: 'Pintura acrílica inspirada en el cyberpunk, con luces de neón y paisajes urbanos futuristas.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
  {
    id: '6',
    title: 'Silent Forest',
    artist: 'Davis Penaranda',
    category: 'Acuarela',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
    description: 'Una serena acuarela de un bosque brumoso al amanecer, evocando paz y misterio.',
    year: 2020,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '7',
    title: 'Urban Rhythm',
    artist: 'Davis Penaranda',
    category: 'Tecnica Mixta',
    imageUrl: 'https://images.unsplash.com/photo-1449824913929-2b3a3e54da79?q=80&w=800&auto=format&fit=crop',
    description: 'Obra experimental capturando el tráfico de la ciudad como ríos de luz.',
    year: 2023,
    dimensions: { height: 60, width: 40 },
    status: 'available',
  },
  {
    id: '8',
    title: 'Abstract Thoughts',
    artist: 'Davis Penaranda',
    category: 'Acrilico',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop',
    description: 'Pintura acrílica expresiva que utiliza colores atrevidos y textura para representar emociones complejas.',
    year: 2022,
    dimensions: { height: 60, width: 40 },
    status: 'sold',
  },
];


