"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { recipes, searchRecipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";
import SearchBar from "@/components/SearchBar";

export default function RecipesPage() {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (searchQuery) {
      const results = searchRecipes(searchQuery);
      setFilteredRecipes(results);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [searchQuery]);

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

          <SearchBar />
          <CategoryMenu activeCategory="all" />

          {searchQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Результаты поиска для "{searchQuery}"
              </h2>
              <p className="text-gray-600">
                Найдено {filteredRecipes.length} {filteredRecipes.length === 1 ? 'рецепт' : filteredRecipes.length < 5 ? 'рецепта' : 'рецептов'}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Рецепты не найдены</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
