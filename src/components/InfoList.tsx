import { Pokemon } from 'api/getPokemon';
import { PokemonSpecies } from 'api/getPokemonSpecies';
import React, { useMemo } from 'react';
import { TextDisplay } from './styles/Card';
import { InfoListContainer, TypeList } from './styles/Info';

type Props = {
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;
};

const color = {
  Normal: '#bdbdaf',
  Poison: '#a95c9f',
  Psychic: '#f461af',
  Grass: '#8bd54f',
  Ground: '#ebc856',
  Ice: '#97f1ff',
  Fire: '#fa5543',
  Rock: '#ccbc71',
  Dragon: '#8574ff',
  Water: '#56adf3',
  Bug: '#c4d11f',
  Dark: '#7c5f4c',
  Fighting: '#894c3b',
  Ghost: '#736fcd',
  Steel: '#c4c2db',
  Flying: '#79a3ff',
  Electric: '#fee33a',
  Fairy: '#f9adff',
};

function InfoList({ pokemon, pokemonSpecies }: Props) {
  // const typeColor = useMemo(()=> pokemon.type, [])
  return (
    <InfoListContainer>
      <TypeList>
        {pokemon?.types.map((type) => (
          <TextDisplay key={type.slot} small type={type.type.name}>
            <li>{type.type.name}</li>
          </TextDisplay>
          // <li key={type.slot}>{type.type.name}</li>
        ))}
      </TypeList>
      <div style={{ display: 'flex' }}>
        <ul>
          {pokemonSpecies?.genera.map((g) =>
            g.language.name === 'en' ? <li key={g.language.name}>{g.genus}</li> : null,
          )}
          {pokemon?.abilities.map((abil) => (
            <li key={abil.ability.name}>{abil.ability.name}</li>
          ))}
          <li>{pokemon?.height}0cm</li>
          <li>{pokemon?.weight}kg</li>
        </ul>
        <ul>
          {pokemon?.stats.map((stat) => (
            <li key={stat.stat.url}>
              {stat.stat.name}:{stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {pokemonSpecies?.flavor_text_entries.map((text) =>
          text.language.name === 'en' && text.version.name === 'pearl' ? (
            <li key={text.language.name}>{text.flavor_text}</li>
          ) : null,
        )}
      </ul>
    </InfoListContainer>
  );
}

export default InfoList;
