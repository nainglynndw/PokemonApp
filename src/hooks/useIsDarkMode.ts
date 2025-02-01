import {useColorScheme} from 'react-native';

export const useIsDarkMode = () => {
  const isSystemDarkMode = useColorScheme() === 'dark';
  return isSystemDarkMode;
};
