import React, { useState, useEffect } from 'react';
import './App.css';
import faceshot from './images/faceshot.jpg'; // Import the image
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedIn.png';

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlMenu = () => {
    if (window.scrollY < 50) {
      setShowMenu(true); // Always show the menu when near the top
    } else if (window.scrollY > lastScrollY) {
      setShowMenu(false); // Hide menu on scroll down
    } else {
      setShowMenu(true); // Show menu on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlMenu);

    return () => {
      window.removeEventListener('scroll', controlMenu);
    };
  }, [lastScrollY]);

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src={faceshot} alt="Logo" className="logo-image" />
            <div className="logo">
              Tomas Smitas <br />
              <span className="subtitle">(Full Stack Developer)</span>
            </div>
          </div>
          <div className="welcome">
            Welcome
          </div>
          <div className="social-media">
            <a href="https://github.com/C00276177Tomas" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-logo" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="GitHub" className="social-logo" />
            </a>
          </div>
          <div className={`menu ${showMenu ? 'show' : 'hide'}`}>
            <ul className="nav-links">
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="intro">
          <h1>My vision and passion</h1>
          <p>For me, the most important aspect of software is functionality. I appreciate simplicity and clarity above all.
            I enjoy frontend and backend development. I have a passionate interest in AI, my main iterest includes the implementation
            of AI to solve real world problems.
          </p>
        </section>
        <section id="experience">
          <h2>About Us</h2>
          <p>Learn more about what we do.</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
        <section id="projects">
          <h2>Our Services</h2>
          <p>We offer a variety of services.</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us.</p>
        </section>
      </main>
    </div>
  );
}

export default App;