import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (   
    <div className="about-container">
      {/* Top Banner Image */}
      <img src="/" className="top-banner" alt="logo" />

      {/* About Info */}
      <div className="about-text">
      <div className="card1-section">
      <div className="profile-card" data-aos="fade-up">
        <h1>About xamify</h1>
</div>
</div>
        <p>
        The portal allows admins to create and manage teacher accounts, schedule exams handle marks and results, and analyze student performance with ease. 
        </p>
        <p>
        Xamify ensures secure login, efficient data management, and accurate performance tracking, making exam management digital, smooth, and reliable.

        </p>
        <p>
        Xamify reduces manual work, ensures data accuracy, and helps institutions manage exams more efficiently and transparently.
        </p>

        <h2>Key Features:</h2>
        <ul>
          <li>Exam Scheduling</li>
          <li>Attendance & Internal Marks Management</li>
          <li> Timetable Scheduling</li>
          <li> Student Performance Monitoring</li>
          <li>Automated Reports and Dashboards</li>
        </ul>
      </div>


      {/* Two Cards with Animation */}
      <div className="card-section">
        <div className="profile-card" data-aos="fade-up">
          <img src="/images/teacher-1.png" alt="Dr. Jagadish" />
          <div>
            <h4>Admin</h4>
            <p>Head of the departement</p>
            <p>Higher Education Department</p>
          </div>
        </div>
        <div className="profile-card" data-aos="fade-up">
          <img src="/images/teacher-1.png" alt="Dr. Jagadish" />
          <div>
            <h4>Principal</h4>
            <p>Head of Institution</p>
            <p>Higher Education Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
