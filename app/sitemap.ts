import { MetadataRoute } from 'next';
import { artworks } from '../data/artworks';

const baseUrl = 'https://daviszinhoartgallery.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const artworkPages = artworks.map((artwork) => ({
        url: `${baseUrl}/artworks/${artwork.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...artworkPages,
    ];
}

