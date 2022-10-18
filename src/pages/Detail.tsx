import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Pokemon, getPokemon, Type, Ability, Sprites, Stats } from 'api/getPokemon';

function Detail() {
  const { id } = useParams();
  const numId = useMemo(() => Number(id), [id]);
  const [pokemonName, setPokemonName] = useState<string>();
  const [pokemonSprites, setPokemonSprites] = useState<Sprites>();
  const [pokemonAbil, setPokemonAbil] = useState<Ability[]>();
  const [pokemonType, setPokemonType] = useState<Type[]>();
  const [pokemonStats, setPokemonStats] = useState<Stats[]>();

  const usePokemon = async () => {
    try {
      await getPokemon(numId).then((res) => {
        if (res) {
          setPokemonName(res.name);
          setPokemonSprites(res.sprites);
          setPokemonAbil(res.abilities);
          setPokemonType(res.types);
          setPokemonStats(res.stats);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usePokemon();
  }, [id]);

  return (
    <>
      {numId > 1 ? <Link to={`/pokemon/${numId - 1}`}>{`<`}</Link> : null}
      <h1>{pokemonName}</h1>
      <ul>
        <section>
          <li>
            <img src={pokemonSprites?.front_default} alt="front" />
          </li>
          <li>
            <img src={pokemonSprites?.back_default} alt="back" />
          </li>
        </section>
        <section>
          <ul>
            {pokemonAbil?.map((abil) => (
              <li key={abil.ability.name}>{abil.ability.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonType?.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
          <ul>
            {pokemonStats?.map((stat) => (
              <li key={stat.stat.url}>
                {stat.stat.name}:{stat.base_stat}
              </li>
            ))}
          </ul>
        </section>
      </ul>
      {numId < 151 ? <Link to={`/pokemon/${numId + 1}`}>{`>`}</Link> : null}
    </>
  );
}

export default Detail;
