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

export default {
  saveToken,
  getToken,
  clearToken,
};
