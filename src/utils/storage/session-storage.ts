import { Storage } from "../constants/storage";

const getPrefixKey = (key: string) => `${Storage.prefix}-${key}`;

export const getSessionStorageLength = () => {
  return sessionStorage.length;
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};

export const getSessionStorageItem = (key: string) => {
  return sessionStorage.getItem(getPrefixKey(key));
};

export const setSessionStorageItem = (key: string, value: string) => {
  sessionStorage.setItem(getPrefixKey(key), value);
};

export const removeSessionStorageItem = (key: string) => {
  sessionStorage.removeItem(getPrefixKey(key));
};

export const getSessionStorageKey = (index: number) => {
  return sessionStorage.key(index);
};
