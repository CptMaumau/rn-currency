import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: 'dark',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { update } = appSlice.actions;

export default appSlice.reducer;
