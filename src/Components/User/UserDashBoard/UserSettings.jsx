import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Step 1: import navigate
import {
  FaUser, FaInfoCircle, FaLock,
  FaQuestionCircle, FaCog, FaBell,
  FaMoon, FaSun
} from "react-icons/fa";
import "./UserSettings.css";

const UserSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // 🧭 Step 2: initialize navigate

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const settingsOptions = [
    { icon: <FaUser />, label: "Account", color: "#ff758c" },
    { icon: <FaInfoCircle />, label: "About us", color: "#ff9a44", action: () => navigate("/about") }, // 🧭 Navigate to /about
    { icon: darkMode ? <FaSun /> : <FaMoon />, label: "Theme", color: "#5b5aff", action: toggleTheme },
    { icon: <FaQuestionCircle />, label: "Help center", color: "#4dafff" },
    { icon: <FaCog />, label: "General", color: "#3ccf63" },
    //{ icon: <FaBell />, label: "Notifications", color: "#ff4bae" },
  ];

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <h2 className="settings-title">Settings Icons</h2>
      <div className="settings-grid">
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className="settings-item"
            style={{ backgroundColor: option.color }}
            onClick={option.action || null}
          >
            <div className="icon">{option.icon}</div>
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSettings;

