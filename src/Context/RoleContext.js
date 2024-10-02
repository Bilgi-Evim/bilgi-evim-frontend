// /src/context/RoleContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../Services/authService';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setRole(user.role);
    }
  }, []);

  return (
    <RoleContext.Provider value={{ role }}>
      {children}
    </RoleContext.Provider>
  );
};
