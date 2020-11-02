import './App.css';
import Nav from './components/Navbar.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Project from './components/Projects.js';
import Footer from './components/Footer.js';
import './styles/navbar.css';
import './styles/main.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
