import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useState } from 'react';
import Thumbnails from 'components/Thumbnails';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { addPokemons } from 'app/pokemonSlice';

function Home() {
  const [listItem, setListItem] = useState<ListItem[]>([]);
  const dispatch = useAppDispatch();

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          setListItem(res.results);
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

  return <Thumbnails listItem={listItem} />;
}

export default Home;
