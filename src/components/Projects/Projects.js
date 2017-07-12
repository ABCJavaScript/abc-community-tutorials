import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import Project from './Project';
import './Projects.styl';

const Projects = ({ match, projects, location}) => {
  return (
    <div className="projects">
      <ProjectList match={match} projects={projects} />
      <Switch>
        {/*<Route exact path='/projects' component={ProjectList} />*/}
        <Route path={`${match.url}/:name`} render={(props) => (
          <Project
            {...props}
            projects={projects}
          />
        )}/>
      </Switch>
    </div>
  );
};

export default Projects;