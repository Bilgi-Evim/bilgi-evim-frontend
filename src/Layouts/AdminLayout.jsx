import React from 'react';
import Navbar from '../components/Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar userRole="admin" />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
