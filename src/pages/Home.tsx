import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useMemo, useState } from 'react';
import Thumbnail from 'components/Thumbnail';
import { getPokemonSpecies, PokemonSpecies } from 'api/getPokemonSpecies';
import Thumbnails from 'components/Thumbnails';

type PokemonThumbnail = ListItem & {
  img: string;
};

export type PokemonList = ListItem & {
  id: number;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Home() {
  // const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [thumbnailList, setThumbnailList] = useState<PokemonThumbnail[]>([]);
  const [listItem, setListItem] = useState<ListItem[]>([]);

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          // setPokemonList(res?.results.map((item, index) => ({ id: index + 1, ...item })));
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

  return (
    <div>
      <h1>Home</h1>
      <Thumbnails listItem={listItem} />
    </div>
  );
}

export default Home;
