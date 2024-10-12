import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Profile />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
