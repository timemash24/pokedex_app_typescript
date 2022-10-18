import axios from 'axios';

const BASE_URL = `https://pokeapi.co/api/v2/pokemon-species`;

interface Color {
  name: string;
  url: string;
}

interface EvolutionChain {
  url: string;
}

export interface EvolvesFromSpecies {
  name: string;
  url: string;
}

interface FlavorText {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

interface GeneraInfo {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpecies {
  color: Color;
  evolution_chain: EvolutionChain;
  evolves_from_species: EvolvesFromSpecies;
  flavor_text_entries: FlavorText[];
  genera: GeneraInfo[];
}

export const getPokemonSpecies = async (id: number) => {
  try {
    const { data } = await axios.get<PokemonSpecies>(`${BASE_URL}/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
