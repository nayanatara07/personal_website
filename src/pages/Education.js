import React from 'react';
import './Education.css';

function Education() {
  const education = [
    { title: "B.Tech in Computer Science and Engineering", institution: "GITAM Deemed University", duration: "2021 - Present | CGPA: 9.0" },
    { title: "Intermediate (MPC)", institution: "Narayana Junior College", duration: "2019 - 2021 | CGPA: 9.6" },
    { title: "High School", institution: "Atomic Energy Central School", duration: "2014 - 2019 | CGPA: 9.1" },
  ];

  return (
    <div className="education-container">
      <h2>Education Timeline</h2>
      <div className="timeline-container">
        {education.map((edu, index) => (
          <div className="timeline-card" key={index}>
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
            <span>{edu.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
