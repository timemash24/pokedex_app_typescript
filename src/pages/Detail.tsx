import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretLeft, faCaretRight, faS } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPokemon, Pokemon } from 'api/getPokemon';
import { getPokemonSpecies, PokemonSpecies } from 'api/getPokemonSpecies';
import InfoImg from 'components/InfoImg';
import InfoList from 'components/InfoList';
import PokedexHead from 'components/PokedexHead';
import { Container } from 'components/styles/Main';
import { InfoContainer, PageController } from 'components/styles/Info';
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQueries } from 'react-query';

library.add(faS, faCaretLeft, faCaretRight);

const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

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

  const query = useQueries([
    {
      queryKey: ['pokemon', numId],
      queryFn: () => getPokemon(numId),
    },
    {
      queryKey: ['pokemonSpecies', numId],
      queryFn: () => getPokemonSpecies(numId),
    },
  ]);

  useEffect(() => {
    usePokemon();
    usePokemonSpecies();

    // console.log(query);
    // const [pokemonData, pokemonSpeciesData] = query;
    // if (pokemonData.data) setPokemon(pokemonData.data);
    // if (pokemonSpeciesData.data) {
    //   setPokemonSpecies(pokemonSpeciesData.data);
    //   if (pokemonSpeciesData.data.evolves_from_species?.url)
    //     getPrevEvolSprite(pokemonSpeciesData.data.evolves_from_species.url);
    //   else setIsBaby(true);
    // }
  }, [id]);

  return (
    <>
      {pokemon && <PokedexHead text={`${id}. ${pokemon?.name}`} isInput={false} />}
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
    </>
  );
}

export default Detail;
