import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-logo">
              MonPortfolio<span style={{ color: 'var(--primary-color)' }}>.</span>
            </h3>
            <p className="footer-text">
              Portfolio d'une informaticienne passionnée par le développement et le design.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#education">Parcours</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-title">Réseaux sociaux</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MonPortfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;