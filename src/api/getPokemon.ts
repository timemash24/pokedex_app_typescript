import axios, { AxiosRequestConfig } from 'axios';

interface Info {
  name: string;
  url: string;
}

interface Sprites {
  frontDefault: string;
  backDefault: string;
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Response {
  name: string;
  id: number;
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
}

export const getPokemon = async (id: number) => {
  try {
    const { data } = await axios.get<Response>(`baseUrl`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
