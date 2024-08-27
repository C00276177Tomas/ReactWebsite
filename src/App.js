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
            <a href="https://www.linkedin.com/in/tomas-smitas-a43aa2104/" target="_blank" rel="noopener noreferrer">
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
          <p>
            For me, the core of software development is functionality. I value simplicity and clarity, focusing on creating both 
            intuitive frontends and efficient backends. My goal is to develop solutions that effectively address real-world problems 
            and enhance user experiences.
          </p>

          <p>
            I am particularly passionate about artificial intelligence and its potential to drive innovation. I am dedicated to 
            applying AI to tackle complex challenges and improve technological solutions. By blending my technical skills with a 
            strong interest in AI, I aim to contribute to meaningful advancements and create impactful, practical applications.
          </p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <div class="job">
              <h3>Netwatch – Research & Development Department (Software Development Intern)</h3>
              <p class="dates">Jan 2024 – July 2024</p>
              <ul>
                  <li>Contributed to the development of software solutions across web pages, mobile apps (Android and iOS), and in-house applications within a Scrum framework.</li>
                  <li>Performed coding, debugging, and testing applications, collaborating closely with senior developers.</li>
                  <li>Gained extensive knowledge in areas such as Azure DevOps, Git, Visual Studio, Visual Studio Code, React, Typescript, C#, Team Coding, GraphQL, SQL, Packages, Libraries, Test Cases, Mobile Applications, etc.</li>
                  <li>Implemented new features and resolved bugs and defects in existing software, improving user experience.</li>
                  <li>Participated in team meetings like Sprint Planning, Daily Stand Up, Weekly Stand Up, Planning Poker, Peer Reviews, Team Days Out, etc.</li>
                  <li>Contributed to documentation and user manuals, aiding in the understanding of React's Material React Tables V2 for developers that haven’t worked on MRT before.</li>
              </ul>
          </div>

          <div class="job">
              <h3>Integer – Medical Manufacturing (General Operative)</h3>
              <p class="dates">Sept 2018 – Jan 2024</p>
              <ul>
                  <li>Worked in multiple departments on assembly lines with team sizes of 4 to 8 to produce life-saving equipment that was subject to very high-quality standards.</li>
                  <li>Worked on the module which is a big machine that needs to be constantly maintained. My tasks included cutting coils to length, loading machine, maintaining loaders, maintaining welders, lasering, preventative maintenance, inspecting welds, and reworking or disposing of defective guides.</li>
                  <li>Operated and maintained precision manufacturing equipment, ensuring adherence to strict quality standards.</li>
                  <li>Collaborated with cross-functional teams to meet production targets, contributing to the timely delivery of medical devices.</li>
                  <li>Conducted quality inspections and tests, ensuring products met regulatory compliance and specifications.</li>
                  <li>Worked with a kanban system that ensured efficiency.</li>
              </ul>
          </div>
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
      </main>
      <footer>
        <section id="contact">
        <p>Contact Information:</p>
        <p>Email: <a href="mailto:tomassmitas@yahoo.com">tomassmitas@yahoo.com</a></p>
        <p>Phone: 083 358 8363</p>
        <div className="social-media-linear">
          <a href="https://github.com/C00276177Tomas" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-logo-linear" />
          </a>
          <a href="https://www.linkedin.com/in/tomas-smitas-a43aa2104/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="GitHub" className="social-logo-linear" />
          </a>
        </div>
        </section>
      </footer>
    </div>
  );
}

export default App;