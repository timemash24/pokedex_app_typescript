import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useState } from 'react';
import Thumbnails from 'components/Thumbnails';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';

function Home() {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          dispatch(addPokemons(res.results));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pokemonList.length) return;
    usePokemonList();
  }, [pokemonList]);

  return <Thumbnails />;
}

export default Home;
