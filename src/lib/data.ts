export interface Recipe {
  title: string;
  slug: string;
  category: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    title: "Chocolate Cake",
    slug: "chocolate-cake",
    category: "dessert",
    description: "Rich and moist chocolate cake perfect for any celebration",
    ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup cocoa powder", "3 eggs", "1/2 cup butter", "1 cup milk", "1 tsp vanilla extract", "1 tsp baking powder"],
    steps: [
      "Preheat oven to 350°F (175°C)",
      "Mix dry ingredients in a large bowl",
      "Beat eggs and butter in another bowl",
      "Combine wet and dry ingredients",
      "Add milk and vanilla extract",
      "Pour into greased cake pan",
      "Bake for 30-35 minutes",
      "Let cool before serving"
    ]
  },
  {
    title: "Tomato Soup",
    slug: "tomato-soup",
    category: "soup",
    description: "Simple and delicious tomato soup perfect for cold days",
    ingredients: ["6 large tomatoes", "2 cloves garlic", "1 onion", "2 tbsp olive oil", "1 tsp basil", "Salt and pepper to taste", "1 cup vegetable broth"],
    steps: [
      "Chop tomatoes, garlic, and onion",
      "Heat olive oil in a large pot",
      "Sauté garlic and onion until fragrant",
      "Add tomatoes and cook for 10 minutes",
      "Add vegetable broth and bring to boil",
      "Blend ingredients until smooth",
      "Season with basil, salt, and pepper",
      "Serve hot with bread"
    ]
  },
  {
    title: "Pasta Carbonara",
    slug: "pasta-carbonara",
    category: "main-course",
    description: "Classic Italian pasta with eggs, cheese, and pancetta",
    ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g parmesan cheese", "2 cloves garlic", "Black pepper", "Salt"],
    steps: [
      "Cook spaghetti according to package directions",
      "Cut pancetta into small pieces",
      "Fry pancetta until crispy",
      "Beat eggs with grated parmesan",
      "Drain pasta and mix with pancetta",
      "Remove from heat and add egg mixture",
      "Toss quickly to create creamy sauce",
      "Serve immediately with black pepper"
    ]
  },
  {
    title: "Caesar Salad",
    slug: "caesar-salad",
    category: "salad",
    description: "Fresh and crispy Caesar salad with homemade dressing",
    ingredients: ["1 head romaine lettuce", "1/2 cup parmesan cheese", "1/2 cup croutons", "2 anchovy fillets", "1 clove garlic", "1/4 cup olive oil", "1 lemon", "1 egg yolk"],
    steps: [
      "Wash and chop romaine lettuce",
      "Make dressing with anchovies, garlic, and egg yolk",
      "Whisk in olive oil and lemon juice",
      "Toss lettuce with dressing",
      "Add croutons and parmesan cheese",
      "Serve immediately"
    ]
  },
  {
    title: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    category: "dessert",
    description: "Soft and chewy chocolate chip cookies",
    ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 tsp salt", "1 cup butter", "3/4 cup sugar", "3/4 cup brown sugar", "2 eggs", "2 tsp vanilla", "2 cups chocolate chips"],
    steps: [
      "Preheat oven to 375°F (190°C)",
      "Mix flour, baking soda, and salt",
      "Cream butter and sugars",
      "Beat in eggs and vanilla",
      "Gradually add flour mixture",
      "Stir in chocolate chips",
      "Drop rounded tablespoons onto ungreased cookie sheet",
      "Bake 9-11 minutes until golden brown"
    ]
  },
  {
    title: "Chicken Noodle Soup",
    slug: "chicken-noodle-soup",
    category: "soup",
    description: "Comforting homemade chicken noodle soup",
    ingredients: ["1 whole chicken", "8 cups chicken broth", "2 cups egg noodles", "2 carrots", "2 celery stalks", "1 onion", "2 cloves garlic", "Salt and pepper", "Fresh herbs"],
    steps: [
      "Simmer chicken in broth until cooked",
      "Remove chicken and shred meat",
      "Chop vegetables into small pieces",
      "Add vegetables to broth and cook until tender",
      "Add noodles and cook until al dente",
      "Return shredded chicken to pot",
      "Season with salt, pepper, and herbs",
      "Serve hot"
    ]
  }
];

export const categories = ["all", "dessert", "soup", "main-course", "salad"];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === "all") {
    return recipes;
  }
  return recipes.filter(recipe => recipe.category === category);
}

export function searchRecipes(query: string): Recipe[] {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(lowercaseQuery) ||
    recipe.description.toLowerCase().includes(lowercaseQuery)
  );
}
