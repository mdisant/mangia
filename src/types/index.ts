export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  preferences: UserPreferences;
  achievements: Achievement[];
  isPremium: boolean;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
  cuisinePreferences: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  tags: string[];
  authorId: string;
  createdAt: Date;
  likes: number;
  isAIGenerated: boolean;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface MealPlan {
  id: string;
  userId: string;
  weekStartDate: Date;
  meals: {
    [key: string]: {
      breakfast?: Recipe;
      lunch?: Recipe;
      dinner?: Recipe;
      snacks?: Recipe[];
    };
  };
}

export interface GroceryList {
  id: string;
  userId: string;
  items: GroceryItem[];
  createdAt: Date;
  isCompleted: boolean;
}

export interface GroceryItem {
  ingredient: Ingredient;
  isChecked: boolean;
  recipeId: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress?: number;
  requiredProgress?: number;
} 