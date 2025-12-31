interface FilterProps {
    categories: { id: string; label: string }[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function Filter({ categories, activeCategory, onSelectCategory }: FilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in animation-delay-300">
            {categories.map((category, index) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg scale-105 hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                        }`}
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
