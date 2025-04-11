
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Choose Your Role
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2, width: "200px" }}
        onClick={() => navigate("/admindashboard")}
      >
        Enter as Admin
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "200px" }}
        onClick={() => navigate("/userdashboard")}
      >
        Enter as User
      </Button>
    </Box>
  );
};

export default Entry;
