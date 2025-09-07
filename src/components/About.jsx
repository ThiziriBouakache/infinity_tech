import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/about.css';
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">À propos de moi</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Découvrez qui je suis, ce que je fais et mes compétences techniques
          </p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/assets/images/profile.jpg" 
              alt="Photo de profil" 
              className="about-img"
            />
            <div className="about-decoration"></div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="about-title">
              Informaticienne passionnée avec une touche créative
            </h3>
            
            <div className="about-tabs">
              <button className="tab-btn active">Compétences</button>
              <button className="tab-btn">Éducation</button>
              <button className="tab-btn">Expérience</button>
            </div>
            
            <div className="tab-content active">
              <p>
                Je suis une développeuse full-stack spécialisée en JavaScript avec une passion pour la création d'interfaces utilisateur élégantes et fonctionnelles.
              </p>
              
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JAVA</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">UI/UX Design</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">C++</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
  href="/assets/images/C.V. BOUAKECH THIZIRI .pdf" 
  className="btn" 
  style={{ marginTop: '2rem' }}
  download="CV_BOUAKECH_THIZIRI.pdf"
>
  Télécharger mon CV
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;