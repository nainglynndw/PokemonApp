import {useMemo} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Size} from '../../constants/dimensions';
import {useTheme} from '@react-navigation/native';
import {generalColors} from '../../constants/theme';

export const useStyle = () => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      innerContainer: {
        width: width,
        alignItems: 'center',
      },
      image: {
        width: width * 0.9,
        height: width * 0.9,
        resizeMode: 'contain',
        position: 'absolute',
      },
      contentSheet: {
        alignItems: 'center',
        width: '95%',
        padding: Size.s16,
        backgroundColor: colors.card,
        borderTopLeftRadius: Size.s16,
        borderTopRightRadius: Size.s16,
        shadowColor: generalColors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: width * 0.7,
        paddingTop: width * 0.2 + Size.s12,
      },
      name: {
        backgroundColor: '#0f1925',
        textAlign: 'center',
        width: width,
        fontSize: Size.s20,
        fontWeight: 'bold',
        color: generalColors.white,
        textTransform: 'uppercase',
      },
      statsContainer: {
        marginVertical: Size.s16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      statBox: {
        backgroundColor: colors.primary,
        padding: Size.s8,
        width: '47%',
        marginVertical: Size.s8,
        borderRadius: Size.s4,
        alignItems: 'center',
      },
      stat: {
        fontWeight: 'bold',
        fontSize: Size.s12,
        color: generalColors.black,
      },
      favIconContainer: {
        top: Size.s16,
        right: Size.s16,
        position: 'absolute',
      },
      favIcon: {
        width: Size.s32,
        height: Size.s32,
        tintColor: generalColors.red,
      },
    });
  }, [colors.card, colors.primary, width]);

  return styles;
};
