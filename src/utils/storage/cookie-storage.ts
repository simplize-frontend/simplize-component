import Cookies from 'js-cookie';
import { Storage } from '../constants/storage';

const getPrefixKey = (key: string) => `${Storage.prefix}-${key}`;

export const setCookie = (cname: string, cvalue: string, exdays = 30) => {
  return Cookies.set(getPrefixKey(cname), cvalue, { expires: exdays });
};

export const getCookie = (cname: string) => {
  return Cookies.get(getPrefixKey(cname)) || '';
};

export const deleteCookie = (cname: string) => {
  Cookies.remove(getPrefixKey(cname));
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};
