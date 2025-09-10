import Link from "next/link";
import { categories } from "@/lib/data";

interface CategoryMenuProps {
  activeCategory?: string;
}

export default function CategoryMenu({ activeCategory = "all" }: CategoryMenuProps) {
  const categoryLabels: Record<string, string> = {
    all: "Все рецепты",
    dessert: "Десерты",
    soup: "Супы",
    "main-course": "Основные блюда",
    salad: "Салаты"
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Категории</h2>
      <nav className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "all" ? "/recipes" : `/recipes/category/${category}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {categoryLabels[category] || category}
          </Link>
        ))}
      </nav>
    </div>
  );
}
