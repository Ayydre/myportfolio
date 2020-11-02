import React from 'react';

class Nav extends React.Component {

  render () {
    return (
      <div className="navbar nav">
        <h4>andrele</h4>
        <div className="links">
          <a href="https://github.com/Ayydre" className="link"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/andre-kq-le/" className="link2"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
    );
  }
}

export default Nav;
