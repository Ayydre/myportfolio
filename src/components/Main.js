import React from 'react';

class Main extends React.Component {

  render () {
    return (
      <div className="main">
        <div className="intro">
          <h1 className="name">Andre</h1>
          <h4 className="title">Software Engineer</h4>
          <span className="based">Based in Tampa, FL</span>
        </div>
        <video src="../images/geo.mp4" frameBorder="0" className="d-block w-100" title="lines" autoPlay muted loop allowFullScreen />
      </div>
    );
  }
}

export default Main;
