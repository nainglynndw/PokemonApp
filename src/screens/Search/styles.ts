import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Size} from '../../constants/dimensions';
import {generalColors} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';

export const useStyle = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
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
        height: Size.s24 * 2,
        borderColor: generalColors.grey,
        borderWidth: 1,
        marginBottom: Size.s24,
        padding: Size.s12,
        color: colors.text,
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
      ability: {
        marginBottom: Size.s16,
      },
    });
  }, [colors.text]);
  return styles;
};
