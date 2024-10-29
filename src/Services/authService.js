import axios from 'axios';
import tokenManager from '../Utils/tokenManager';
import {jwtDecode} from 'jwt-decode';

const API_URL = process.env.REACT_APP_AUTH_API_URL;

export const login = async (credentials, role) => {
  let url;

  if (role === "student") {
    url = `${API_URL}/login/student`;
  } else if (role === "teacher") {
    url = `${API_URL}/login/teacher`;
  } else if (role === "admin") {
    url = `${API_URL}/login/admin`;
  } else {
    throw new Error("Invalid role");
  }

  try {
    const response = await axios.post(url, credentials);

    if (response.data.access_token) {
      tokenManager.saveToken(response.data.access_token);
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = () => {
  const token = tokenManager.getToken();
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  
  return {
    token,
    role: decodedToken.role,
    ...decodedToken,
  };
};

export const logout = () => {
  tokenManager.clearToken();
};
