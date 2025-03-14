import React from 'react';
import { Recipe } from '../types';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Card>
      <h3>{recipe.title}</h3>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
    </Card>
  );
};

export default RecipeCard;