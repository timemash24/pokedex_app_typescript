import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Pokemon, getPokemon, Type, Ability, Sprites, Stats } from 'api/getPokemon';
import { PokemonSpecies, getPokemonSpecies } from 'api/getPokemonSpecies';

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
    <>
      {numId > 1 ? <Link to={`/pokemon/${numId - 1}`}>{`<`}</Link> : null}
      <h1>{pokemon?.name}</h1>
      <div>
        <section>
          <img src={pokemon?.sprites.front_default} alt="front" />
          <img src={pokemon?.sprites.back_default} alt="back" />
          {!isBaby && prevEvolImg !== '' ? <img src={prevEvolImg} alt="evolves from" /> : null}
        </section>
        <section>
          {pokemonSpecies?.flavor_text_entries.map((text) =>
            text.language.name === 'en' && text.version.name === 'pearl' ? <li>{text.flavor_text}</li> : null,
          )}
          <p>{pokemonSpecies?.flavor_text_entries[0].flavor_text}</p>
          <ul>
            {pokemonSpecies?.genera.map((g) =>
              g.language.name === 'en' ? <li key={g.language.name}>{g.genus}</li> : null,
            )}

            <li>{pokemon?.weight}kg</li>
          </ul>
          <ul>
            {pokemon?.abilities.map((abil) => (
              <li key={abil.ability.name}>{abil.ability.name}</li>
            ))}
          </ul>
          <ul>
            {pokemon?.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
          <ul>
            {pokemon?.stats.map((stat) => (
              <li key={stat.stat.url}>
                {stat.stat.name}:{stat.base_stat}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {numId < 151 ? <Link to={`/pokemon/${numId + 1}`}>{`>`}</Link> : null}
    </>
  );
}

export default Detail;
