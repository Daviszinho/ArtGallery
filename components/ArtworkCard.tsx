import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '../data/artworks';
import StatusBadge from './StatusBadge';

interface ArtworkCardProps {
    artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
    return (
        <Link href={`/artworks/${artwork.id}`} className="group block">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift bg-white dark:bg-gray-800 transition-all duration-300">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-white truncate">{artwork.title}</h3>
                    <span className="mt-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {artwork.category}
                    </span>
                    <span className="mt-2 ml-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                        {artwork.dimensions.width}x{artwork.dimensions.height} cm
                    </span>
                    <StatusBadge status={artwork.status} className="mt-2 ml-2" />
                </div>
            </div>
        </Link>
    );
}
