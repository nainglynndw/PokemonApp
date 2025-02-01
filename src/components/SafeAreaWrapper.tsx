import React from 'react';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISafeAreaWrapper {
  children: React.ReactNode;
}

const SafeAreaWrapper: React.FC<ISafeAreaWrapper> = ({children}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      {children}
    </SafeAreaView>
  );
};

export default React.memo(SafeAreaWrapper);
