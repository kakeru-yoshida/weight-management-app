import React, { useState } from 'react';
import './header.css';
import HeaderNav from './headerNav';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__logo">logo</div>
      <div className="header__menu-button" onClick={toggleMenu}>
        <div id="bar1" className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div id="bar2" className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div id="bar3" className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <nav id="header__nav-menu" className={isMenuOpen ? 'show' : ''}>
        <HeaderNav/>
      </nav>
    </div>
  );
}

export default Header;
