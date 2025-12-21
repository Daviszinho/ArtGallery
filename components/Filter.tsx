interface FilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function Filter({ categories, activeCategory, onSelectCategory }: FilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                            ? 'bg-blue-600 text-white shadow-md scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
