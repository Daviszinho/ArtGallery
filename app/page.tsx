"use client";

import GalleryGrid from '../components/GalleryGrid';
import { artworks } from '../data/artworks';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.header.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.header.subtitle}
          </p>
        </header>

        <GalleryGrid artworks={artworks} />
      </div>
    </main>
  );
}
