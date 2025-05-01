// src/Components/Admin/AdminDashBoard.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AdminExam from "./AdminExam";
import AdminPerformance from "./AdminPerformance";
import AdminResult from "./AdminResult";
import AdminSettings from "./AdminSettings";
import ManageUser from "./ManageUser";

const AdminDashBoard = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
        
        <Routes>
          <Route path="/adminexam" element={<AdminExam />} />
          <Route path="/adminperformance" element={<AdminPerformance />} />
          <Route path="/adminresult" element={<AdminResult />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
          <Route path="/manageuser" element={<ManageUser/>}/>
        </Routes>
      </Box>
    
  );
};

export default AdminDashBoard;
