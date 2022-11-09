import React from 'react';
import Thumbnail from 'components/Thumbnail';
import { useAppSelector } from 'app/hooks';
import { Container, InfoMsg } from './styles/Main';
import PokedexHead from './PokedexHead';

function Thumbnails() {
  const pokemonList = useAppSelector((state) => state.pokemons.pokemonList);
  const searchedPokemons = useAppSelector((state) => state.pokemons.searchedPokemons);
  const isSearching = useAppSelector((state) => state.pokemons.isSearching);

  return (
    <>
      <PokedexHead text="Search Pokemon by name." isInput />
      {!isSearching && (
        <Container>
          {pokemonList?.map((pokemon) => (
            <li key={pokemon.name}>
              <Thumbnail id={pokemon.id} name={pokemon.name} />
            </li>
          ))}
        </Container>
      )}

      {isSearching && searchedPokemons.length ? (
        <Container>
          {searchedPokemons?.map((pokemon) => (
            <li key={pokemon.name}>
              <Thumbnail id={pokemon.id} name={pokemon.name} />
            </li>
          ))}
        </Container>
      ) : null}
      {isSearching && !searchedPokemons.length && <InfoMsg>No pokemon found 🤔</InfoMsg>}
    </>
  );
}

export default Thumbnails;
