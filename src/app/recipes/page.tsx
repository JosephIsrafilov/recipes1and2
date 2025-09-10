import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Рецепты
            </h1>
            <p className="text-lg text-gray-600">
              Откройте для себя вкусные рецепты для любого случая
            </p>
          </header>

          <CategoryMenu activeCategory="all" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>

          {recipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Рецепты не найдены</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
