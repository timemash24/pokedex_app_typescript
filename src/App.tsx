import { getPokemonList, ListItem } from 'api/getPokemonList';
import React, { useEffect, useMemo, useState } from 'react';

type PokemonThumbnail = ListItem & {
  img: string;
};

type PokemonList = ListItem & {
  id: number;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function App() {
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

  const test = useMemo(() => {
    if (pokemonList) {
      return setThumbnailList(pokemonList.map((pokemon) => ({ ...pokemon, img: `${IMG_URL}${pokemon.id}.png` })));
    }
    return [];
  }, [pokemonList]);

  useEffect(() => {
    usePokemonList();
    console.log(test);
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <li>{thumbnailList[0].img}</li>
      <ul>
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
