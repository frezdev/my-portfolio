import React from 'react';
import ProjectItem from '@components/ProjectItem';
import projectsData from '../data/projectsData';
import '@styles/Projects.css';

function Projects() {
  return (
    <main className="Projects">
      <ul className="Projects--list">
        {projectsData.map(project => (
          <ProjectItem
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </ul>
    </main>
  );
}

export default Projects;