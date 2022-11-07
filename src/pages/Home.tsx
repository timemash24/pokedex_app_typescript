import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useState } from 'react';
import Thumbnails from 'components/Thumbnails';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useAppDispatch();

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
    usePokemonList();
  }, []);

  return <Thumbnails />;
}

export default Home;
