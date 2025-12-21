'use client';

import { useState, useMemo } from 'react';
import { Artwork } from '../data/artworks';
import ArtworkCard from './ArtworkCard';
import Filter from './Filter';

interface GalleryGridProps {
    artworks: Artwork[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => {
        const allCategories = artworks.map((artwork) => artwork.category);
        return ['All', ...Array.from(new Set(allCategories))];
    }, [artworks]);

    const filteredArtworks = useMemo(() => {
        if (activeCategory === 'All') {
            return artworks;
        }
        return artworks.filter((artwork) => artwork.category === activeCategory);
    }, [activeCategory, artworks]);

    return (
        <div className="container mx-auto px-4 py-8">
            <Filter
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>

            {filteredArtworks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No artworks found in this category.</p>
                </div>
            )}
        </div>
    );
}
