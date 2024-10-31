import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'access_token';

const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Token geçerlilik süresi dolmuş mu kontrol eden fonksiyon
const isTokenExpired = () => {
  const token = getToken();
  if (!token) return true;

  const { exp } = jwtDecode(token);
  return Date.now() >= exp * 1000;
};

export default {
  saveToken,
  getToken,
  clearToken,
  isTokenExpired,
};
