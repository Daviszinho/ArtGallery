"use client";

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} {t.footer.copyright}
                    </p>

                    <div className="flex items-center gap-2">
                        <label htmlFor="language-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t.footer.selectLanguage}:
                        </label>
                        <select
                            id="language-select"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'pt')}
                            className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="pt">Português</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
