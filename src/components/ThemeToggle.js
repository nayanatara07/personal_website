import React from 'react';
import './ThemeToggle.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark-mode' ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </div>
  );
}

export default ThemeToggle;
