import {Text, StyleSheet, TextProps} from 'react-native';
import React, {FC, memo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Size} from '../constants/dimensions';

const AppText: FC<TextProps> = Props => {
  const {colors} = useTheme();
  return (
    <Text {...Props} style={[styles.text, {color: colors.text}, Props.style]}>
      {Props.children}
    </Text>
  );
};

export default memo(AppText);

const styles = StyleSheet.create({
  text: {
    fontSize: Size.s14,
  },
});
