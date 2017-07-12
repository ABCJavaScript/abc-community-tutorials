import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import sample from '../../sample';
import tutorials from '../../tutorials.json';
import './App.styl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: sample
    };
  }
  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <Header />
        <Main projects={projects} tutorials={tutorials} />
      </div>
    );
  }
}

export default App;
