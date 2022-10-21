import { Pokemon } from 'api/getPokemon';
import { PokemonSpecies } from 'api/getPokemonSpecies';
import React from 'react';

type Props = {
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;
};

function InfoList({ pokemon, pokemonSpecies }: Props) {
  return (
    <section>
      <h1>{pokemon?.name}</h1>
      {pokemonSpecies?.flavor_text_entries.map((text) =>
        text.language.name === 'en' && text.version.name === 'pearl' ? (
          <li key={text.language.name}>{text.flavor_text}</li>
        ) : null,
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
  );
}

export default InfoList;
