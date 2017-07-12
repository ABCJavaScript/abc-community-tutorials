import React from 'react';
import './Home.styl';

const Home = () => {
  return (
    <div className="home">
      <h1 className="page-title">Welcome to ABC Community Tutorials and Projects!</h1>
      <p>Build and learn together with Slack!</p>
      <h2 className="features">Feature Ideas:</h2>
      <ul className="features-list">
        <li>
          <input className="check" type="checkbox" disabled />
          Integrate with Slack user groups</li>
        <li>
          <input className="check" type="checkbox" disabled />
          View working tutorials and demos
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Share and collaborate on projects
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Create a user account
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Join a project
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Create and edit projects
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Vote on projects
        </li>
        <li>
          <input className="check" type="checkbox" disabled />
          Give and get feedback on projects
        </li>
      </ul>
    </div>
  );
};

export default Home;