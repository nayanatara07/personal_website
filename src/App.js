import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import Career from './pages/Career';
import Achievements from './pages/Achievements';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/career" element={<Career />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
