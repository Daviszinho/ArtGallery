'use client';

import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { Artwork } from '../data/artworks';
import { useLanguage } from '../context/LanguageContext';

const ArtworkCard = lazy(() => import('./ArtworkCard'));
const Filter = lazy(() => import('./Filter'));

interface GalleryGridProps {
    artworks: Artwork[];
}

const ITEMS_PER_PAGE = 12;

export default function GalleryGrid({ artworks }: GalleryGridProps) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

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

    // Reset visible count when category changes
    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [activeCategory]);

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

    const visibleArtworks = sortedArtworks.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />}>
                <Filter
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
            </Suspense>

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
                {visibleArtworks.map((artwork) => (
                    <Suspense key={artwork.id} fallback={<div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
                        <ArtworkCard artwork={artwork} />
                    </Suspense>
                ))}
            </div>

            {visibleCount < sortedArtworks.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                        {t.gallery.loadMore}
                    </button>
                </div>
            )}

            {sortedArtworks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400 text-lg">No artworks found in this category.</p>
                </div>
            )}
        </div>
    );
}
