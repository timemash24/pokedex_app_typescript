import { PokemonList } from 'pages/Home';
import React from 'react';
import Thumbnail from 'components/Thumbnail';

type Props = {
  pokemonList: PokemonList[];
};

function Thumbnails({ pokemonList }: Props) {
  return (
    <ul>
      {pokemonList?.map((pokemon) => (
        <li key={pokemon.name}>
          {pokemon.name}
          <Thumbnail id={pokemon.id} name={pokemon.name} url={pokemon.url} />
        </li>
      ))}
    </ul>
  );
}

export default Thumbnails;
