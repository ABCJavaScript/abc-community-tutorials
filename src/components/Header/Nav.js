import React from 'react';
import { Link } from 'react-router-dom';

import './Header.styl';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav-items">
        <li key="home" className="nav-items__nav-item">
          <Link to="/">Home</Link>
        </li>
        <li key="tutorial" className="nav-items__nav-item">
          <Link to="/tutorials">Tutorials</Link>
        </li>
        <li key="projects" className="nav-items__nav-item">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;