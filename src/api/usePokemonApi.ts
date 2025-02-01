import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetailsByName, fetchPokemonList} from './pokemonApi';

export const usePokemonListQuery = (offset: number) => {
  return useQuery({
    queryKey: ['pokemonList', offset],
    queryFn: () => fetchPokemonList(offset),
  });
};

export const usePokemonDetailsQuery = (name: string) => {
  return useQuery({
    queryKey: ['pokemonDetails', name],
    queryFn: () => fetchPokemonDetailsByName(name),
    enabled: !!name,
  });
};
