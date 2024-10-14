import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import TeacherDashboard from "../Components/Teacher/TeacherDashboard";
import TeacherCourses from "../Components/Teacher/TeacherCourses"
import TeacherLogin from '../Components/Teacher/TeacherLogin';
import StudentList from '../Components/Teacher/StudentList';
import TeacherMessages from '../Components/Teacher/TeacherMessages';
import Reports from '../Components/Teacher/Reports';
import Settings from '../Components/Teacher/Settings';

const TeacherRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/teacher/dashboard"/>}/>
        <Route path="/login" element={<TeacherLogin />}/>
        <Route path="/dashboard" element={<TeacherDashboard />}/>
        <Route path="/courses" element={<TeacherCourses />}/>
        <Route path="/students-list" element={<StudentList />}/>
        <Route path="/tutor" element={<StudentList />}/>
        <Route path="/messages" element={<TeacherMessages />}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/settings" element={<Settings />}/>
    </Routes>
)
}

export default TeacherRoutes