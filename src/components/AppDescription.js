import React, { Component } from 'react';

import { Segment } from 'semantic-ui-react'

class AppDescription extends Component {

  render() {
    return(
      <Segment color="blue"> 
        <h1 className="welcome-header">Welcome to stockNote. </h1>
        <p></p>
        The amateur investment research platform where you can get custom news on your portfolio as well as add notes - so you can keep track of your thinking and analysis.
        <p>Create email alerts and updates so you're always on top of your game!</p>
      </Segment> 
    )
  }

}

export default AppDescription

