// authContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser, login as loginService, logout as logoutService } from '../Services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (credentials, role) => {
    const response = await loginService(credentials, role);

    if (response.access_token) {
      const user = { token: response.access_token, role: response.role };
      setUser(user);
    }

    return response;
  };

  const handleLogout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
