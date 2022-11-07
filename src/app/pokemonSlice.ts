/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from 'api/getPokemonList';
import { RootState } from './store';

interface PokemonInfo {
  id: number;
  name: string;
}

interface PokemonListState {
  pokemonList: PokemonInfo[];
  searchedPokemons: PokemonInfo[];
  isSearching: boolean;
}

const initialState: PokemonListState = {
  pokemonList: [],
  searchedPokemons: [],
  isSearching: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemonsToShow',
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<ListItem[]>) => {
      state.isSearching = false;
      action.payload.forEach((newPokemon, idx) => {
        if (!state.pokemonList.find((pokemon) => pokemon.name === newPokemon.name)) {
          state.pokemonList.push({ id: idx + 1, name: newPokemon.name });
        }
      });
    },
    filterPokemons: (state, action: PayloadAction<string>) => {
      state.isSearching = true;
      state.searchedPokemons = state.pokemonList.filter((pokemon) => pokemon.name === action.payload) || [];
    },
    resetPokemons: (state) => {
      return {
        pokemonList: [...state.pokemonList],
        searchedPokemons: [],
        isSearching: false,
      };
    },
  },
});

export const { addPokemons, filterPokemons, resetPokemons } = pokemonSlice.actions;

export const selectPokemonList = (state: RootState) => state.pokemons;

export default pokemonSlice.reducer;
