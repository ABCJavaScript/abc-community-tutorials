import React from 'react';
import { Link } from 'react-router-dom';

const TutorialList = ({ match, tutorials }) => {
  tutorials = Object.keys(tutorials).map((name) => {
    const slug = name.split(' ').join('-').toLowerCase();
    const tutorial = tutorials[name];
    console.log(tutorial)
    return (
      <li key={tutorial.id} className="tutorial-list-item">
        <Link to={{ 
          pathname: `${match.url}/${slug}`,
          state: "Example"
        }}>{tutorial.name}</Link>
      </li>
    );
  });

  return (
    <div className="tutorial-list">
      <h2>Tutorial List</h2>
      <ul className="tutorial-list-items">
        {tutorials} 
      </ul>
    </div>
  );
};

export default TutorialList;