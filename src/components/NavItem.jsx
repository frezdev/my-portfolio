import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ name, route, handleTogle, underline}) {
  return (
    <li className={underline} onClick={handleTogle}>
      <Link to={route}>{name}</Link>
    </li>
  );
}

export default NavItem;