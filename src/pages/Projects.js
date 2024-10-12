import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-card-container">
        <div className="project-card">
          <h3>FacePeep Training App</h3>
          <p>React and Notion</p>
          <span>Present</span>
        </div>
        <div className="project-card">
          <h3>Tara's Recipe Haven</h3>
          <p>MEAN Stack</p>
          <span>06/2024</span>
        </div>
        <div className="project-card">
          <h3>Face Recognition Based Attendance Management System</h3>
          <p>AI and ML</p>
          <span>04/2024</span>
        </div>
        <div className="project-card">
          <h3>Netflix Clone, Portfolio Website</h3>
          <p>Front-End Projects</p>
          <span>2023 - 2024</span>
        </div>
        <div className="project-card">
          <h3>Weather App, Real-time Chat, Rock-Paper-Scissors Game</h3>
          <p>Mini Practice Projects</p>
          <span>2023 - 2024</span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
