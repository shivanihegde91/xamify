import React, { useState } from "react";
import { FaUser, FaInfoCircle, FaLock, FaQuestionCircle, FaCog, FaBell, FaMoon, FaSun } from "react-icons/fa";
import "./AdminSettings.css"; 

const AdminSettings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const settingsOptions = [
    { icon: <FaUser />, label: "Account", color: "#ff758c" },
    { icon: <FaInfoCircle />, label: "About us", color: "#ff9a44" },
    { icon: darkMode ? <FaSun /> : <FaMoon />, label: "Theme", color: "#5b5aff", action: toggleTheme },
    { icon: <FaQuestionCircle />, label: "Help center", color: "#4dafff" },
    { icon: <FaCog />, label: "General", color: "#3ccf63" },
    { icon: <FaBell />, label: "Notifications", color: "#ff4bae" },
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
            onClick={option.action ? option.action : null} // Calls the action if available
          >
            <div className="icon">{option.icon}</div>
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSettings;
