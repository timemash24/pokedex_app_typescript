import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from 'api/getPokemonList';
import { RootState } from './store';

interface PokemonInfo {
  id: number;
  name: string;
}

interface PokemonListState {
  pokemonList: PokemonInfo[];
}

const initialState: PokemonListState = {
  pokemonList: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemonsToShow',
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<ListItem[]>) => {
      action.payload.forEach((newPokemon, idx) => {
        if (!state.pokemonList.find((pokemon) => pokemon.name === newPokemon.name)) {
          state.pokemonList.push({ id: idx + 1, name: newPokemon.name });
        }
      });
    },
    filterPokemons: (state, action: PayloadAction<string>) => {
      return {
        pokemonList: state.pokemonList.filter((pokemon) => pokemon.name === action.payload) || [],
      };
    },
  },
});

export const { addPokemons, filterPokemons } = pokemonSlice.actions;

export const selectPokemonList = (state: RootState) => state.pokemons;

export default pokemonSlice.reducer;
