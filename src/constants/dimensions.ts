import {PixelRatio} from 'react-native';

const pixelRatio = PixelRatio.getFontScale();

export enum Size {
  's2' = 2 * pixelRatio,
  's4' = 4 * pixelRatio,
  's8' = 8 * pixelRatio,
  's12' = 12 * pixelRatio,
  's14' = 14 * pixelRatio,
  's16' = 16 * pixelRatio,
  's20' = 20 * pixelRatio,
  's24' = 24 * pixelRatio,
  's32' = 32 * pixelRatio,
  's64' = 64 * pixelRatio,
}
