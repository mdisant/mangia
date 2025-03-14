import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;