import React from 'react';  
import '@styles/Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <article className="Footer--social-media">
        <h3 className="Footer--social-media__title">Social Media:</h3>
        <ul className="Footer--social-media__list">
          <li className="Footer--social-media__item">
            <a target="_blank" href="https://github.com/carlosandf">GitHub</a>
          </li>
          <li>
            <a className="Footer--social-media__item" target="_blank" href="https://linkedin.com">Linkedin</a>
          </li>
          <li>
            <a className="Footer--social-media__item" target="_blank" href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </article>
      <p>Todos los derechos reservados 2022 @carlosandf</p>
    </footer>
  );
}

export default Footer;