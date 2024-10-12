import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <div className="certification-card-container">
        <div className="certification-card">
          <h3>CyberSecurity</h3>
          <p>Compliance Framework, System Administration, OS Security, Tools and Attacks</p>
          <span>08 - 10/2023</span>
        </div>
        <div className="certification-card">
          <h3>Ethical Hacking and Android App Development</h3>
          <p>MyCaptain</p>
          <span>06 - 11/2023</span>
        </div>
        <div className="certification-card">
          <h3>Data Structures and Programming Languages</h3>
          <p>University of Michigan, Coursera</p>
          <span>06/2022</span>
        </div>
        <div className="certification-card">
          <h3>Artificial Intelligence</h3>
          <p>Academor</p>
          <span>10/2023</span>
        </div>
        <div className="certification-card">
          <h3>Core Java</h3>
          <p>LearnQuest</p>
          <span>04/2023</span>
        </div>
        <div className="certification-card">
          <h3>C, Python and Java</h3>
          <p>Edyst</p>
          <span>06/2023</span>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
