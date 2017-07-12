import React from 'react';
import Nav from './Nav';
import './Header.styl';

const Header = () => {
  return (
    <div className="header">
      <h1 className="site-title">ABC Community Tutorials</h1>
      <Nav />
    </div>
  );
}

export default Header;