import React, { Component } from 'react';
import './Projects.styl';

class CurrentProject extends Component {
  render() {
    const { project } = this.props;
    console.log(project);
    return (
      <div className="Current-Project">
        Current Project
      </div>
    );
  }
}

export default CurrentProject;