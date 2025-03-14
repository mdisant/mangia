import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';
import RecipeCard from '../components/RecipeCard';
import FilterBar from '../components/FilterBar';
import styled from 'styled-components';
import { RootState } from '../redux/store';
import { Recipe } from '../types';

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes() as any); // Type assertion to bypass thunk typing for simplicity
  }, [dispatch]);

  return (
    <div>
      <h1>Mangia Home</h1>
      <FilterBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <FeedContainer>
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </FeedContainer>
    </div>
  );
};

export default Home;