import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import Career from './pages/Career';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';

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
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
