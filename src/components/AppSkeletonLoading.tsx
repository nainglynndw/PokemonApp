import React, {memo} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Size} from '../constants/dimensions';

const {width, height} = Dimensions.get('window');
const loaderContainerWidth = width / 2;
const loaderContainerHeight = height / 5;
export const AppSkeletonListLoading = memo(() => {
  return (
    <View style={styles.container}>
      {[...Array(8)].map((_, index) => (
        <ContentLoader
          key={index}
          width={loaderContainerWidth}
          height={loaderContainerHeight}
          speed={1}
          backgroundColor={'#333'}
          foregroundColor={'#999'}
          viewBox={`0 0 ${loaderContainerHeight} ${loaderContainerWidth}`}>
          <Rect x="36" y="0" rx="5" ry="5" width="70" height="70" />
          <Rect x="12" y="82" rx="4" ry="4" width="128" height="10" />
          <Rect x="12" y="100" rx="4" ry="4" width="118" height="10" />
          <Rect x="12" y="118" rx="4" ry="4" width="138" height="10" />
        </ContentLoader>
      ))}
    </View>
  );
});

export const AppSkeletonDetailLoading = memo(() => {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={1}
      backgroundColor={'#333'}
      foregroundColor={'#999'}
      viewBox={`0 0 100 100`}
      preserveAspectRatio="xMinYMin meet">
      <Rect x="36" y="10" rx="50" ry="50" width="25" height="25" />
      <Rect x="5" y="40" rx="2" ry="2" width="90" height="5" />
      <Rect x="5" y="51" rx="2" ry="2" width="89" height="5" />
      <Rect x="5" y="62" rx="2" ry="2" width="92" height="5" />
      <Rect x="5" y="73" rx="2" ry="2" width="87" height="5" />
      <Rect x="5" y="84" rx="2" ry="2" width="78" height="5" />
      <Rect x="5" y="95" rx="2" ry="2" width="89" height="5" />
    </ContentLoader>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: Size.s32,
  },
});
