import {StyleSheet, View, ViewProps} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '@react-navigation/native';
import {Size} from '../constants/dimensions';

const AppContainer: FC<ViewProps> = Props => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: Size.s16,
    },
  });
  return (
    <View {...Props} style={styles.container}>
      {Props.children}
    </View>
  );
};

export default AppContainer;
