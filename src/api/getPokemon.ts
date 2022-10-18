import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

interface Info {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  back_default: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
  stats: Stats[];
  weight: number;
}

export const getPokemon = async (id: number) => {
  try {
    const { data } = await axios.get<Pokemon>(`${BASE_URL}/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
