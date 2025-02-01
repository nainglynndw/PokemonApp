const API_BASE_URL = 'https://pokeapi.co/api/v2/';

const pokemonListUrl = (offset = 0) =>
  `${API_BASE_URL}pokemon?offset=${offset}&limit=20`;

const pokemonDetailByNameUrl = (name: string | number) =>
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

export type TPokemons = {
  name: string;
  url: string;
  sprite: string;
  id: number;
  types: string[];
};

export type PokemonListResponse = {
  hasNext: boolean;
  hasPrevious: boolean;
  pokemons: TPokemons[];
};

export type TPokemonDetail = {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {name: string};
  }[];
  abilities: {
    ability: {name: string};
  }[];
};

export const fetchPokemonList = async (
  offset: number,
): Promise<PokemonListResponse> => {
  const response = await pokemonApiCall(pokemonListUrl(offset));
  const pokemonListWithDetails: PokemonListResponse['pokemons'] =
    await Promise.all(
      response.results.map(async (pokemon: {name: string; url: string}) => {
        const details = await fetchPokemonDetailsByName(pokemon.name);
        return {
          name: pokemon.name,
          url: pokemon.url,
          sprite:
            details.sprites.other.home.front_default ??
            details.sprites.front_default,
          id: details.id,
          types: details.types.map(
            (type: {type: {name: string}}) => type.type.name,
          ),
        };
      }),
    );
  return {
    hasNext: !!response.next,
    hasPrevious: !!response.previous,
    pokemons: pokemonListWithDetails,
  };
};

export const fetchPokemonDetailsByName = async (
  name: string | number,
): Promise<TPokemonDetail> => {
  return await pokemonApiCall(pokemonDetailByNameUrl(name));
};
