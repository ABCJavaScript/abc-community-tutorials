import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TutorialList from '../Tutorials/TutorialList';
import Tutorial from '../Tutorials/Tutorial';
import './Tutorials.styl';

const Tutorials = ({ match, tutorials, location}) => {
  return (
    <div className="tutorials">
      <TutorialList match={match} tutorials={tutorials} />
      <Switch>
        {/*<Route exact path='/projects' component={ProjectList} />*/}
        <Route path={`${match.url}/:name`} render={(props) => (
          <Tutorial
            {...props}
            tutorials={tutorials}
          />
        )}/>
      </Switch>
    </div>
  );
};

export default Tutorials;