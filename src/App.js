import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import avatar from './components/avatar.png';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <div className="header-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <h1>Nayana Tara</h1>
      </header>
      <div className="header-bar"></div>
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
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark-mode' ? <FaSun className="icon" /> : <FaMoon className="icon" />}
      </div>
    </div>
  );
}

export default App;
