import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
const MAX_POKEMON_COUNT = 151;

export interface ListItem {
  name: string;
  url: string;
}

interface Params {
  limit: number;
  offset: number;
}

interface Response {
  count: number;
  next: string;
  previous: string;
  results: ListItem[];
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  params: { limit: MAX_POKEMON_COUNT, offset: 0 },
};

const client = axios.create(axiosConfig);

export const getPokemonList = async () => {
  try {
    const { data } = await client.get<Response>(BASE_URL);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
