import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const getItem = (key: string): string | Record<string, any> | null => {
  const value = storage.getString(key);
  return typeof value === 'string' ? value : value ? JSON.parse(value) : null;
};
export const setItem = (key: string, value: string | Record<string, any>) => {
  const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
  return storage.set(key, stringValue);
};
export const removeItem = (key: string) => storage.delete(key);
