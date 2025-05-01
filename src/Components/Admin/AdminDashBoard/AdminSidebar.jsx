//src/Components/Admin/AdminSidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const AdminLinks = [
  { title: "Dashboard", path: "/admindashboard", icon: <DashboardIcon /> },
  { title: "Exam", path: "/adminexam", icon: <SchoolIcon /> },
  { title: "Performance", path: "/adminperformance", icon: <AutoGraphIcon /> },
  { title: "Result", path: "/adminresult", icon: <WorkspacePremiumIcon /> },
  { title: "Manage User", path: "/manageuser", icon: <ManageAccountsIcon /> },
  { title: "Settings", path: "/adminsettings", icon: <SettingsSuggestRoundedIcon /> },
];

const AdminSidebar = () => {
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
        Admin Dashboard
      </Typography>
      {AdminLinks.map((item, index) => (
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

export default AdminSidebar;
