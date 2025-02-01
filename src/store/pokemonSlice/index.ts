import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonList: builder.query({
      query: (offset = 0) => `pokemon?offset=${offset}&limit=20`,
    }),
    getPokemonDetails: builder.query({
      query: url => url,
    }),
  }),
});

export const {useGetPokemonListQuery, useGetPokemonDetailsQuery} = pokemonApi;
