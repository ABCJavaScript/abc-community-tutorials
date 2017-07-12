import React from 'react';
import './Projects.styl';

const Project = ({ match, projects }) => {
  const project = projects.filter((project) => {
    return match.params.name === project.name.split(' ').join('-').toLowerCase();
  })[0];

  return (
    <div className="project-container">
      <div className="project">
        <h1>{match.params.name}</h1>
        <div>
          <p>{project.name}</p>
          <p>{project.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;