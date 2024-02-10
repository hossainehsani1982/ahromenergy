import { Routes, Route , Link} from 'react-router-dom';
import './Header.css';
function Header() {
    return (
      <header className='header-container'>
        <h1 className='header-title'>Ahrom Energy</h1>
        <nav className='header-navigation'>
        <Link to='/' className='nav-item'>خانه</Link>
              <Link to='/about' className='nav-item'>درباره ما</Link>
              <Link to='/abilities' className='nav-item'>توانایی‌ها و خدمات</Link>
              <Link to='/projects' className='nav-item'>پروژه‌ها</Link>
              <Link to='/products' className='nav-item'>محصولات</Link>
              <Link to='/contact' className='nav-item'>تماس با ما</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;