import { Artwork } from '../data/artworks';

interface ArtworkSchemaProps {
    artwork: Artwork;
}

export default function ArtworkSchema({ artwork }: ArtworkSchemaProps) {
    const baseUrl = 'https://daviszinhoartgallery.vercel.app';
    const imageUrl = `${baseUrl}${artwork.imageUrl}`;
    const artworkUrl = `${baseUrl}/artworks/${artwork.id}`;

    // Mapear categorías a términos de Schema.org
    const categoryMap: Record<string, string> = {
        'Oleo': 'Painting',
        'Acrilico': 'Painting',
        'Acuarela': 'Painting',
        'Tecnica Mixta': 'MixedMedia',
    };

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'VisualArtwork',
        name: artwork.title,
        creator: {
            '@type': 'Person',
            name: artwork.artist,
        },
        image: imageUrl,
        url: artworkUrl,
        artMedium: categoryMap[artwork.category] || 'Painting',
        artform: artwork.category,
        width: {
            '@type': 'Distance',
            name: `${artwork.dimensions.width} cm`,
        },
        height: {
            '@type': 'Distance',
            name: `${artwork.dimensions.height} cm`,
        },
        dateCreated: artwork.year.toString(),
        description: artwork.description.es || artwork.description.en || '',
        offers: artwork.status === 'available' ? {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
        } : {
            '@type': 'Offer',
            availability: 'https://schema.org/SoldOut',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

