import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {fetchPokemonDetailsByName, fetchPokemonList} from './pokemonApi';

export const usePokemonListQuery = () => {
  return useInfiniteQuery({
    queryKey: ['pokemonList'],
    queryFn: async ({pageParam}: {pageParam: number}) =>
      fetchPokemonList(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNext ? allPages.length * 20 : undefined,
  });
};

export const usePokemonDetailsQuery = (name: string | number) => {
  return useQuery({
    queryKey: ['pokemonDetails', name],
    queryFn: () => fetchPokemonDetailsByName(name),
    enabled: !!name,
  });
};
