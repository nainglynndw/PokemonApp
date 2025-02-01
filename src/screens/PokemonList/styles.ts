import {useMemo} from 'react';
import {Size} from '../../constants/dimensions';
import {generalColors} from '../../constants/theme';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const useStyle = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      itemContainer: {
        alignItems: 'center',
        width: '45%',
        padding: Size.s8,
        margin: Size.s8,
        backgroundColor: generalColors.white,
        borderRadius: Size.s8,
        shadowColor: generalColors.grey,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      img: {
        resizeMode: 'contain',
        width: '100%',
        height: 200,
        borderRadius: Size.s8,
      },
      name: {
        width: '100%',
        fontSize: Size.s16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: generalColors.black,
        textTransform: 'uppercase',
      },
      addNewBtn: {
        position: 'absolute',
        bottom: Size.s16,
        right: Size.s16,
        width: Size.s24 * 2,
        height: Size.s24 * 2,
        borderRadius: Size.s24,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: generalColors.grey,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      plus: {
        fontSize: Size.s24 * 2,
        color: generalColors.white,
        textAlign: 'center',
        bottom: Size.s8,
      },
    });
  }, [colors.primary]);
  return styles;
};
