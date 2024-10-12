import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="header">
      <div className="header-lines">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <h1>Nayana Tara</h1>
      <div className="header-bar"></div>
    </nav>
  );
}

export default Navbar;
