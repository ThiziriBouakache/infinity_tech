import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
          {/* Logo image */}
          <img 
            src="/assets/images/logo1.jpg" 
            alt="Logo" 
            className="logo-image"
            style={{ height: '140px' ,width:'160px'}} // Ajustez la taille selon vos besoins
          />
          <span className="logo-text">MonPortfolio</span>
          <span className="logo-dot" style={{ color: 'var(--primary-color)' }}>.</span>
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              À propos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link" onClick={() => setIsOpen(false)}>
              Parcours
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projets" className="nav-link" onClick={() => setIsOpen(false)}>
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;