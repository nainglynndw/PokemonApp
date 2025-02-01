import {Image, Pressable, StyleSheet} from 'react-native';
import React, {memo, useCallback, type FC} from 'react';
import type {TUseNavigation} from '../../RootStackParamList';
import {Size} from '../../../constants/dimensions';
import {useTheme} from '@react-navigation/native';

type Props = {
  navigation: TUseNavigation<'PokemonList' | 'PokemonDetail'>;
};

const ProfileHeader: FC<Props> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    imgContainer: {
      alignItems: 'flex-end',
    },
    img: {
      tintColor: colors.text,
      width: Size.s32,
      height: Size.s32,
    },
  });

  const onPressProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <Pressable onPress={onPressProfile} style={styles.imgContainer}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/pokeball.png')}
      />
    </Pressable>
  );
};

export default memo(ProfileHeader);
