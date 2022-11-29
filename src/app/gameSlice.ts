import { PayloadAction } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface scoreState {
  score: Array<boolean>;
  quiz: Array<string>;
}
const initialState: scoreState = {
  score: [],
  quiz: [],
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
    addQuiz: (state, action: PayloadAction<string>) => {
      state.quiz.push(action.payload);
    },
    resetQuiz: (state) => {
      state.quiz = [];
    },
  },
});

export const { addScore, resetScore, addQuiz, resetQuiz } = gameSlice.actions;

export default gameSlice.reducer;
