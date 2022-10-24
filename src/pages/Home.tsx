import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useState } from 'react';
import Thumbnails from 'components/Thumbnails';

export type PokemonList = ListItem & {
  id: number;
};

function Home() {
  const [listItem, setListItem] = useState<ListItem[]>([]);

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          setListItem(res.results);
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
