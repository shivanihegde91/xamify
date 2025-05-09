import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AdminExam from "./AdminExam";
import AdminPerformance from "./AdminPerformance";
import AdminResult from "./AdminResult";
import AdminSettings from "./AdminSettings";
import ManageUser from "./ManageUser";
import { useNavigate } from "react-router-dom";
import './AdminDashBoard.css';

const AdminDashBoard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
      <Box className="dashboard-container">
        <div className="welcome-section">
          <div className="welcome-text">
            <h2>Welcome to <span>Xamify</span></h2>
          </div>
          <div className="welcome-image">
            <img src="hat.png" alt="Welcome" />
          </div>
        </div>

        <div className="grid-container">
  <div className="grid-container1"  onClick={() => navigate('/resultdetails')} style={{ cursor: 'pointer' }}>
    <img src="result.png" alt="studentmarks" className="dashboard-image-only" />

  </div> 

  {/* Replaced clickable card with simple image */}
  <div className="image-replacement-box">
    <img src="calender.png" alt="Calendar" />
  </div>

  {/* Replaced small card with simple image */}
  <div className="image-replacement-box" onClick={() => navigate('/performancedetails')} style={{ cursor: 'pointer' }}>
    <img src="chart.jpeg" alt="performance" />
  </div>
</div>


        {/* Other Dashboard Content */}
      </Box>

      <Routes>
        <Route path="/adminexam" element={<AdminExam />} />
        <Route path="/adminperformance" element={<AdminPerformance />} />
        <Route path="/adminresult" element={<AdminResult />} />
        <Route path="/adminsettings" element={<AdminSettings />} />
        <Route path="/manageuser" element={<ManageUser />} />
      </Routes>
    </Box>
  );
};

export default AdminDashBoard;