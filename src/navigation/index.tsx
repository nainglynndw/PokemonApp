import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useHasAuth} from '../hooks/useHasAuth';
import AuthNavigator from '../navigation/auth';
import HomeNavigator from '../navigation/home';
import {useIsDarkMode} from '../hooks/useIsDarkMode';
import {darkTheme, lightTheme} from '../constants/theme';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import AppLoading from '../components/AppLoading';

const RootNavigator = () => {
  const hasAuth = useHasAuth();
  const isDarkMode = useIsDarkMode();

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaWrapper>
        {!hasAuth ? <AuthNavigator /> : <HomeNavigator />}
        <AppLoading />
      </SafeAreaWrapper>
    </NavigationContainer>
  );
};

export default RootNavigator;
