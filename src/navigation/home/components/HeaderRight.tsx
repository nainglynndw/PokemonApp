import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {memo, useCallback, type FC} from 'react';
import type {TUseNavigation} from '../../RootStackParamList';
import {Size} from '../../../constants/dimensions';
import {generalColors} from '../../../constants/theme';

type Props = {
  navigation: TUseNavigation<'PokemonList' | 'PokemonDetail'>;
};

const HeaderRight: FC<Props> = ({navigation}) => {
  const onPressFavourite = useCallback(() => {
    navigation.navigate('Favourite');
  }, [navigation]);

  const onPressSearch = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={onPressFavourite} style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/pokeball.png')}
        />
      </Pressable>
      <Pressable onPress={onPressSearch} style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/search.png')}
        />
      </Pressable>
    </View>
  );
};

export default memo(HeaderRight);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingRight: Size.s16,
  },
  imgContainer: {
    marginLeft: Size.s12,
  },
  img: {
    tintColor: generalColors.black,
    width: Size.s24,
    height: Size.s24,
  },
});
