import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const getItem = (key: string): string | undefined => {
  return storage.getString(key);
};
export const setItem = (key: string, value: string | Record<string, any>) => {
  const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
  return storage.set(key, stringValue);
};
export const removeItem = (key: string) => storage.delete(key);
