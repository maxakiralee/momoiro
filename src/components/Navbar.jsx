import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../styling/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Maui Strong
          <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li className='nav-item'>
            <a href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=3FKQTKLQBB6PS&source=url' target="_blank" rel="noopener noreferrer" className='nav-links-d' onClick={closeMobileMenu}>
              Donate 
            </a>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
