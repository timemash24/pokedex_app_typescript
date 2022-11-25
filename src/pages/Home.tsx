import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useState } from 'react';
import Thumbnails from 'components/Thumbnails';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';
import { useQuery, useQueryClient } from 'react-query';

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

  // useEffect(() => {
  //   console.log(data);
  //   if (pokemonList.length) return;
  //   usePokemonList();
  // }, [pokemonList]);

  const { data, isLoading, isError, error } = useQuery('pokemonList', getPokemonList, {
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data) => {
      console.log(data);
      if (data) dispatch(addPokemons(data.results));
    },
    onError: (e: any) => {
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as any).message}</span>;
  }
  return <Thumbnails />;
}

export default Home;
