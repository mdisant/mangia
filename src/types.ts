export interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    steps: string[];
  }
  
  export interface User {
    name: string;
    preferences: { diet: string; allergies: string[] };
  }