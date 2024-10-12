import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navigation">
      <section className="container">
        <a className="navigation-title" href="/">NayanaTara</a>
        <input type="checkbox" id="menu-toggle" />
        <label className="menu-button float-right" htmlFor="menu-toggle">
          <i className="fa fa-bars fa-fw" aria-hidden="true"></i>
        </label>
        <ul className="navigation-list">
          <li className="navigation-item">
            <a className="navigation-link" href="/posts/">Posts</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
