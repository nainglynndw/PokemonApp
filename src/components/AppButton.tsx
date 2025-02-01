import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {FC, memo} from 'react';

import {useTheme} from '@react-navigation/native';
import AppText from './AppText';
import {Size} from '../constants/dimensions';
import {generalColors} from '../constants/theme';

interface AppButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: TextStyle;
}

const AppButton: FC<AppButtonProps> = Props => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...Props}
      style={[styles.btn, {backgroundColor: colors.primary}, Props.style]}>
      <AppText style={[styles.txt, Props.textStyle]}>{Props.label}</AppText>
    </TouchableOpacity>
  );
};

export default memo(AppButton);

const styles = StyleSheet.create({
  btn: {
    margin: Size.s16,
    paddingHorizontal: Size.s16,
    paddingVertical: Size.s8,
    elevation: Size.s4,
    shadowOpacity: 0.5,
    shadowRadius: Size.s4,
    shadowColor: generalColors.grey,
    shadowOffset: {width: Size.s4, height: Size.s4},
    borderRadius: Size.s8,
    minWidth: Size.s32 * 3,
  },
  txt: {
    fontWeight: '500',
    textAlign: 'center',
    color: generalColors.softWhite,
  },
});
