import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {useLoadingStore} from '../hooks/useLoadingStore';
import {generalColors} from '../constants/theme';

const {width, height} = Dimensions.get('window');

const AppLoading = () => {
  const {isLoading} = useLoadingStore();
  if (!isLoading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} size="large" color="#0000ff" />
    </View>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: generalColors.semiTransparent,
  },
});
