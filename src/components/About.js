import React, { useState } from 'react';
import './App.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Navbar from './Navbar'; 
import About from './About';   

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar /> 
      <About />  
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark-mode' ? (
          <FaSun className="icon" />
        ) : (
          <FaMoon className="icon" />
        )}
      </div>
    </div>
  );
}

export default App;
