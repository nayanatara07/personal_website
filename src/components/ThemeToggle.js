import React from 'react';
import './ThemeToggle.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark-mode' ? (
        <FaSun className="icon" style={{ color: '#ffffff' }} /> // Sun icon for dark mode
      ) : (
        <FaMoon className="icon" style={{ color: '#ffffff' }} /> // Moon icon for light mode
      )}
    </div>
  );
}

export default ThemeToggle;
