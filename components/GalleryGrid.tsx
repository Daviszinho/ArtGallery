'use client';

import { useState, useMemo } from 'react';
import { Artwork } from '../data/artworks';
import ArtworkCard from './ArtworkCard';
import Filter from './Filter';
import { useLanguage } from '../context/LanguageContext';

interface GalleryGridProps {
    artworks: Artwork[];
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => {
        const allCategories = artworks.map((artwork) => artwork.category);
        const uniqueCategories = ['All', ...Array.from(new Set(allCategories))];

        return uniqueCategories.map(cat => {
            let label = cat;
            if (cat === 'All') label = t.gallery.filters.all;
            else if (cat === 'Oleo') label = t.gallery.filters.oleo;
            else if (cat === 'Acrilico') label = t.gallery.filters.acrilico;
            else if (cat === 'Acuarela') label = t.gallery.filters.acuarela;
            else if (cat === 'Tecnica Mixta') label = t.gallery.filters.tecnicaMixta;

            return { id: cat, label };
        });
    }, [artworks, t]);

    const [sortOption, setSortOption] = useState<'featured' | 'year-desc' | 'year-asc' | 'title-asc' | 'title-desc'>('featured');

    const filteredArtworks = useMemo(() => {
        if (activeCategory === 'All') {
            return artworks;
        }
        return artworks.filter((artwork) => artwork.category === activeCategory);
    }, [activeCategory, artworks]);

    const sortedArtworks = useMemo(() => {
        const arr = [...filteredArtworks];
        arr.sort((a, b) => {
            // Prioritize available
            const availA = a.status === 'available';
            const availB = b.status === 'available';
            if (availA !== availB) return availA ? -1 : 1;

            switch (sortOption) {
                case 'year-desc':
                    return b.year - a.year;
                case 'year-asc':
                    return a.year - b.year;
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                case 'title-desc':
                    return b.title.localeCompare(a.title);
                case 'featured':
                default:
                    return b.year - a.year;
            }
        });
        return arr;
    }, [filteredArtworks, sortOption]);

    return (
        <div className="container mx-auto px-4 py-8">
            <Filter
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className="flex justify-end mb-4">
                <label htmlFor="sort" className="sr-only">{t.gallery.sort.label}</label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as any)}
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm rounded-md p-2"
                >
                    <option value="featured">{t.gallery.sort.featured}</option>
                    <option value="year-desc">{t.gallery.sort.yearDesc}</option>
                    <option value="year-asc">{t.gallery.sort.yearAsc}</option>
                    <option value="title-asc">{t.gallery.sort.titleAsc}</option>
                    <option value="title-desc">{t.gallery.sort.titleDesc}</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>

            {sortedArtworks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No artworks found in this category.</p>
                </div>
            )}
        </div>
    );
}
