import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import '../styles/components/projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  
  const projectsData = [
    {
      id: 1,
      title: "Application web sur la Gestion d'annuaire de pharmacie et la disponibilité des medicaments",
      description: "Application web pour la gestion d'un annuaire de pharmacie et le suivi de la disponibilité des médicaments (Projet de fin d'études).",
      tags: ["React", "Node.js", "SQLlite"],
      year: "Master 2",
      image: "/assets/images/accueil.png"
    },
    {
      id: 2,
      title: "Application web de la gestion des plannings d'examens",
      description: "Application web pour la génération automatique des plannings des examens pour le département informatique.",
      tags: ["Java", "Spring Boot", "JavaScript", "HTML/CSS"],
      year: "Master 1",
      image: "/assets/images/exam.png"
    },
    {
      id: 3,
      title: "Application desktop de laboratoire de recherche",
      description: "Application desktop pour la gestion d'un laboratoire de recherche universitaire.",
      tags: ["Java"],
      year: "Master 1",
      image: "/assets/images/labohub.png"
    },
    {
      id: 4,
      title: "Application web sur la gestion de salle de sport",
      description: "Application web pour la gestion d'une salle de sport avec boutique en ligne. J'ai principalement développé la partie e-commerce.",
      tags: ["HTML/CSS", "JavaScript", "Python", "Django"],
      year: "Licence 3",
      image: "/assets/images/1.PNG"
    },
    {
      id: 5,
      title: "Gestion des étudiants",
      description: "Application console pour gérer les étudiants d'une université (matricules, notes, rattrapages).",
      tags: ["C++"],
      year: "Licence 2",
      image: "/assets/images/c++.jpg"
    },
    {
      id: 6,
      title: "Algorithmes de cryptographie",
      description: "Implémentation des algorithmes de chiffrement César et Vigenère en C++.",
      tags: ["C++", "Cryptographie"],
      year: "Licence 2",
      image: "/assets/images/téléchargement (2).jpg"
    },
    {
      id: 7,
      title: "Jeu de mots croisés",
      description: "Jeu de mots croisés similaire à ceux des journaux, développé en Pascal.",
      tags: ["Pascal"],
      year: "Licence 1",
      image: "/assets/images/jeuxMots.png"
    }
  ];

  const filters = ['Tous', 'Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projectsData 
    : projectsData.filter(project => project.year === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Mes Projets Académiques</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Tous mes projets réalisés durant mon parcours universitaire
          </p>
        </motion.div>
        
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;