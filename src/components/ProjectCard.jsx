import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/components/projects.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} 
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <a href="#" className="project-link">
            <FiExternalLink />
          </a>
          <a href="#" className="project-link">
            <FiGithub />
          </a>
        </div>
      </div>
      
      <div className="project-content">
        <span className="project-year">{project.year}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;