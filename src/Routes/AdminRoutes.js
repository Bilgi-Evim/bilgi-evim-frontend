import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminSettings from "../Components/Admin/AdminSettings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/settings" element={<AdminSettings />} />
      {/* Diğer route'lar buraya eklenebilir */}
    </Routes>
  );
};

export default AdminRoutes;
