// /src/utils/tokenManager.js
const TOKEN_KEY = 'authToken';

const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const tokenManager = {
  saveToken,
  getToken,
  clearToken,
};

export default tokenManager;
