// src/Routes/TeacherRoutes.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TeacherDashboard from "../Components/Teacher/TeacherDashboard";
import TeacherCourses from "../Components/Teacher/TeacherCourses";
import TeacherLogin from '../Components/Teacher/TeacherLogin';
import StudentList from '../Components/Teacher/StudentList';
import TeacherMessages from '../Components/Teacher/TeacherMessages';
import Reports from '../Components/Teacher/Reports';
import Settings from '../Components/Teacher/Settings';
import PrivateRoute from './PrivateRoute';

const TeacherRoutes = () => (
  <Routes>
    <Route path="/login" element={<TeacherLogin />} />
    <Route element={<PrivateRoute roleRequired="teacher" />}>
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/courses" element={<TeacherCourses />} />
      <Route path="/students-list" element={<StudentList />} />
      <Route path="/messages" element={<TeacherMessages />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default TeacherRoutes;
