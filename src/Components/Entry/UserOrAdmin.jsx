import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Typography, Stack } from "@mui/material";
import conf from "../../conf/conf";

// Appwrite SDK
import { Client, Databases, Query } from "appwrite";

// Initialize Appwrite
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);

const Entry = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);

  // Function to check if admin profile exists
  const checkAdminProfile = async () => {
    try {
      const res = await databases.listDocuments(
        conf.appwriteDatabaseId,
        "admin_profile_collection", // The collection containing admin profiles
        [Query.equal("userId", user?.$id)] // Filter by current userId
      );

      if (res.total === 0) {
        // If no admin profile exists, navigate to create profile page
        navigate("/createadminprofile");
      } else {
        // If admin profile exists, navigate to the admin dashboard
        navigate("/admindashboard");
      }
    } catch (error) {
      console.log("Error checking admin profile:", error);
    }
  };

  const goToUserDashboard = () => {
    navigate("/userdashboard");
  };

  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Welcome</Typography>
      <Typography variant="body1" mb={3}>
        Please choose your role to continue
      </Typography>

      <Stack spacing={2} direction="column" alignItems="center">
        <Button variant="contained" color="primary" onClick={checkAdminProfile}>
          Enter as Admin
        </Button>

        <Button variant="contained" color="success" onClick={goToUserDashboard}>
          Enter as User
        </Button>
      </Stack>
    </Box>
  );
};

export default Entry;
