import React from 'react';
import './Profile.css';
import avatar from './avatar.png'; // Adjust the path if needed
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Profile() {
  return (
    <div className="container">
      <img src={avatar} alt="Nayana Tara" className="avatar" />
      <h2 className="subtitle">Software Developer | MERN Stack Enthusiast</h2>
      <div className="social-icons">
        <a href="https://github.com/nayanatara07" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/NayanaTara07" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/nayanatara07/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <a href="#explore" className="explore-link">Explore →</a>
    </div>
  );
}

export default Profile;
