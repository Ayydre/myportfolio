import React from 'react';

class Footer extends React.Component {
  state = {
    clicked: false
  }

  showResume = () => {
    this.setState({ clicked: true });
  }

  render () {
    return (
      <div className="footer">
        <h1 className="footer-title">Want to get in touch?</h1>
        <p>Send me an e-mail and I'll get back to you as soon as possible!</p>
        <a href="mailto:andrekq.le@gmail.com" target="_top" className="email"><span className="email">andrekq.le@gmail.com</span></a>
        <div className="footer-links">
          <a href="https://github.com/Ayydre" className="footer-link"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/andre-kq-le/" className="footer-link2"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href="https://drive.google.com/file/d/1PLHLDEolKZEpBw-DkmIqfaVOYPwTNwiG/view?usp=sharing" className="footer-link"><ion-icon name="document-outline"></ion-icon></a>
        </div>
      </div>
    )
  }
}

export default Footer;
