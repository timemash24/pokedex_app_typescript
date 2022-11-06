import React, { useMemo } from 'react';
import Thumbnail from 'components/Thumbnail';
import { useAppSelector } from 'app/hooks';
import { ListItem } from 'api/getPokemonList';
import { Container } from './styles/Card';
import PokedexHead from './PokedexHead';

type Props = {
  listItem: ListItem[];
};

function Thumbnails({ listItem }: Props) {
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);

  // const pokemonList = useMemo(() => {
  //   if (listItem) {
  //     return listItem.map((item, index) => ({ id: index + 1, ...item }));
  //   }
  //   return [];
  // }, [listItem]);

  return (
    <>
      <PokedexHead text="Type Pokemon name to search." isInput />
      <Container>
        {pokemonList?.map((pokemon) => (
          <li key={pokemon.name}>
            <Thumbnail id={pokemon.id} name={pokemon.name} />
          </li>
        ))}
      </Container>
    </>
  );
}

export default Thumbnails;
