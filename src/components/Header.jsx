import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '@logos/cf-logo.png';
import NavItem from './NavItem';
import '@styles/Header.css';


const navData = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Contact',
    route: '/contact',
  },
  {
    name: 'Projects',
    route: '/projects',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Skills',
    route: '/kills',
  }
]

function Header() {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const handleTogle = () => setActive(!active);

  return (
    <header className="Header">
      <nav className="Header--nav">
        <Link className="Header--logo" to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
        <span className='Header--hamburger' onClick={handleTogle}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <ul className="Header--menu-desktop Header--list">
          {navData.map(item => {
            const underline = pathname === item.route ? 'Header--menu-desktop__underline' : '';
            return (
              <NavItem
                underline={underline}
                key={item.name}
                name={item.name}
                route={item.route}
              />
            )
          })}
        </ul>
        {active && (
          <ul className="Header--menu-mobile Header--list">
            {navData.map(item => {
              const underline = pathname === item.route ? 'Header--menu-mobile__underline' : '';
            
              return(
              <NavItem
                underline={underline}
                key={item.name}
                name={item.name}
                route={item.route}
                handleTogle={handleTogle}
              />
            )})}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;