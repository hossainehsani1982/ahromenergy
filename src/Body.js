import { Routes, Route , Link} from 'react-router-dom';
import './Body.css';
import Home from './Home';
import About from './About';
import Abilities from './Abilities';
import Projects from './Projects';
import Products from './Products';
import Contact from './Contact';

function Body() {
    return (
      <div className='Body'>
        <Routes >
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

export default Body;