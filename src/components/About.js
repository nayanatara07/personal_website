import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="avatar">
        <img src="./avatar.png" alt="avatar" />
      </div>
      <h1>NayanaTara</h1>
      <h2>Software Developer | Tech Enthusiast</h2>
      <ul className="social-links">
        <li>
          <a href="https://github.com/NayanaTara" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/NayanaTara_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/nayana-tara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <p><a href="/posts/" aria-label="Explore more">Explore </a></p>
    </section>
  );
}

export default About;
