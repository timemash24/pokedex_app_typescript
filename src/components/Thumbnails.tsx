import { PokemonList } from 'pages/Home';
import React, { useMemo } from 'react';
import Thumbnail from 'components/Thumbnail';
import { ListItem } from 'api/getPokemonList';
import { Circle, Container } from './styles/Card';
import PokedexHead from './PokedexHead';

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
    <>
      <PokedexHead text="Click Pokemon to view details." />
      <Container>
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.name}>
            <Thumbnail id={pokemon.id} name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </Container>
    </>
  );
}

export default Thumbnails;
