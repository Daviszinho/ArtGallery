"use client";

import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-sans">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium font-sans text-gray-700 dark:text-gray-300">
                                {t.footer.selectLanguage}:
                            </span>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
