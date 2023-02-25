import logo from './assets/images/logo.png';
import prof from './assets/images/wave.png';
import mid from './assets/images/middle.JPG';
import out from './assets/images/outro.png';

import res from './assets/Vien_Amanda_Resume.pdf';

import css from './assets/skills/css.svg';
import docker from './assets/skills/docker.svg';
import ex from './assets/skills/ex.png';
import flask from './assets/skills/flask.svg';
import git from './assets/skills/git.svg';
import github from './assets/skills/github.svg';
import heroku from './assets/skills/heroku.svg';
import html from './assets/skills/html.svg';
import js from './assets/skills/js.svg';
import node from './assets/skills/node.svg';
import postgresql from './assets/skills/postgresql.svg';
import py from './assets/skills/py.svg';
import reacts from './assets/skills/react.svg';
import redux from './assets/skills/redux.svg';

import behrbnb from './assets/images/behrbnb-splash.jpg';
import squeal from './assets/images/squeal-splash.jpg';
import slate from './assets/images/slate-splash.jpg';

import './App.css';
import reveal from './scroll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='#'>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <section>
          <ul>
            <li><a href='#about-me'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact-info'>Contact</a></li>
            <li><a href={res} target="_blank" rel="noopener noreferrer"><span class="label" id='resume'>Resume</span></a></li>
          </ul>
        </section>
        <section>
          <ul class="icons alt">
            <li><a href="https://github.com/amanduhkv" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/amandakvien/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            <li><a href="https://angel.co/u/amanda-vien" target="_blank" rel="noopener noreferrer" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>

          </ul>
        </section>
      </header>
      <body className="App-body">

        <div className='intro' id='intro'>
          <section>
            <p id='intro-sent'>Hi, my name is</p>
            <h1>Amanda Vien.</h1>
            <p id='intro-p'>I'm recent full-stack software development graduate with a passion for front-end development, connecting my love for creativity with my love for software development. Thanks for stopping by!</p>
          </section>
          <section>
            <img src={prof} className='prof' alt='prof-pic' />
          </section>
        </div>

        <div className='about-me reveal' id='about-me'>
          <section>
            <img src={mid} className='mid' alt='prof-pic' />
          </section>
          <section id='text'>
            <h2>About Me</h2>
            <p>
              Hi, hello! I'm a full-stack software engineer with the passion to connect my creative background with my analytical nature. With a previous Bachelor's of Science in Biochemistry and the lack of inspiration from this field, I decided to follow my passion for creativity and motivation to continue learning by entering into the software development field. After completing a few beginner JavaScript courses online from Codecademy, I fell in love with the code and was determined to find a more structured environment to hone my skills and learn what was necessary to be successful within this field.
              <br />
              <br />
              The rigorous, 24-week course at App Academy provided me the structure I needed as a new developer to learn the technologies needed within the modern world as well as the ability to adapt to a quick-paced environment. As a recent graduate at App Academy, I was able to successfully launch three full-stack projects within the equivalent of one month. Within the span of 5 months, I learned several programming languages, libraries, and databases, such as: JavaScript, Python, HTML, CSS, React/Redux, SQL, SQLite, and Express.js.
              <br />
              <br />
              This change in direction has made me feel a greater sense of fulfillment and love for what I do, and I truly want to continue on building my career in full stack development while expanding my knowledge from my teammates, peers, and any future projects.
              <br />
              <br />
              When I'm not coding, I love to draw, workout, catch up on shows, learn something new, or hangout with friends!
            </p>
          </section>
        </div>

        <div className='projects reveal' id='projects'>
          <section id='proj-container'>
            <h2>Projects</h2>
            <div className='proj-div'>
              <section>
                <a href='https://slate-canva.herokuapp.com/' className='proj-photo'>
                  <img src={slate} alt='slate' className='proj-photo' />
                </a>
                <div className='proj-text'>
                  <h3 id='proj-title'>Slate</h3>
                  <p id='proj-desc'>
                    A web application, inspired by Canva, allowing users to have an easy-to-use graphic design tool at their fingertips.
                  </p>
                  <p id='proj-tech'>
                    React Redux Python Flask HTML CSS JavaScript Postgres Docker Heroku
                  </p>
                  <div>
                    <a href='https://github.com/amanduhkv/slate' id='proj-icons' className='icon brands fa-github' target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://slate-canva.herokuapp.com/' id='proj-icons' className="fa-solid fa-arrow-up-right-from-square" target="_blank" rel="noopener noreferrer"></a>
                  </div>
                </div>
              </section>
              <section>
                <a href='https://squeal-yelp.herokuapp.com/' className='proj-photo-alt'>
                  <img src={squeal} alt='behrbnb' />
                </a>
                <div className='proj-text-alt'>
                  <h3 id='proj-title'>Squeal</h3>
                  <p id='proj-desc'>
                    A 4-team project inspired by Yelp, allowing users to search for a list of food choices and restaurants based on names, location, category, or review.
                    <br />
                    <br />
                    Collaborated with my team to create a beautifully functioning site. Took initiative in designing logos and icons to be cohesive with the theme of our project.
                  </p>
                  <p id='proj-tech'>
                    React Redux Python Flask HTML CSS JavaScript Postgres Docker Heroku
                  </p>
                  <div>
                    <a href='https://github.com/amanduhkv/Squeal' id='proj-icons' className='icon brands fa-github' target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://squeal-yelp.herokuapp.com/' id='proj-icons' className="fa-solid fa-arrow-up-right-from-square" target="_blank" rel="noopener noreferrer"></a>
                  </div>
                </div>
              </section>
              <section>
                <a href='https://behrbnb.herokuapp.com/' className='proj-photo'>
                  <img src={behrbnb} alt='behrbnb' className='proj-photo' />
                </a>
                <div className='proj-text'>
                  <h3 id='proj-title'>Behrbnb</h3>
                  <p id='proj-desc'>
                    A listing website inspired by Airbnb, dedicated to allowing users to upload and review listings. I learned how to create a full-stack application for the first time.
                  </p>
                  <p id='proj-tech'>
                    React Redux Express.JS Node.JS Sequelize HTML CSS Postgres Heroku
                  </p>
                  <div>
                    <a href='https://github.com/amanduhkv/Behrbnb' id='proj-icons' className='icon brands fa-github' target="_blank" rel="noopener noreferrer"></a>
                    <a href='https://behrbnb.herokuapp.com/' id='proj-icons' className="fa-solid fa-arrow-up-right-from-square" target="_blank" rel="noopener noreferrer"></a>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>

        <div className='skills reveal' id='skills'>
          <section>
            <h2>Skills</h2>
          </section>
          <section className='skills-icons'>
            <div id='skillsdiv'>
              <img id='skill' src={js} alt='skills' />
              <img id='skill-1' src={py} alt='skills' />
              <img id='skill' src={css} alt='skills' />
              <img id='skill-1' src={html} alt='skills' />
              <img id='skill' src={reacts} alt='skills' />
              <img id='skill-1' src={redux} alt='skills' />
              <img id='skill' src={ex} alt='skills' />
              <img id='skill-1' src={node} alt='skills' />
              <img id='skill' src={flask} alt='skills' />
              <img id='skill-1' src={postgresql} alt='skills' />
              <img id='skill' src={docker} alt='skills' />
              <img id='skill-1' src={git} alt='skills' />
              <img id='skill' src={github} alt='skills' />
              <img id='skill-1' src={heroku} alt='skills' />
            </div>
          </section>
        </div>

        <div className='contact-info reveal' id='contact-info'>
          <section>
            <h2>Get in Touch</h2>
          </section>
          <section className='contact-info-text'>
            <p>
              I'm currently looking for a <span>frontend software developer</span> role, and would love to continue my journey with you!
            </p>
          </section>
          <section>
            <a href="mailto: amandakvien@gmail.com" target="_blank" rel="noopener noreferrer" id='contact-icons' className="fa-solid fa-envelope"></a>
            <a href="https://www.linkedin.com/in/amandakvien/" target="_blank" rel="noopener noreferrer" id='contact-icons' className="icon brands fa-linkedin-in"></a>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
