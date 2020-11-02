import React from 'react';

class About extends React.Component {

  render () {
    return (
      <div className="about-area">
        <h1 className="about">About me</h1>
        <div className="bio-area">
          <div className="pic">
           <img src="../images/me.jpeg" alt="me" className="me"/>
          </div>
          <div className="bio">
            <p className="bio-text"><ion-icon name="code-slash-outline"></ion-icon> I am a developer with skills in both front-end and back-end applications. I desire to collaborate with other professionals to build innovative and useful applications. I strive to add my own flavor into captivating designs while focusing on code efficiency, speed optimization, and seamless user experience. I am continuously learning and pushing towards mastering my craft.
            </p>
          <button type="button" className="btn btn-secondary about-button"><a href="https://drive.google.com/file/d/1ohM-IMlLny68M_9YrJdmRg-2E-1WHcCg/view?usp=sharing" className="resume-button"><ion-icon name="document-outline"/> resume</a></button>
          </div>
        </div>
        <div className="technology">
          <h1 className="tech">Technologies</h1>
          <div className="tech-icons">
            <a href="/" className="techno"><ion-icon name="logo-html5"></ion-icon></a>
            <a href="/" className="techno"><ion-icon name="logo-css3"></ion-icon></a>
            <a href="/" className="techno"><ion-icon name="logo-javascript"></ion-icon></a>
            <a href="/" className="techno"><ion-icon name="logo-react"></ion-icon></a>
            <a href="/" className="techno"><ion-icon name="logo-nodejs"></ion-icon></a>
            <a href="/" className="techno"><ion-icon name="logo-sass"></ion-icon></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
