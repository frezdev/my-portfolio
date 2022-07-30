import React from 'react';
import '@styles/ProjectItem.css';

function ProjectItem({ image, description, technologies, name, links }) {
  const { viewLink, repoLink } = links;

  return (
    <li className='ProjectItem'>
      <picture className="ProjectItem--image-container">
        <img src={image} alt={name} />
      </picture>
      <div className="ProjectItem--info">
        <p className="ProjectItem--description">
          {description}
        </p>
        <div className="ProjectItem--technologies">
          {technologies.map(technologie => (
            <span key={technologie}>
              {technologie}
            </span>
          ))}
        </div>
        <div className="Projects--links">
          <a className="Projects--links__view" target="_blank" href={viewLink}>View</a>
          <a className="Projects--links__repo" target="_blank" href={repoLink}>Repository</a>
        </div>
      </div>
    </li>
  );
}

export default ProjectItem;