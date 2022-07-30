import React from 'react';  
import '@styles/Footer.css';
import SocialMediaIcons from './SocialMediaIcon';

function Footer() {
  return (
    <footer className="Footer">
      <article className="Footer--social-media">
        <h3 className="Footer--social-media__title">Social Media</h3>
        <SocialMediaIcons />
      </article>
      <p>Todos los derechos reservados 2022 @carlosandf</p>
    </footer>
  );
}

export default Footer;