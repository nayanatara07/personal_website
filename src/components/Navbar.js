import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

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

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/career">
            <FaBriefcase className="nav-icon" />
            Career
          </Link>
        </li>
        <li>
          <Link to="/education">
            <FaGraduationCap className="nav-icon" />
            Education
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FaProjectDiagram className="nav-icon" />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/certifications">
            <FaCertificate className="nav-icon" />
            Certifications
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
