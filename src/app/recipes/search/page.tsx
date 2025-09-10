"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchRecipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const [recipes, setRecipes] = useState(searchRecipes(""));
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const results = searchRecipes(query);
    setRecipes(results);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Поиск рецептов
            </h1>
            <p className="text-lg text-gray-600">
              Найдите идеальный рецепт для любого случая
            </p>
          </header>

          <SearchBar />

          {query && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Результаты поиска для "{query}"
              </h2>
              <p className="text-gray-600">
                Найдено {recipes.length} {recipes.length === 1 ? 'рецепт' : recipes.length < 5 ? 'рецепта' : 'рецептов'}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>

          {query && recipes.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ничего не найдено
              </h3>
              <p className="text-gray-600 mb-4">
                Попробуйте изменить поисковый запрос или использовать другие ключевые слова
              </p>
              <div className="space-x-4">
                <button
                  onClick={() => window.location.href = "/recipes/search"}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Очистить поиск
                </button>
                <button
                  onClick={() => window.location.href = "/recipes"}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Все рецепты
                </button>
              </div>
            </div>
          )}

          {!query && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Введите поисковый запрос
              </h3>
              <p className="text-gray-600">
                Используйте поле поиска выше, чтобы найти рецепты по названию или описанию
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
