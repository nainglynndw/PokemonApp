const API_BASE_URL = 'https://pokeapi.co/api/v2/';

const pokemonListUrl = (offset = 0) =>
  `${API_BASE_URL}pokemon?offset=${offset}&limit=20`;

const pokemonDetailByNameUrl = (name: string) =>
  `${API_BASE_URL}pokemon/${name}`;

const pokemonApiCall = async (endpoints: string) => {
  try {
    const response = await fetch(endpoints);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPokemonList = async (offset: number) => {
  return await pokemonApiCall(pokemonListUrl(offset));
};

export const fetchPokemonDetailsByName = async (name: string) => {
  return await pokemonApiCall(pokemonDetailByNameUrl(name));
};
