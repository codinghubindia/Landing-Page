import React, { useState } from 'react';
import headerLogo from '../../images/headerLogo.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='logo'>
        <img src={headerLogo} alt="logo" />
      </div>
      <div className={`RightMenu ${menuOpen ? 'open' : ''}`}>
        <div className="navigationLinks">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href="#blog">Blog</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="register">
          <button>Register Now</button>
        </div>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
