import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { artworks } from '../../../data/artworks';
import ArtworkDetail from '../../../components/ArtworkDetail';

interface PageProps {
    params: Promise<{ id: string }>;
}

const baseUrl = 'https://daviszinhoartgallery.vercel.app';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const artwork = artworks.find((a) => a.id === resolvedParams.id);

    if (!artwork) {
        return {
            title: 'Obra no encontrada',
        };
    }

    const artworkUrl = `${baseUrl}/artworks/${artwork.id}`;
    const imageUrl = `${baseUrl}${artwork.imageUrl}`;
    const description = artwork.description.es || artwork.description.en || `Obra de arte ${artwork.title} por ${artwork.artist}`;

    return {
        title: `${artwork.title} - ${artwork.artist} | Davis Peñaranda Art Gallery`,
        description: description,
        keywords: [
            artwork.title,
            artwork.artist,
            artwork.category,
            'arte',
            'pintura',
            'galería',
            'Davis Peñaranda',
            artwork.year.toString(),
        ],
        authors: [{ name: artwork.artist }],
        openGraph: {
            title: `${artwork.title} - ${artwork.artist}`,
            description: description,
            url: artworkUrl,
            siteName: 'Davis Peñaranda Art Gallery',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: artwork.title,
                },
            ],
            locale: 'es_ES',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${artwork.title} - ${artwork.artist}`,
            description: description,
            images: [imageUrl],
        },
        alternates: {
            canonical: artworkUrl,
        },
        other: {
            'artwork:category': artwork.category,
            'artwork:year': artwork.year.toString(),
            'artwork:dimensions': `${artwork.dimensions.width}x${artwork.dimensions.height} cm`,
            'artwork:status': artwork.status,
        },
    };
}

export async function generateStaticParams() {
    return artworks.map((artwork) => ({
        id: artwork.id,
    }));
}

export default async function ArtworkPage({ params }: PageProps) {
    const resolvedParams = await params;
    const artwork = artworks.find((a) => a.id === resolvedParams.id);

    if (!artwork) {
        notFound();
    }

    return <ArtworkDetail artwork={artwork} />;
}
