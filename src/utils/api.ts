import { Recipe } from '../types';

export const fetchRecipesFromAPI = async (): Promise<Recipe[]> => {
  // Mock data (replace with real API later)
  return [
    { id: 1, title: 'Spaghetti', ingredients: ['Pasta', 'Tomato'], steps: ['Boil water', 'Cook pasta'] },
    { id: 2, title: 'Salad', ingredients: ['Lettuce', 'Dressing'], steps: ['Wash lettuce', 'Mix'] },
  ];
};

export const generateRecipe = async (preferences: { diet: string; ingredients: string }): Promise<Partial<Recipe>> => {
  // Mock AI generation
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `AI ${preferences.diet} Dish`,
    description: `A delicious ${preferences.diet} recipe`,
    imageUrl: 'https://via.placeholder.com/300',
    ingredients: preferences.ingredients.split(',').map(ingredient => ({
      name: ingredient.trim(),
      amount: 1,
      unit: 'piece'
    })),
    instructions: ['Prep ingredients', 'Cook', 'Serve'],
    cookingTime: 30,
    servings: 4,
    difficulty: 'medium' as const,
    cuisine: preferences.diet,
    tags: [preferences.diet],
    isAIGenerated: true
  };
};