/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface scoreState {
  score: number;
}
const initialState: scoreState = {
  score: 0,
};

export const gameSlice = createSlice({
  name: 'gameResult',
  initialState,
  reducers: {
    increaseScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { increaseScore, resetScore } = gameSlice.actions;

export const selectScore = (state: RootState) => state.game;

export default gameSlice.reducer;
