import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import TeacherDashboard from "../Components/Teacher/TeacherDashboard";
import TeacherCourses from "../Components/Teacher/TeacherCourses"

const TeacherRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="/teacher/dashboard"/>}/>
        <Route path="/dashboard" element={<TeacherDashboard />}/>
        <Route path="/courses" element={<TeacherCourses />}/>
    </Routes>
)
}

export default TeacherRoutes