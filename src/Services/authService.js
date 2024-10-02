// src/services/authService.js
import axios from 'axios';
import tokenManager from '../Utils/tokenManager';
import { jwtDecode } from 'jwt-decode'; // Named export olarak içe aktarma

export const login = async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  if (response.data.token) {
    tokenManager.saveToken(response.data.token);
  }
  return response.data.user;
};

export const logout = () => {
  tokenManager.clearToken();
};

export const getCurrentUser = () => {
  const token = tokenManager.getToken();
  return token ? jwtDecode(token) : null; // jwtDecode fonksiyonu burada kullanılıyor
};
