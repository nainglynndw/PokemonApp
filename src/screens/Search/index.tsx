import React, {useState, useEffect, useRef, useCallback, type FC} from 'react';
import {View, TextInput, Image} from 'react-native';
import {usePokemonDetailsQuery} from '../../api/usePokemonApi';
import AppError from '../../components/AppError';
import {AppSkeletonDetailLoading} from '../../components/AppSkeletonLoading';
import AppText from '../../components/AppText';
import type {TUseNavigation} from '../../navigation/RootStackParamList';
import {useStyle} from './styles';
import AppButton from '../../components/AppButton';

interface Props {
  navigation: TUseNavigation<'Search'>;
}

const Search: FC<Props> = Props => {
  const [pokemonName, setPokemonName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const styles = useStyle();
  const {
    data: pokemonDetails,
    isLoading,
    isError,
  } = usePokemonDetailsQuery(searchQuery);

  useEffect(() => {
    if (debounceTimeoutRef?.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setSearchQuery(pokemonName.toLowerCase());
    }, 100);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [pokemonName]);

  const onPressDetail = useCallback(() => {
    if (!pokemonDetails?.id) return;
    Props.navigation.navigate('PokemonDetail', {id: pokemonDetails.id});
  }, [Props.navigation, pokemonDetails?.id]);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Pokémon Search</AppText>
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon name or ID"
        value={pokemonName}
        onChangeText={setPokemonName}
      />

      {isLoading && <AppSkeletonDetailLoading />}

      {isError && <AppError />}

      {pokemonDetails && (
        <View style={styles.pokemonDetails}>
          <AppText style={styles.pokemonName}>
            {pokemonDetails.name.toUpperCase()}
          </AppText>
          <Image
            style={styles.pokemonImage}
            source={{uri: pokemonDetails.sprites.front_default}}
          />
          <AppText style={styles.ability}>
            Height: {pokemonDetails.height / 10} m
          </AppText>
          <AppText style={styles.ability}>
            Weight: {pokemonDetails.weight / 10} kg
          </AppText>
          <AppText style={styles.ability}>Abilities:</AppText>
          {pokemonDetails.abilities.map((ability, index) => (
            <AppText style={styles.ability} key={index}>
              {ability.ability.name}
            </AppText>
          ))}
          <AppButton onPress={onPressDetail} label="More detail >" />
        </View>
      )}
    </View>
  );
};

export default Search;
