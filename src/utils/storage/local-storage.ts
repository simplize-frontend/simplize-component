import { Storage } from "../constants/storage";

const getPrefixKey = (key: string) => `${Storage.prefix}-${key}`;

export const getLocalStorageLength = () => {
  if (typeof window === 'undefined') return;

  return localStorage.length;
};

export const clearLocalStorage = () => {
  if (typeof window === 'undefined') return;

  localStorage.clear();
};

export const getLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;

  return localStorage.getItem(getPrefixKey(key));
};

export const setLocalStorageItem = (key: string, value: string) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(getPrefixKey(key), value);
};

export const removeLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(getPrefixKey(key));
};

export const getLocalStorageKey = (index: number) => {
  if (typeof window === 'undefined') return;

  return localStorage.key(index);
};
