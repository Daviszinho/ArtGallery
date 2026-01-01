"use client";

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ShareButtonsProps {
    artworkTitle: string;
    artworkId: string;
    artworkImage?: string;
    className?: string;
}

export default function ShareButtons({ artworkTitle, artworkId, artworkImage, className = '' }: ShareButtonsProps) {
    const { t, language } = useLanguage();
    const [copied, setCopied] = useState(false);

    // URL base del sitio - actualizar si es diferente
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://daviszinhoartgallery.vercel.app';
    const artworkUrl = `${baseUrl}/artworks/${artworkId}`;

    // Texto para compartir
    const shareText = `${artworkTitle} - ${t.share.checkOut}`;
    const shareTextEncoded = encodeURIComponent(shareText);
    const urlEncoded = encodeURIComponent(artworkUrl);

    // URLs de compartir para cada red social
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`,
        twitter: `https://twitter.com/intent/tweet?text=${shareTextEncoded}&url=${urlEncoded}`,
        whatsapp: `https://wa.me/?text=${shareTextEncoded}%20${urlEncoded}`,
        email: `mailto:?subject=${encodeURIComponent(artworkTitle)}&body=${encodeURIComponent(`${shareText}\n\n${artworkUrl}`)}`,
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(artworkUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    };

    const ShareButton = ({
        href,
        label,
        icon,
        bgColor,
        hoverColor
    }: {
        href: string;
        label: string;
        icon: React.ReactNode;
        bgColor: string;
        hoverColor: string;
    }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full ${bgColor} ${hoverColor} text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg`}
            aria-label={label}
            title={label}
        >
            {icon}
        </a>
    );

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.share.share}:
                </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <ShareButton
                    href={shareLinks.facebook}
                    label={t.share.facebook}
                    bgColor="bg-[#1877F2]"
                    hoverColor="hover:bg-[#166FE5]"
                    icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    }
                />
                <ShareButton
                    href={shareLinks.twitter}
                    label="X"
                    bgColor="bg-black"
                    hoverColor="hover:bg-gray-800"
                    icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    }
                />
                <ShareButton
                    href={shareLinks.whatsapp}
                    label={t.share.whatsapp}
                    bgColor="bg-[#25D366]"
                    hoverColor="hover:bg-[#20BA5A]"
                    icon={
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    }
                />
                <ShareButton
                    href={shareLinks.email}
                    label={t.share.email}
                    bgColor="bg-gray-600"
                    hoverColor="hover:bg-gray-700"
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    }
                />
                <button
                    onClick={handleCopyLink}
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg ${copied
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gray-600 hover:bg-gray-700'
                        } text-white`}
                    aria-label={t.share.copyLink}
                    title={t.share.copyLink}
                >
                    {copied ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                </button>
            </div>
            {copied && (
                <p className="text-sm text-green-600 dark:text-green-400 animate-fade-in">
                    {t.share.linkCopied}
                </p>
            )}
        </div>
    );
}

