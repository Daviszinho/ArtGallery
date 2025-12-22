import { notFound } from 'next/navigation';
import { artworks } from '../../../data/artworks';
import ArtworkDetail from '../../../components/ArtworkDetail';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ArtworkPage({ params }: PageProps) {
    const resolvedParams = await params;
    const artwork = artworks.find((a) => a.id === resolvedParams.id);

    if (!artwork) {
        notFound();
    }

    return <ArtworkDetail artwork={artwork} />;
}
