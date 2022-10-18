import { PokemonList } from 'pages/Home';
import React, { useMemo } from 'react';
import Thumbnail from 'components/Thumbnail';
import { ListItem } from 'api/getPokemonList';
import { CardContainer } from './styles/Card';

type Props = {
  //   pokemonList: PokemonList[];
  listItem: ListItem[];
};

function Thumbnails({ listItem }: Props) {
  const pokemonList = useMemo(() => {
    if (listItem) {
      return listItem.map((item, index) => ({ id: index + 1, ...item }));
    }
    return [];
  }, [listItem]);

  return (
    <CardContainer>
      {pokemonList?.map((pokemon) => (
        <li key={pokemon.name}>
          <Thumbnail id={pokemon.id} name={pokemon.name} url={pokemon.url} />
        </li>
      ))}
    </CardContainer>
  );
}

export default Thumbnails;
