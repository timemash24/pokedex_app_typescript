import { ListItem } from 'api/getPokemonList';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './styles/Card';

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
export type PokemonList = ListItem & {
  id: number;
};

function Thumbnail({ id, name }: PokemonList) {
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
