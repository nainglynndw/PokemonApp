import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {generalColors} from '../../constants/theme';
import {useTheme} from '@react-navigation/native';
import {Size} from '../../constants/dimensions';

export const useStyle = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      title: {
        fontSize: Size.s24,
        fontWeight: 'bold',
        marginVertical: Size.s64,
      },
      inputContainer: {
        width: '100%',
        marginBottom: Size.s32,
      },
      input: {
        width: '100%',
        fontSize: Size.s14,
        color: generalColors.black,
        borderWidth: 2,
        borderColor: colors.border,
        backgroundColor: generalColors.white,
        padding: Size.s16,
        borderRadius: Size.s8,
      },
      placeholderTextStyle: {
        color: generalColors.grey,
      },
      label: {
        fontWeight: 'bold',
        marginLeft: Size.s12,
        marginBottom: Size.s8,
      },
    });
  }, [colors.border]);
  return styles;
};
