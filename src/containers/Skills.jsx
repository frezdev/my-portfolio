import React from 'react'
import htmlLogo from '@logos/html-logo.svg';
import cssLogo from '@logos/css-logo.png';
import javaScriptLogo from '@logos/javascript-logo.svg';
import reactLogo from '@logos/react-logo.svg';

function Skills() {
  return (
    <section className="Skills">
      <ul className="Skills--list">
        <li>
          <img src={htmlLogo} alt="html image" />
          <p>HTML</p>
        </li>
        <li>
          <img src={cssLogo} alt="css image" />
          <p>CSS</p>
        </li>
        <li>
          <img src={javaScriptLogo} alt="javascript image" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src={reactLogo} alt="react image" />
          <p>React</p>
        </li>
      </ul>
    </section>
  )
}

export default Skills