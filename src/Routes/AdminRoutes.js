import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Components/Admin/AdminDashboard';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      {/* Diğer route'lar buraya eklenebilir */}
    </Routes>
  );
};

export default AdminRoutes;
