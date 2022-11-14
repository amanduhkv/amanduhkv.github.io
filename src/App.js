import logo from './assets/av-portfolio.svg';
// import header from './assets/github_header.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={header} className='header-img' alt='header' /> */}
      {/* <div>Amanda Vien</div> */}
      </header>
      <main>
        projects go here
      </main>
      <footer className="App-footer">
        links go here
      </footer>
    </div>
  );
}

export default App;
