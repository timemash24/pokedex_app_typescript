import { getPokemonList, ListItem } from 'api/getPokemonList';
import { PokemonList } from 'pages/Home';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './styles/Card';

type PokemonThumbnail = ListItem & {
  id: number;
  img: string;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Thumbnail({ id, name, url }: PokemonList) {
  return (
    <Card>
      <Link to={`/pokemon/${id}`}>
        <span>{name}</span>
        <img src={`${IMG_URL}/${id}.png`} alt={`thumbnail${id}`} />
      </Link>
    </Card>
  );
}

export default Thumbnail;
