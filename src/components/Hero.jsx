import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/hero.css';


const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            Salut, je suis <span style={{ color: 'var(--primary-color)' }}>BOUAKACHE Thiziri</span>
          </h1>
          <h2 className="hero-subtitle">Développeuse Full Stack</h2>
          <p className="hero-text">
            Passionnée par la création de solutions innovantes et élégantes et optimisées.
            Découvrez mes projets académiques de Licence 1 à Master 2.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">Voir mes projets</a>
            <a href="#contact" className="btn-outline">Me contacter</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="/assets/images/divloppeuse.jpg" 
            alt="Illustration girly d'une développeuse" 
            className="float"
          />
        </motion.div>
      </div>
      
      <div className="hero-decoration">
        <div className="circle pink"></div>
        <div className="circle light-pink"></div>
        <div className="circle accent"></div>
      </div>
    </section>
  );
};

export default Hero;