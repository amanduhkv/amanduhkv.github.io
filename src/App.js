import logo from './assets/av-portfolio.svg';
import res from './assets/Vien_Amanda_Resume.pdf';

import css from './assets/skills/css.svg';
import docker from './assets/skills/docker.svg';
import ex from './assets/skills/ex.svg';
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

import prof_pic from './assets/images/prof-pic.jpg';
import behrbnb from './assets/images/behrbnb-splash.jpg';
import squeal from './assets/images/squeal-splash.jpg';
import slate from './assets/images/slate-splash.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <body class="is-preload">


        <div id="wrapper" class="fade-in">


          <div id="intro">
            <img id='av-logo' src={logo} alt='prof-pic' />
            <h1>Amanda<br />
              Vien</h1>
            <p>Writing code 🤝 Broken by a comma</p>
            <ul class="actions">
              <li><a href="#profpic" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
          </div>


          {/* <header id="header">
        <a href="index.html" class="logo">Massively</a>
      </header> */}


          <nav id="nav">
            <ul class="links">
              <li class="active"><a href="index.html">This is Me</a></li>
              {/* <li><a href="generic.html">Generic Page</a></li>
          <li><a href="elements.html">Elements Reference</a></li> */}
            </ul>
            {/* <ul class="icons">
              <li><a href="https://github.com/amanduhkv" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="https://www.linkedin.com/in/amandakvien/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
              <li><a href="https://angel.co/u/amanda-vien" target="_blank" rel="noopener noreferrer" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>
            </ul> */}
          </nav>


          <div id="main">


            <article class="post featured">
              <header class="major">
                <span><img id='profpic' className='profpic' src={prof_pic} alt='prof-pic' /></span>
                <span class="date"><h2>About Me</h2></span>
                {/* <h2><a href="#">And this is a<br />
              massive headline</a></h2> */}
                <p>Hi, hello! I'm a full-stack software engineer with the passion to connect my creative background with my analytical nature. With a previous Bachelor's of Science in Biochemistry and the lack of dedication to this field, I decided to follow my passion for creativity and motivation to continue learning by entering into the software development field. After completing a few beginner JavaScript courses online, I fell in love with the code and was determined to find a more structured environment to hone my skills and learn what was necessary to be successful within this field.</p>

                <p>
                  The rigorous course at App Academy provided me the structure I needed as a new developer to learn the technologies needed within the modern world as well as the ability to adapt to a quick-paced environment. As a recent graduate at App Academy, I was able to successfully launch three full-stack projects within the equivalent of one month. Within the span of 5 months, I learned several programming languages, libraries, and databases, such as: JavaScript, Python, HTML, CSS, React/Redux, SQL, SQLite, and Express.js.</p>

                <p>
                  This change in direction has made me feel a greater sense of fulfillment and love for what I do, and I truly want to continue on building my career in full stack development while expanding my knowledge from my teammates, peers, and any future projects.</p>
              </header>
              <a href="#" class="image main"><img src="./assets/images/pic01.jpg" alt="" /></a>
            </article>

            <article class="post featured">
              <header class="major">
                <span class="date"><h2>Skills</h2></span>
              </header>
              <div>
                <div id='skillsdiv'>
                  <img id='skill' src={js} alt='skills' height='125px' />
                  <img id='skill' src={py} alt='skills' height='125px' />
                  <img id='skill' src={css} alt='skills' height='125px' />
                  <img id='skill' src={html} alt='skills' height='125px' />
                  <img id='skill' src={reacts} alt='skills' height='125px' />
                  <img id='skill' src={redux} alt='skills' height='125px' />
                  <img id='skill' src={ex} alt='skills' height='125px' />
                  <img id='skill' src={node} alt='skills' height='125px' />
                  <img id='skill' src={flask} alt='skills' height='125px' />
                  <img id='skill' src={postgresql} alt='skills' height='125px' />
                  <img id='skill' src={docker} alt='skills' height='125px' />
                  <img id='skill' src={git} alt='skills' height='125px' />
                  <img id='skill' src={github} alt='skills' height='125px' />
                  <img id='skill' src={heroku} alt='skills' height='125px' />
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </article>



            <article class="post featured">
              <header class="major">
                <span class="date"><h2>Projects</h2></span>
              </header>
            </article>
            <section class="posts">
              {/* ------------------ SLATE ------------------ */}
              <article>
                <header>
                  <span class="date">October 2022</span>
                  <h2><a href="https://slate-canva.herokuapp.com" target="_blank" rel="noopener noreferrer">Slate</a></h2>
                </header>
                <a href="https://slate-canva.herokuapp.com" target="_blank" rel="noopener noreferrer" class="image fit"><img src={slate} alt="slate" /></a>
                <p>A web application, inspired by Canva, allowing users to have an easy-to-use graphic design tool at their fingertips.</p>
                <ul class="actions special">
                  <li><a href="https://slate-canva.herokuapp.com" target="_blank" rel="noopener noreferrer" class="button">Link</a></li>
                  <li><a href="https://github.com/amanduhkv/slate" target="_blank" rel="noopener noreferrer" class="button">Github Repository</a></li>
                </ul>
              </article>
              {/* ------------------ SQUEAL ------------------ */}
              <article>
                <header>
                  <span class="date">October 2022</span>
                  <h2><a href="https://squeal-yelp.herokuapp.com" target="_blank" rel="noopener noreferrer" >Squeal</a></h2>
                </header>
                <a href="#" class="image fit"><img src={squeal} alt="squeal" /></a>
                <p>A 4-team project inspired by Yelp, allowing users to search for a list of food choices and restaurants based on names, location, category, or review.</p>
                <ul class="actions special">
                  <li><a href="https://squeal-yelp.herokuapp.com" target="_blank" rel="noopener noreferrer" class="button">Link</a></li>
                  <li><a href="https://github.com/amanduhkv/Squeal" target="_blank" rel="noopener noreferrer" class="button">Github Repository</a></li>
                </ul>
              </article>
              {/* ------------------ BEHRBNB ------------------ */}
              <article>
                <header>
                  <span class="date">August 2022</span>
                  <h2><a href="https://behrbnb.herokuapp.com" target="_blank" rel="noopener noreferrer" >Behrbnb</a></h2>
                </header>
                <a href="#" class="image fit"><img src={behrbnb} alt="behrbnb" /></a>
                <p>A listing website inspired by Airbnb, dedicated to allowing users to upload and review listings. First full-stack application created.</p>
                <ul class="actions special">
                  <li><a href="https://behrbnb.herokuapp.com" target="_blank" rel="noopener noreferrer" class="button">Link</a></li>
                  <li><a href="https://github.com/amanduhkv/Behrbnb" target="_blank" rel="noopener noreferrer" class="button">Github Repository</a></li>
                </ul>
              </article>
              <article>
                <header>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>More projects to come!</h2>
                </header>

                {/* <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
              <ul class="actions special">
                <li><a href="#" class="button">Full Story</a></li>
              </ul> */}
              </article>

            </section>


            {/* <footer>
            <div class="pagination">

              <a href="#" class="page active">1</a>
              <a href="#" class="page">2</a>
              <a href="#" class="page">3</a>
              <span class="extra">&hellip;</span>
              <a href="#" class="page">8</a>
              <a href="#" class="page">9</a>
              <a href="#" class="page">10</a>
              <a href="#" class="next">Next</a>
            </div>
          </footer> */}

          </div>


          <footer id="footer">
            {/* <section>
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
        </section> */}
            <section class="split contact">
              <section class="alt">
                <h3>Location</h3>
                <p>San Jose, California</p>
              </section>
              <section>
                <h3>Phone</h3>
                <p>(408) 821-2211</p>
              </section>
              <section>
                <h3>Email</h3>
                <p>amandakvien@gmail.com</p>
              </section>

              <section>
                {/* <h3>Social</h3> */}
                <ul class="icons alt">
                  <li><a href="https://github.com/amanduhkv" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                  <li><a href="https://www.linkedin.com/in/amandakvien/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                  <li><a href="https://angel.co/u/amanda-vien" target="_blank" rel="noopener noreferrer" class="icon brands fa-angellist"><span class="label">AngelList</span></a></li>
                  <li><a href={res} target="_blank" rel="noopener noreferrer"><span class="label" id='resume'>Resume</span></a></li>
                </ul>
              </section>

              <section class="alt"><a href='#'>Back to top</a></section>
            </section>
          </footer>


          <div id="copyright">
            <ul><li>&copy; amanda vien 2022</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
          </div>

        </div>
        <script src="./assets/assets/js/jquery.min.js"></script>
        <script src="./assets/assets/js/jquery.scrollex.min.js"></script>
        <script src="./assets/assets/js/jquery.scrolly.min.js"></script>
        <script src="./assets/assets/js/browser.min.js"></script>
        <script src="./assets/assets/js/breakpoints.min.js"></script>
        <script src="./assets/assets/js/util.js"></script>
        <script src="./assets/assets/js/main.js"></script>

      </body>
    </div>
  );
}

export default App;
