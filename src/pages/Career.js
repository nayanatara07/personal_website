import React from 'react';
import './Career.css';

function Career() {
  return (
    <div className="career-container">
      <h2>Career Journey</h2>
      <div className="career-card-container">
        <div className="career-card">
          <h3>MERN Stack and Project Intern</h3>
          <p>VulcanTechs, Vizag</p>
          <span>(08/06/2024 - 30/06/2024)</span>
        </div>
        <div className="career-card">
          <h3>Cybersecurity Intern</h3>
          <p>ECIL, Hyderabad</p>
          <span>(08/05/2024 - 07/06/2024)</span>
        </div>
        <div className="career-card">
          <h3>Python Programming Intern</h3>
          <p>Cipherbyte</p>
          <span>(01/03/2024 - 30/03/2024)</span>
        </div>
        <div className="career-card">
          <h3>Full Stack and Design Intern</h3>
          <p>Oasis Infobyte</p>
          <span>(01/01/2024 - 05/02/2024)</span>
        </div>
        <div className="career-card">
          <h3>Web Development Intern</h3>
          <p>Bharat Intern</p>
          <span>(10/11/2023 - 10/12/2023)</span>
        </div>
      </div>
    </div>
  );
}

export default Career;
