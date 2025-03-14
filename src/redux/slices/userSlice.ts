import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: 'Guest', preferences: { diet: '', allergies: [] } } as User,
  },
  reducers: {
    updatePreferences: (state, action) => {
      state.user.preferences = action.payload;
    },
  },
});

export const { updatePreferences } = userSlice.actions;
export default userSlice.reducer;