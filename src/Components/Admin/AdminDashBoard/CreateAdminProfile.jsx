import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import conf from "../../../conf/conf.js";

// Import Appwrite SDK
import { Client, Databases, ID } from "appwrite";

// Initialize Appwrite Client and Databases
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint if different
  .setProject(conf.appwriteProjectId);         // Make sure this is correct in conf.js

const databases = new Databases(client);

const CreateAdminProfile = ({ userId }) => {
  const [form, setForm] = useState({
    adminName: "",
    phone: "",
    email: "",
    institution: "",
    department: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await databases.createDocument(
        conf.appwriteDatabaseId,             // Your Database ID
        "admin_profile_collection",          // Your Collection ID in Appwrite
        ID.unique(),
        {
          ...form,
          userId: userId,
        }
      );
      navigate("/admindashboard"); // Redirect to admin dashboard after creating profile
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={3}>Create Admin Profile</Typography>
      <TextField fullWidth name="adminName" label="Admin Name" margin="normal" onChange={handleChange} />
      <TextField fullWidth name="phone" label="Phone" margin="normal" onChange={handleChange} />
      <TextField fullWidth name="email" label="Email" margin="normal" onChange={handleChange} />
      <TextField fullWidth name="institution" label="Institution/College" margin="normal" onChange={handleChange} />
      <TextField fullWidth name="department" label="Department" margin="normal" onChange={handleChange} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default CreateAdminProfile;
