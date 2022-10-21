import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight, faS } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPokemon, Pokemon } from 'api/getPokemon';
import { getPokemonSpecies, PokemonSpecies } from 'api/getPokemonSpecies';
import InfoImg from 'components/InfoImg';
import InfoList from 'components/InfoList';
import { Container } from 'components/styles/Card';
import { InfoContainer, PageController } from 'components/styles/Info';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

library.add(faS, faCaretLeft, faCaretRight);

type PokemonInfo = {
  id: number;
  name: string;
  img: string;
};

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const EGG_IMG_URL =
  'https://static.wikia.nocookie.net/pokemon/images/8/80/%EC%95%8C_%EA%B3%B5%EC%8B%9D%EC%9D%BC%EB%9F%AC.png/revision/latest/scale-to-width-down/180?cb=20110306061646&path-prefix=ko';

function Detail() {
  const { id } = useParams();
  const numId = useMemo(() => Number(id), [id]);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [prevEvolImg, setPrevEvolImg] = useState<string>('');
  const [isBaby, setIsBaby] = useState(true);

  const usePokemon = async () => {
    try {
      await getPokemon(numId).then((res) => {
        if (res) {
          setPokemon(res);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const usePokemonSpecies = async () => {
    try {
      await getPokemonSpecies(numId).then((res) => {
        if (res) {
          setPokemonSpecies(res);
          if (res.evolves_from_species?.url) getPrevEvolSprite(res.evolves_from_species.url);
          else setIsBaby(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPrevEvolSprite = (url: string) => {
    const arr = url.split('/');
    const PrevId = arr[arr.length - 2];
    setPrevEvolImg(`${IMG_URL}/${PrevId}.png`);
    setIsBaby(false);
  };

  useEffect(() => {
    usePokemon();
    usePokemonSpecies();
  }, [id]);

  return (
    <Container>
      <PageController>
        {numId > 1 ? (
          <Link to={`/pokemon/${numId - 1}`}>
            <FontAwesomeIcon icon={faCaretLeft} style={{ fontSize: 30 }} />
          </Link>
        ) : null}
        {numId < 151 ? (
          <Link to={`/pokemon/${numId + 1}`}>
            <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: 30 }} />
          </Link>
        ) : null}
      </PageController>
      <InfoContainer>
        {pokemon && <InfoImg isBaby={isBaby} prevEvolImg={prevEvolImg} pokemon={pokemon} />}
        {pokemon && pokemonSpecies && <InfoList pokemon={pokemon} pokemonSpecies={pokemonSpecies} />}
      </InfoContainer>
    </Container>
  );
}

export default Detail;
