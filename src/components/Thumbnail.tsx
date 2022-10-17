import { getPokemonList, ListItem } from 'api/getPokemonList';
import { PokemonList } from 'pages/Home';
import React, { useEffect, useMemo, useState } from 'react';

type PokemonThumbnail = ListItem & {
  id: number;
  img: string;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Thumbnail({ id, name, url }: PokemonList) {
  // const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  // const [thumbnailList, setThumbnailList] = useState<PokemonThumbnail[]>([]);

  // const usePokemonList = async () => {
  //   try {
  //     await getPokemonList().then((res) => {
  //       if (res) {
  //         setPokemonList(res?.results.map((item, index) => ({ id: index + 1, ...item })));
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   usePokemonList();
  // }, []);

  return (
    <div>
      <img src={`${IMG_URL}/${id}.png`} alt={`thumbnail${id}`} />
    </div>
  );
}

export default Thumbnail;
