"use client";

import { useState, useEffect } from 'react';
import GalleryGrid from './GalleryGrid';
import { artworks } from '../data/artworks';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryPageClient() {
  const { t } = useLanguage();
  const [loadedArtworks, setLoadedArtworks] = useState<typeof artworks>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate deferred loading
    const timer = setTimeout(() => {
      setLoadedArtworks(artworks);
      setLoading(false);
    }, 100); // Small delay to demonstrate

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading gallery...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 tracking-tight animate-fade-in-down">
            {t.header.title}
          </h1>
          <div className="text-lg font-sans text-gray-700 dark:text-gray-300 max-w-3xl mx-auto space-y-4 text-justify leading-relaxed animate-fade-in-up animation-delay-200">
            {t.header.subtitle.split(/\\n\\n|\n\n/).map((paragraph, index) => (
              <p key={index} className="font-light">{paragraph}</p>
            ))}
          </div>
        </header>

        <GalleryGrid artworks={loadedArtworks} />
      </div>
    </main>
  );
}

