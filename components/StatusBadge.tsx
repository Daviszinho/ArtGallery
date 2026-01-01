"use client";

import { useLanguage } from '../context/LanguageContext';

interface StatusBadgeProps {
    status: 'available' | 'sold';
    className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
    const { t } = useLanguage();

    const isSold = status === 'sold';
    const baseClasses = "inline-block px-3 py-1 text-sm font-semibold rounded-full";
    const statusClasses = isSold
        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";

    return (
        <span className={`${baseClasses} ${statusClasses} ${className}`}>
            {isSold ? t.status.sold : t.status.available}
        </span>
    );
}
