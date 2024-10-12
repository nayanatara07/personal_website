import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      
      <ul>
        <li><strong>B.Tech in Computer Science and Engineering</strong> - GITAM Deemed University, Hyderabad (2021 - Present)</li>
        <li><strong>Intermediate (MPC)</strong> - Narayana Junior College, Hyderabad (2019 - 2021) | CGPA: 9.6</li>
        <li><strong>High School</strong> - Atomic Energy Central School, Hyderabad (2014 - 2019) | CGPA: 9.1</li>
      </ul>
      
      <h3>Languages</h3>
      <ul>
        <li><strong>English:</strong> Fluent</li>
        <li><strong>Hindi:</strong> Fluent</li>
        <li><strong>Telugu:</strong> Native</li>
      </ul>
    </div>
  );
}

export default Education;
