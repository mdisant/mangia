import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Recipe } from '../types';
import styled from 'styled-components';

interface RootState {
  recipes: {
    recipes: Recipe[];
  };
}

const PlannerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const GroceryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MealPlanning: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const [meals, setMeals] = useState<string[]>(Array(7).fill(''));
  const [groceryList, setGroceryList] = useState<string[]>([]);

  const addMeal = (day: number, meal: string) => {
    const newMeals = [...meals];
    newMeals[day] = meal;
    setMeals(newMeals);
    const selectedRecipe = recipes.find((r: Recipe) => r.title === meal);
    if (selectedRecipe) {
      setGroceryList([...groceryList, ...selectedRecipe.ingredients]);
    }
  };

  return (
    <div>
      <h1>Meal Planning</h1>
      <PlannerGrid>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day}>
            <h3>{day}</h3>
            <select
              value={meals[index]}
              onChange={(e) => addMeal(index, e.target.value)}
            >
              <option value="">Select Recipe</option>
              {recipes.map((recipe: Recipe) => (
                <option key={recipe.id} value={recipe.title}>
                  {recipe.title}
                </option>
              ))}
            </select>
          </div>
        ))}
      </PlannerGrid>
      <h2>Grocery List</h2>
      <GroceryList>
        {groceryList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </GroceryList>
    </div>
  );
};

export default MealPlanning;