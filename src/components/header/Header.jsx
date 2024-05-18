import React from 'react';
import headerLogo from '../../images/headerLogo.png';
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={headerLogo} alt="logo" />
        </div>
        <div className='RightMenu'>
                <div className="navigationLinks">
                <a href="#home">Home</a>
                <a href="#home">Features</a>
                <a href="#home">Community</a>
                <a href="#home">Blog</a>
                <a href="#home">Pricing</a>
            </div>
            <div className="register">
                <button>Register Now </button>
            </div>
        </div>
    </header>
  )
}

export default Header
