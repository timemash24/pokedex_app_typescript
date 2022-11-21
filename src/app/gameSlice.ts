import { PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface scoreState {
  score: Array<boolean>;
}
const initialState: scoreState = {
  score: [],
};

export const gameSlice = createSlice({
  name: 'gameResult',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<boolean>) => {
      state.score.push(action.payload);
    },
    resetScore: (state) => {
      state.score = [];
    },
  },
});

export const { addScore, resetScore } = gameSlice.actions;

export const selectScore = (state: RootState) => state.game;

export default gameSlice.reducer;
