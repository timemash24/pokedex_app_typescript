import { Pokemon } from 'api/getPokemon';
import { PokemonSpecies } from 'api/getPokemonSpecies';
import React from 'react';
import { TextDisplay } from './styles/Card';
import { InfoListContainer, MainInfoList, TypeList, Description } from './styles/Info';

type Props = {
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;
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
      <MainInfoList>
        <ul>
          {pokemonSpecies?.genera.map((g) =>
            g.language.name === 'en' ? <li key={g.language.name}>{g.genus}</li> : null,
          )}
          <li>abilities</li>
          {pokemon?.abilities.map((abil) => (
            <li key={abil.ability.name}>
              <span>{abil.ability.name}</span>
            </li>
          ))}
          <li>
            height<span>{pokemon?.height}0cm</span>
          </li>
          <li>
            weight<span>{pokemon?.weight}kg</span>
          </li>
        </ul>
        <ul>
          {pokemon?.stats.map((stat) => (
            <li key={stat.stat.url}>
              {stat.stat.name}
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </MainInfoList>
      <Description>
        {pokemonSpecies?.flavor_text_entries.map((text) =>
          text.language.name === 'en' && text.version.name === 'pearl' ? (
            <li key={text.language.name}>{text.flavor_text}</li>
          ) : null,
        )}
      </Description>
    </InfoListContainer>
  );
}

export default InfoList;
