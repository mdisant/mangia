import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from '../../types';
import { fetchRecipesFromAPI } from '../../utils/api';

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  const response = await fetchRecipesFromAPI();
  return response;
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch recipes';
      });
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;