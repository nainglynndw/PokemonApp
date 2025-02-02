import {FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, type FC} from 'react';
import AppContainer from '../../components/AppContainer';
import {useFavPokemonsListQuery} from '../../api/usePokemonApi';
import AppError from '../../components/AppError';
import {AppSkeletonListLoading} from '../../components/AppSkeletonLoading';
import type {TPokemons} from '../../api/pokemonApi';
import AppText from '../../components/AppText';
import {useStyle} from './styles';
import type {TUseNavigation} from '../../navigation/RootStackParamList';

interface Props {
  navigation: TUseNavigation<'Favourite'>;
}

const Favourite: FC<Props> = Props => {
  const {data, isError, isLoading} = useFavPokemonsListQuery();
  const styles = useStyle(data?.length ?? 0);

  const onPressPokemon = useCallback(
    (id: number) => {
      Props.navigation.navigate('PokemonDetail', {id});
    },
    [Props.navigation],
  );

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

  if (isLoading) return <AppSkeletonListLoading />;

  if (!data || isError) return <AppError />;

  return (
    <AppContainer>
      {data.length === 0 ? (
        <AppText>There is no favourite pokemons</AppText>
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          initialNumToRender={20}
          keyExtractor={item => item.name}
        />
      )}
    </AppContainer>
  );
};

export default Favourite;
