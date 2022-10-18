import { getPokemonList, ListItem } from 'api/getPokemonList';
import { PokemonList } from 'pages/Home';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type PokemonThumbnail = ListItem & {
  id: number;
  img: string;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Thumbnail({ id, name, url }: PokemonList) {
  return (
    <div>
      <Link to={`/pokemon/${id}`}>
        <img src={`${IMG_URL}/${id}.png`} alt={`thumbnail${id}`} />
      </Link>
    </div>
  );
}

export default Thumbnail;
