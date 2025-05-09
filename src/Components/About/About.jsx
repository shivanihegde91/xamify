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
      <img src="banner.png" className="top-banner" alt="Banner" data-aos="zoom-in" />

      {/* About Info */}
      <div className="about-text">
        <div className="card1-section">
          <div className="profile-card" data-aos="fade-down">
            <h1>About Xamify</h1>
          </div>
        </div>

        <p data-aos="fade-right">
          The portal allows admins to create and manage teacher accounts, schedule exams, handle marks and results, and analyze student performance with ease.
        </p>
        <p data-aos="fade-left">
          Xamify ensures secure login, efficient data management, and accurate performance tracking, making exam management digital, smooth, and reliable.
        </p>
        <p data-aos="fade-up">
          Xamify reduces manual work, ensures data accuracy, and helps institutions manage exams more efficiently and transparently.
        </p>

        <h2 data-aos="zoom-in-up">Key Features:</h2>
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">Exam Scheduling</li>
          <li data-aos="fade-up" data-aos-delay="200">Attendance & Internal Marks Management</li>
          <li data-aos="fade-up" data-aos-delay="300">Timetable Scheduling</li>
          <li data-aos="fade-up" data-aos-delay="400">Student Performance Monitoring</li>
          <li data-aos="fade-up" data-aos-delay="500">Automated Reports and Dashboards</li>
        </ul>
      </div>

      {/* Three Cards with Smooth Animations */}
      <div className="card-section">
        <div className="profile-card" data-aos="zoom-in-up" data-aos-delay="100">
          <img src="/dp.jpg" alt="Shivani Hegde" />
          <div>
            <h4>Founder and CEO</h4>
            <p>Shivani Hegde</p>
            <p>...</p>
          </div>
        </div>

        <div className="profile-card" data-aos="zoom-in-up" data-aos-delay="300">
          <img src="/dp.jpg" alt="Ashritha Ananda Kotian" />
          <div>
            <h4>Founder and CEO</h4>
            <p>Ashritha Ananda Kotian</p>
            <p>...</p>
          </div>
        </div>

      
        <div className="profile-card" data-aos="zoom-in-up" data-aos-delay="500">
          <img src="/dp.jpg" alt="New Member" />
          <div>
            <h4>Co-Founder</h4>
            <p>Amrutha & Shreshta Jain</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
