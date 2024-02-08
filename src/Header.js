import { Routes, Route , Link} from 'react-router-dom';
import './Header.css';
function Header() {
    return (
      <header className='header-container'>
        <h1 className='header-title'>Ahrom Energy</h1>
        <nav className='header-navigation'>
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
  
  export default Header;