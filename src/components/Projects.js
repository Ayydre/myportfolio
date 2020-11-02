import React from 'react';

class Project extends React.Component {

  render () {
    return (
      <div className="project-area">
        <h1 className="project-label">Projects</h1>
        <div className="projects">
          <div className="project">
            <div className="project-image">
              <a href="/"><img src="../images/whereto.jpeg" alt="project" className="project-img"/></a>
            </div>
            <h2 className="project-title">Whereto</h2>
            <span className="project-info">WhereTo is an app dedicated to helping groups decide on weekend plans or where to eat.</span>
            <a href="https://github.com/Ayydre/where_we_goin" className="repo">repo link</a>
          </div>
          <div className="project">
            <div className="project-image">
              <a href="https://ayydre.github.io/lol-app/"><img src="../images/lolapp.png" alt="project" className="project-img"/></a>
            </div>
            <h2 className="project-title">LoL App</h2>
            <span className="project-info">An app providing champion stats from League of Legends, utilizing their API.</span>
            <a href="https://github.com/Ayydre/ayydre.github.io" className="repo">repo link</a>
          </div>
          <div className="project">
            <div className="project-image">
              <a href="http://too-low-for-comfort.herokuapp.com/toolow"><img src="../images/toolow.png" alt="project" className="project-img"/></a>
            </div>
            <h2 className="project-title">TooLowForComfort</h2>
            <span className="project-info">A website based off my personal brand, Too Low For Comfort, includes a shop and a blog.</span>
            <a href="https://github.com/Ayydre/project2" className="repo">repo link</a>
          </div>
          <div className="project">
            <div className="project-image">
              <a href="http://travel-gram-app.herokuapp.com/"><img src="../images/travelgram.png" alt="project" className="project-img"/></a>
            </div>
            <h2 className="project-title">TravelGram</h2>
            <span className="project-info">A blog style website that allows you to post your recent travels with your friends and they can comment on your posts.</span>
            <a href="https://github.com/onerivas/CardGameApp/tree/master" className="repo">repo link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
