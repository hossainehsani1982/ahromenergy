import './App.css';
import { Routes, Route , Link} from 'react-router-dom';
import Header from './Header';
import Body from './Body';




function Footer() {
  return (
      <footer className='Footer'>
          <nav className='nav-container'>
              <Link to='/' className='nav-item'>Home</Link>
              <Link to='/about' className='nav-item'>About</Link>
              <Link to='/abilities' className='nav-item'>Abilities</Link>
              <Link to='/projects' className='nav-item'>Projects</Link>
              <Link to='/products' className='nav-item'>Products</Link>
              <Link to='/contact' className='nav-item'>Contact</Link>
          </nav>
          <p>&copy; 2021 Ahrom Energy</p>
      </footer>
  );
}


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Body />
      </body>
      <footer>
  
      </footer>
      
      
    </div>
  );
}

export default App;
