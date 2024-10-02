import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentDashbord from "../Components/Student/StudentDashboard";
import StudentAssignment from "../Components/Student/StudentAssignments";

const StudentRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/student/dashboard" replace />}/>
            <Route path="/dashboard" element={<StudentDashbord />}/>
            <Route path="/assignments" element={<StudentAssignment />}/>
        </Routes>
    )
}

export default StudentRoutes;