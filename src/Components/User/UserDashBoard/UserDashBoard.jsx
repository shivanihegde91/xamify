/*import React from "react";
import UserSidebar from "./UserSidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import UserExam from "./UserExam";
import UserPerformance from "./UserPerformance";
import UserResult from "./UserResult";
import UserSettings from "./UserSettings";
import Userpage from "./Userpage";
import "./UserDashboard.css"; // import CSS file

const UserDashboard = () => {
  return (
    <Box className="dashboard-container">
      <UserSidebar />

      <Box className="dashboard-content">
        <Routes>
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/userexam" element={<UserExam />} />
          <Route path="/userperformance" element={<UserPerformance />} />
          <Route path="/userresult" element={<UserResult />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </Box>
    </Box>
  );
};


export default UserDashboard;*/
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardContent, CardHeader } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserExam from "./UserExam";
import UserPerformance from "./UserPerformance";
import UserResult from "./UserResult";
import UserSettings from "./UserSettings";
import Userpage from "./Userpage";
import service from "../../../appwrite/cong"; // Adjust path as needed
import "./UserDashboard.css";


const UserDashboard = () => {
  const [upcomingExam, setUpcomingExam] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUpcomingExam = async () => {
      const res = await service.getAllExam();
      if (res && res.length > 0) {
        const upcoming = res
          .filter((exam) => new Date(exam.date) >= new Date())
          .sort((a, b) => new Date(a.date) - new Date(b.date))[0]; // Get the soonest upcoming
        setUpcomingExam(upcoming);
      }
    };

    fetchUpcomingExam();
  }, []);



  return (
    <Box className="dashboard-container">
      <UserSidebar />
      <Box className="dashboard-content">
      <Box className="banner">
  <Typography variant="h6" className="banner-text">
    📢 Welcome to Xamify – Your Smart Exam Management Platform!
  </Typography>
</Box>



      {  /*<Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="device-card">
              <CardHeader title="Upcoming Exam" />
              <CardContent>
                {upcomingExam ? (
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="body1">Next Exam: {upcomingExam.subject}</Typography>
                    <Typography variant="body1">
                      Date: {new Date(upcomingExam.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body1">No upcoming exams</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
  <Card className="device-card">
    <CardHeader title="Total Exams" />
    <CardContent>
      <Typography variant="body1">You have 5 exams scheduled</Typography>
    </CardContent>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={3}>
  <Card className="device-card">
    <CardHeader title="Performance Status" />
    <CardContent>
      <Typography variant="body1">Average Score: 78%</Typography>
    </CardContent>
  </Card>
</Grid>
*/}
          {/* ... your other cards here */}
      {/* Image Grid Section */}
<div className="grid-container">
  <div className="grid-container1" onClick={() => navigate('/resultdetails2')} style={{ cursor: 'pointer' }}>
    <img src="result.png" alt="studentmarks" className="dashboard-image-only" />
  </div>

  <div className="grid-container1" onClick={() => navigate('/userexam')} style={{ cursor: 'pointer' }}>
    <img src="calender.png" alt="time table" className="dashboard-image-only" />
  </div>



  <div className="image-replacement-box" onClick={() => navigate('/performancedetails2')} style={{ cursor: 'pointer' }}>
    <img src="chart.jpeg" alt="performance" />
  </div>
</div>


        <Routes>
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/userexam" element={<UserExam />} />
          <Route path="/userperformance" element={<UserPerformance />} />
          <Route path="/userresult" element={<UserResult />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default UserDashboard;
