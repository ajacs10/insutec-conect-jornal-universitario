// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import journalContent from '../data/journalContent';
import './Header.css';

function Header() {
  const { logoSrc, title, navLinks } = journalContent.header;

  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src={logoSrc} alt="Logo" />
          </Link>
          <h1>{title}</h1>
        </div>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;