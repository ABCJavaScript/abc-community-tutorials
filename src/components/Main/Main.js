import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
// import Project from '../Project/Project';
import Tutorials from '../Tutorials/Tutorials';
import './Main.styl';

const Main = ({ tutorials, projects }) => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tutorials" render={(props) => (
          <Tutorials 
            {...props}
            tutorials={tutorials}
          />
        )}/>
        <Route path="/projects" render={(props) => (
          <Projects 
            {...props}
            projects={projects} />
        )}/>
      </Switch>
    </div>
  );
};

export default Main;