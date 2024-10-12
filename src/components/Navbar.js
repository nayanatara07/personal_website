import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header">
      <h1>Nayana Tara</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
        </ul>
      )}
      <div className="header-bar"></div>
    </nav>
  );
}

export default Navbar;
