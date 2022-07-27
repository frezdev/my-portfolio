import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '@logos/cf-logo.png';
import '@styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <nav className="Header--nav">
        <Link className="Header--logo" to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
        <span className='Header--hamburger'>
          <i class="fa-solid fa-bars"></i>
        </span>
        <ul className="Header--list">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;