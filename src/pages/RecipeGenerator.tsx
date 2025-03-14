import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../redux/slices/recipeSlice';
import { updatePreferences } from '../redux/slices/userSlice';
import { generateRecipe } from '../utils/api';
import { RootState } from '../redux/store';
import { Recipe } from '../types';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 20px 0;
`;

const RecipeGenerator: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [formData, setFormData] = useState({ diet: user.preferences.diet, ingredients: '' });
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null); // Explicitly typed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updatePreferences({ diet: formData.diet, allergies: [] }));
    const recipe = await generateRecipe(formData);
    const completeRecipe: Recipe = {
      ...recipe,
      id: recipe.id || Math.random().toString(36).substr(2, 9),
      title: recipe.title || '',
      description: recipe.description || '',
      imageUrl: recipe.imageUrl || '',
      ingredients: recipe.ingredients || [],
      instructions: recipe.instructions || [],
      cookingTime: recipe.cookingTime || 30,
      servings: recipe.servings || 4,
      difficulty: recipe.difficulty || 'medium',
      cuisine: recipe.cuisine || '',
      tags: recipe.tags || [],
      authorId: user?.id || 'anonymous',
      createdAt: new Date(),
      likes: 0,
      isAIGenerated: true
    };
    setGeneratedRecipe(completeRecipe);
    dispatch(addRecipe(completeRecipe));
  };

  return (
    <div>
      <h1>Recipe Generator</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Diet (e.g., Vegan)"
          value={formData.diet}
          onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients (e.g., Tomato, Pasta)"
          value={formData.ingredients}
          onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
        />
        <button type="submit">Generate</button>
      </Form>
      {generatedRecipe && (
        <div>
          <h2>{generatedRecipe.title}</h2>
          <p>Ingredients: {generatedRecipe.ingredients.join(', ')}</p>
          <ul>
            {generatedRecipe.steps.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;