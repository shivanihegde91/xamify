import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AdminExam from "./AdminExam";
import AdminPerformance from "./AdminPerformance";
import AdminResult from "./AdminResult";
import AdminSettings from "./AdminSettings";

const AdminDashBoard = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
        
        <Routes>
          <Route path="/adminexam" element={<AdminExam />} />
          <Route path="/adminperformance" element={<AdminPerformance />} />
          <Route path="/adminresult" element={<AdminResult />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
        </Routes>
      </Box>
    
  );
};

export default AdminDashBoard;
