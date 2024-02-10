import './App.css';
import { Routes, Route , Link} from 'react-router-dom';
import Header from './Header';
import Body from './Body';




function Footer() {
  return (
      <footer className='footer-container'>
          <nav className='footer-navigation'>
              <Link to='/' className='nav-item'>خانه</Link>
              <Link to='/about' className='nav-item'>درباره ما</Link>
              <Link to='/abilities' className='nav-item'>توانایی‌ها و خدمات</Link>
              <Link to='/projects' className='nav-item'>پروژه‌ها</Link>
              <Link to='/products' className='nav-item'>محصولات</Link>
              <Link to='/contact' className='nav-item'>تماس با ما</Link>
          </nav>
          <h3>&copy; 2021 Ahrom Energy</h3>
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
          <Footer />
      </footer>
      
      
    </div>
  );
}

export default App;
