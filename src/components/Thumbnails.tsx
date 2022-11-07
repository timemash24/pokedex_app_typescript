import React, { useMemo } from 'react';
import Thumbnail, { PokemonList } from 'components/Thumbnail';
import { useAppSelector } from 'app/hooks';
import { ListItem } from 'api/getPokemonList';
import { Container, InfoMsg } from './styles/Card';
import PokedexHead from './PokedexHead';

function Thumbnails() {
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  // id 순으로 정렬 후 뿌리기
  const sortedPokemonList = useMemo<PokemonList[]>(
    () => pokemonList.slice().sort((a, b) => a.id - b.id),
    [pokemonList],
  );

  return (
    <>
      <PokedexHead text="Search Pokemon by name." isInput />
      <Container>
        {sortedPokemonList.length ? (
          sortedPokemonList?.map((pokemon) => (
            <li key={pokemon.name}>
              <Thumbnail id={pokemon.id} name={pokemon.name} />
            </li>
          ))
        ) : (
          <InfoMsg>Nothing found 🤔</InfoMsg>
        )}
      </Container>
    </>
  );
}

export default Thumbnails;
