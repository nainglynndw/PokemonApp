import React from 'react';
import {useTheme} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

interface ISafeAreaWrapper {
  children: React.ReactNode;
}

const SafeAreaWrapper: React.FC<ISafeAreaWrapper> = ({children}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default React.memo(SafeAreaWrapper);
