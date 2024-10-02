// /src/components/auth/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { RoleContext } from '../../Context/RoleContext';

const PrivateRoute = ({ element, allowedRoles, ...rest }) => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(RoleContext);

  return (
    <Route
      {...rest}
      element={user && allowedRoles.includes(role) ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
