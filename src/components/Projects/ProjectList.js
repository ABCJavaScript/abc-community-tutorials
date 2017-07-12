import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.styl';

const ProjectList = ({ match, projects }) => {
  projects = projects.map((project) => {
    const projectName = project.name.split(' ').join('-').toLowerCase();
    return (
      <li key={project.id} className="project-list-item">
        <Link to={{ 
          pathname: `${match.url}/${projectName}`,
          state: "Example"
        }}>{project.name}</Link>
      </li>
    );
  });

  return (
    <div className="project-list">
      <h2>Project List</h2>
      <ul className="project-list-items">
        {projects} 
      </ul>
    </div>
  );
};

export default ProjectList;