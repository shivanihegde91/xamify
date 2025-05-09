import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './PerformanceDetails.css';  // Assuming you're using the external CSS file

const PerformanceDetails = () => {
  return (
    <div className="performance-container">
      <h1 className="title">Student Performance Details</h1>
      <div className="performance-info">
        
        <div className="info-box">
          <h2>Teacher Marks Entry</h2>
          <p>Teachers enter marks for their students after the exams. The teacher fills out a form or interface with the names of students and their corresponding marks. This data is then submitted to the system (to the admin) for review.</p>
        </div>
        <div className="info-box">
          <h2>Mark Submission to Admin</h2>
          <p>Once the teacher submits the marks, they are sent to the admin for review. The submission is done through an API or a direct submission method where the data gets stored in the database.</p>
        </div>
        <div className="info-box">
          <h2>Admin Views Performance Data</h2>
          <p>Once the marks are submitted and stored, the admin can access them through an admin dashboard. The system retrieves the marks data and displays it in a graphical format, such as a bar graph. The bar graph will have:</p>
          <ul>
            <li>X-axis: representing the students' names (or student IDs)</li>
            <li>Y-axis: representing the marks obtained by each student</li>
            <li>A bar for each student, indicating their performance</li>
          </ul>
        </div>
        <div className="info-box">
          <h2>Key Insights from Performance Data</h2>
          <p>The bar graph can give insights such as:</p>
          <ul>
            <li>The average score of the students</li>
            <li>The range of scores (e.g., highest, lowest)</li>
            <li>The distribution of students' marks across different ranges</li>
          </ul>
        </div>
      </div>

      {/* ✨ Unique Button to Navigate */}
      <div className="navigate-button-container">
        <Link to="/adminperformance" className="navigate-button">
          🔗 View Performance 
        </Link>
      </div>
    </div>
  );
};

export default PerformanceDetails;
