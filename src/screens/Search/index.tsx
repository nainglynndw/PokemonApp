import React, {useState, useEffect, useRef, useCallback, type FC} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';
import {usePokemonDetailsQuery} from '../../api/usePokemonApi';
import {Size} from '../../constants/dimensions';
import AppError from '../../components/AppError';
import {AppSkeletonDetailLoading} from '../../components/AppSkeletonLoading';
import AppText from '../../components/AppText';
import {generalColors} from '../../constants/theme';
import type {TUseNavigation} from '../../navigation/RootStackParamList';

interface Props {
  navigation: TUseNavigation<'Search'>;
}

const Search: FC<Props> = Props => {
  const [pokemonName, setPokemonName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      <Text style={styles.title}>Pokémon Search</Text>
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
          <AppText>Height: {pokemonDetails.height / 10} m</AppText>
          <AppText>Weight: {pokemonDetails.weight / 10} kg</AppText>
          <AppText>Abilities:</AppText>
          {pokemonDetails.abilities.map((ability, index) => (
            <AppText key={index}>{ability.ability.name}</AppText>
          ))}
          <Button title="More detail >" onPress={onPressDetail} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Size.s20,
    alignItems: 'center',
  },
  title: {
    fontSize: Size.s24,
    fontWeight: 'bold',
    marginBottom: Size.s20,
  },
  input: {
    width: '100%',
    height: Size.s32,
    borderColor: generalColors.grey,
    borderWidth: 1,
    marginBottom: Size.s24,
    paddingHorizontal: Size.s12,
  },
  pokemonDetails: {
    marginTop: Size.s20,
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: Size.s20,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: Size.s64 * 2,
    height: Size.s64 * 2,
    marginVertical: Size.s12,
  },
  error: {
    color: generalColors.red,
    marginTop: Size.s20,
  },
});

export default Search;
