import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Hero from "../Hero/Hero";

export default function SplashScreen() {
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(true); // Start zoom animation
    setTimeout(() => {
      navigate("/hero");
       // Move to Sign-In after 3 seconds
    }, 3000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "#ffffff", // Background color
      }}
    >
      <motion.img
        src="/logo.jpg"
        alt="Logo"
        initial={{ scale: 0.7, opacity: 0.5 }} // Start small & faded
        animate={{ scale: 1.1, opacity: 1 }} // Slowly zoom in
        transition={{ duration: 2 }} // Animation duration
        style={{
          width: "50%", // Increased size
          maxWidth: "400px", // Max size for larger screens
          height: "auto", // Maintain aspect ratio
        }}
      />
    </Box>
  );
}
