import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  fetchPokemonDetailsByName,
  fetchPokemonList,
  getFavPokemonList,
  type TPokemons,
} from './pokemonApi';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

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

export const useFavPokemonsListQuery = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState<TPokemons[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isFocused) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const pokemonList = await getFavPokemonList();
        if (!pokemonList) {
          setIsError(true);
          setData(null);
        } else {
          setData(pokemonList);
          setIsError(false);
        }
      } catch (error) {
        setIsError(true);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [isFocused]);

  return {data, isLoading, isError};
};
