import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, type FC} from 'react';
import AppContainer from '../../components/AppContainer';
import AppText from '../../components/AppText';
import {usePokemonListQuery} from '../../api/usePokemonApi';
import AppError from '../../components/AppError';
import {AppSkeletonListLoading} from '../../components/AppSkeletonLoading';
import type {TPokemons} from '../../api/pokemonApi';
import {useStyle} from './styles';
import type {TUseNavigation} from '../../navigation/RootStackParamList';

interface Props {
  navigation: TUseNavigation<'PokemonList'>;
}

const PokemonList: FC<Props> = Props => {
  const {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = usePokemonListQuery();
  const styles = useStyle();
  const loadMore = useCallback(() => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [isFetching, hasNextPage, fetchNextPage]);

  const onPressPokemon = useCallback(
    (id: number) => {
      Props.navigation.navigate('PokemonDetail', {id});
    },
    [Props.navigation],
  );

  const onPressAdd = useCallback(() => {
    Props.navigation.navigate('AddNewPokemon');
  }, [Props.navigation]);

  const renderItem = useCallback(
    ({item}: {item: TPokemons}) => {
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => onPressPokemon(item.id)}>
          <Image style={styles.img} source={{uri: item.sprite}} />
          <AppText style={styles.name}>{item.name}</AppText>
        </TouchableOpacity>
      );
    },
    [onPressPokemon, styles.img, styles.itemContainer, styles.name],
  );

  if (isLoading) {
    return <AppSkeletonListLoading />;
  }

  if (isError || !data?.pages) {
    return <AppError onReload={refetch} />;
  }

  const pokemons = data?.pages.flatMap(page => page.pokemons);

  if (pokemons?.length > 0) {
    return (
      <AppContainer>
        <FlatList
          numColumns={2}
          data={pokemons}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetching ? <ActivityIndicator size="large" /> : null
          }
        />
        <TouchableOpacity style={styles.addNewBtn} onPress={onPressAdd}>
          <AppText style={styles.plus}>+</AppText>
        </TouchableOpacity>
      </AppContainer>
    );
  }
  return null;
};

export default PokemonList;
