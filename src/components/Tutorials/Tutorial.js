import React from 'react';

const Tutorial = ({ match, tutorials }) => {
  let tutorial = Object.keys(tutorials).filter((name) => {
    return match.params.name === name.split(' ').join('-').toLowerCase();
  })[0]
  // tutorial = JSON.stringify(tutorial);
  tutorial = tutorials[tutorial];
  return (
    <div className="tutorial-container">
      <div className="tutorial">
        <h1>{match.params.name}</h1>
        <div>
          <code>{JSON.stringify(tutorial, null, 2)}</code>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;