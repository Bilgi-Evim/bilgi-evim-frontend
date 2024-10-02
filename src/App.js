// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AdminRoutes from "./Routes/AdminRoutes"; 
import { AuthProvider } from "./Context/AuthContext";
import { RoleProvider } from "./Context/RoleContext";
import StudentRoutes from "./Routes/StudentRoutes";
import TeacherRoutes from "./Routes/TeacherRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <RoleProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/student/*" element={<StudentRoutes />} />
            <Route path="/teacher/*" element={<TeacherRoutes />} />
          </Routes>
        </RoleProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
