import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Size} from '../../constants/dimensions';
import {generalColors} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';

export const useStyle = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      input: {
        width: '100%',
        height: Size.s24 * 2,
        borderColor: generalColors.grey,
        borderWidth: 1,
        marginBottom: Size.s24,
        padding: Size.s12,
        color: colors.text,
      },
      imageContainer: {
        marginVertical: Size.s24,
        alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      },
      img: {
        width: Size.s64 * 3,
        height: Size.s64 * 3,
      },
    });
  }, [colors.text]);
  return styles;
};
