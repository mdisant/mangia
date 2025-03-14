import { Recipe } from '../types';

export const fetchRecipesFromAPI = async (): Promise<Recipe[]> => {
  // Mock data (replace with real API later)
  return [
    { id: 1, title: 'Spaghetti', ingredients: ['Pasta', 'Tomato'], steps: ['Boil water', 'Cook pasta'] },
    { id: 2, title: 'Salad', ingredients: ['Lettuce', 'Dressing'], steps: ['Wash lettuce', 'Mix'] },
  ];
};

export const generateRecipe = async (preferences: { diet: string; ingredients: string }): Promise<Recipe> => {
  // Mock AI generation
  return {
    id: Date.now(),
    title: `AI ${preferences.diet} Dish`,
    ingredients: preferences.ingredients.split(','),
    steps: ['Prep ingredients', 'Cook', 'Serve'],
  };
};