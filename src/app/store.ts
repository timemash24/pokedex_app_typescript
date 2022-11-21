import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
