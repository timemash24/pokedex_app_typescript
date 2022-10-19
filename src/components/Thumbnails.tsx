import { PokemonList } from 'pages/Home';
import React, { useMemo } from 'react';
import Thumbnail from 'components/Thumbnail';
import { ListItem } from 'api/getPokemonList';
import { Circle, Container, NameDisplay } from './styles/Card';

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
    <Container>
      <div style={{ width: '100%', display: 'flex' }}>
        <Circle color="blue" big />
        <Circle color="red" big={false} />
        <Circle color="yellow" big={false} />
        <Circle color="green" big={false} />
        <NameDisplay>
          <span>Click Pokemon to view details</span>
        </NameDisplay>
      </div>
      {pokemonList?.map((pokemon) => (
        <li key={pokemon.name}>
          <Thumbnail id={pokemon.id} name={pokemon.name} url={pokemon.url} />
        </li>
      ))}
    </Container>
  );
}

export default Thumbnails;
