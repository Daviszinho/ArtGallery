"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '../data/artworks';
import StatusBadge from './StatusBadge';
import { useLanguage } from '../context/LanguageContext';

interface ArtworkDetailProps {
    artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
    const { t, language } = useLanguage();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t.detail.back}
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="relative h-[50vh] lg:h-auto w-full bg-gray-100 dark:bg-gray-700">
                            <Image
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                fill
                                className="object-contain p-4"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-2">
                                <span className="inline-block rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 text-sm font-semibold">
                                    {artwork.category}
                                </span>
                                <span className="ml-2 inline-block rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm font-semibold">
                                    {artwork.dimensions.width}x{artwork.dimensions.height} cm
                                </span>
                                <StatusBadge status={artwork.status} className="ml-2" />
                            </div>

                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {artwork.title}
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                                {t.detail.by} {artwork.artist}, {artwork.year}
                            </p>

                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="text-lg font-semibold mb-2">{t.detail.about}</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {artwork.description[language]}
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                {artwork.status === 'available' && (
                                    <a
                                        href={`mailto:davis.penaranda@gmail.com?subject=Solicitud de obra: ${artwork.title}&body=Estoy interesado en la obra '${artwork.title}' de ${artwork.artist}.`}
                                        className="inline-block w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                                    >
                                        {t.detail.inquire}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
