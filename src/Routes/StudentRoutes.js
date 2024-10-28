// src/Routes/StudentRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "../Components/Student/StudentDashboard";
import StudentAssignment from "../Components/Student/StudentAssignments";
import StudentLogin from "../Components/Student/StudentLogin";
import PrivateRoute from "./PrivateRoute";

const StudentRoutes = () => (
  <Routes>
    <Route path="/login" element={<StudentLogin />} />
    <Route element={<PrivateRoute roleRequired="student" />}>
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/assignments" element={<StudentAssignment />} />
    </Route>
  </Routes>
);

export default StudentRoutes;
