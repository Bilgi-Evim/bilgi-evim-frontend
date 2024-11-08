import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../Components/Admin/AdminDashboard';
import AdminSettings from "../Components/Admin/AdminSettings";
import AdminLogin from '../Components/Admin/AdminLogin';
import StudentList from '../Components/Admin/StudentList';
import TeachersList from '../Components/Admin/TeachersList';
import Messages from '../Components/Admin/Messages';
import Feedback from '../Components/Admin/Feedback';
import Reports from '../Components/Admin/Reports';
import PrivateRoute from './PrivateRoute';

const AdminRoutes = () => (
  <Routes>
    <Route path="/login" element={<AdminLogin />} />
    <Route element={<PrivateRoute roleRequired="admin" />}>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/students-list" element={<StudentList />} />
      <Route path="/teachers-list" element={<TeachersList />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/settings" element={<AdminSettings />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
