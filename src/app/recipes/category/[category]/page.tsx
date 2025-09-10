import { notFound } from "next/navigation";
import { getRecipesByCategory, categories } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  if (!categories.includes(category)) {
    notFound();
  }

  const recipes = getRecipesByCategory(category);

  const categoryLabels: Record<string, string> = {
    dessert: "Десерты",
    soup: "Супы",
    "main-course": "Основные блюда",
    salad: "Салаты"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {categoryLabels[category] || category}
            </h1>
            <p className="text-lg text-gray-600">
              {recipes.length} {recipes.length === 1 ? 'рецепт' : recipes.length < 5 ? 'рецепта' : 'рецептов'} в категории
            </p>
          </header>

          <CategoryMenu activeCategory={category} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>

          {recipes.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">
                В этой категории пока нет рецептов
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
