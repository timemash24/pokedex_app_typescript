import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useMemo, useState } from 'react';
import Thumbnail from 'components/Thumbnail';

type PokemonThumbnail = ListItem & {
  img: string;
};

export type PokemonList = ListItem & {
  id: number;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [thumbnailList, setThumbnailList] = useState<PokemonThumbnail[]>([]);

  const usePokemonList = async () => {
    try {
      await getPokemonList().then((res) => {
        if (res) {
          setPokemonList(res?.results.map((item, index) => ({ id: index + 1, ...item })));
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
      <ul>
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            <Thumbnail id={pokemon.id} name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
