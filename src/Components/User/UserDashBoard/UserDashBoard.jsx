import React from "react";
import UserSidebar from "./UserSidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import UserExam from "./UserExam";
import UserPerformance from "./UserPerformance";
import UserResult from "./UserResult";
import UserSettings from "./UserSettings";
import Userpage from "./Userpage";

const UserDashboard = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <UserSidebar />
     
        
        <Routes>
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/userexam" element={<UserExam />} />
          <Route path="/userperformance" element={<UserPerformance />} />
          <Route path="/userresult" element={<UserResult />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </Box>
    
  );
};

export default UserDashboard;
