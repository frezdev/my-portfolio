import React from 'react';
import '@styles/Icon.css';

function Icon({ name, url, icon }) {
  return (
    <li className={`Icon ${name}`}>
      <a target="_blank" href={url}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className={icon}></span>
      </a>
    </li>
  );
}

export default Icon;