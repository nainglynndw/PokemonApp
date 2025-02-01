import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#1591b4',
    background: '#0f1925',
    card: '#1a2735',
    text: '#c0d8e8',
    border: '#1f3547',
    notification: '#27a3a9',
  },
};

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e90ff',
    background: '#ffffff',
    card: '#f5f5f5',
    text: '#333333',
    border: '#cccccc',
    notification: '#ff6347',
  },
};

export const generalColors = {
  softWhite: '#f0f0f0',
  white: '#fff',
  black: '#000',
  grey: '#808080',
  darkGrey: '#808080',
  red: '#ff0000',
  transparent: '#00000000',
  semiTransparent: '#000000bf',
};

export type generalColorsType = typeof generalColors;
