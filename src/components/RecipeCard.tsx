import Link from "next/link";
import { Recipe } from "@/lib/data";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {recipe.title}
          </h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
            {recipe.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{recipe.ingredients.length}</span> ingredients • 
            <span className="font-medium ml-1">{recipe.steps.length}</span> steps
          </div>
          
          <Link
            href={`/recipes/${recipe.slug}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Подробнее
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
