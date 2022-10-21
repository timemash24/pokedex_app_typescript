import { Pokemon } from 'api/getPokemon';
import React from 'react';
import { ImageContainer } from './styles/Info';

type Props = {
  isBaby: boolean;
  prevEvolImg: string;
  pokemon: Pokemon;
};

function InfoImg({ isBaby, prevEvolImg, pokemon }: Props) {
  return (
    <ImageContainer isBaby={isBaby}>
      <img src={pokemon?.sprites.front_default} alt="front" />
      <img src={pokemon?.sprites.back_default} alt="back" />
      {!isBaby && prevEvolImg !== '' ? <img src={prevEvolImg} alt="evolves from" /> : null}
    </ImageContainer>
  );
}

export default InfoImg;
