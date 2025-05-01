//src/Components/UserSidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";

const UserLinks = [
  { title: "Dashboard", path: "/userdashboard", icon: <DashboardIcon /> },
  { title: "Exam", path: "/userexam", icon: <SchoolIcon /> },
  { title: "Performance", path: "/userperformance", icon: <AutoGraphIcon /> },
  { title: "Result", path: "/userresult", icon: <WorkspacePremiumIcon /> },
  { title: "Settings", path: "/usersettings", icon: <SettingsSuggestRoundedIcon /> },
];

const UserSidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "darkblue",
        color: "white",
        p: 2,
        height: "100vh",
        position: "fixed",
        width: "200px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        User Dashboard
      </Typography>
      {UserLinks.map((item, index) => (
        <Box
          key={index}
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            p: 1,
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <Typography>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default UserSidebar;
