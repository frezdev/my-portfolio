import React from 'react';
import '@styles/Info.css';

function Info() {
  return (
    <section className="Info">
      <picture className="Info-image-profile">
        <img src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg" alt="Foto de perfil" />
      </picture>
      <div className="Info--container">
        <h2 className="Info--name">Carlos Florez</h2>
        <h4 className="Info--career">Frontend Developer</h4>
        <p className="Info--description">
          Soy Frontend developer con mas de dos años de experiencia en desarrollo web del lado del cliente. Tengo experiencia en el uso de tecnologias Frontend como HTML, CSS, JavaScript y React <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non doloribus eveniet ratione laborum dolores, voluptatibus obcaecati totam. Mollitia ab accusamus aut porro fugiat alias eveniet nemo vero quas non!
        </p>
        <article className="Info--links">
          <a className="Info--link Info--link__primary" href="./public/contact.html">Contact</a>
          <a className="Info--link Info--link__secundary" href="./public/about.html">About</a>
        </article>
      </div>
    </section>
  );
}

export default Info;