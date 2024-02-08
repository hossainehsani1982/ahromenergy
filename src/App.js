import './App.css';
import { Routes, Route , Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Abilities from './Abilities';
import Projects from './Projects';
import Products from './Products';
import Contact from './Contact';




function Header() {
  return (
      <header className='Header'>
          <h1>Ahrom Energy</h1>
          <nav className='Header-nav'>
              <Link to='/' className='nav-item'>Home</Link>
              <Link to='/about' className='nav-item'>About</Link>
              <Link to='/abilities' className='nav-item'>Abilities</Link>
              <Link to='/projects' className='nav-item'>Projects</Link>
              <Link to='/products' className='nav-item'>Products</Link>
              <Link to='/contact' className='nav-item'>Contact</Link>
          </nav>
      </header>
  );
}


function Body() {
  return (
    <div className='Body'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/abilities' element={<Abilities />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

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
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
