import React from 'react';
import { useParams } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/pages/project-details.css';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // En réalité, vous récupéreriez les données du projet depuis un state ou une API
  const project = {
    id: 1,
    title: "Application de Gestion de Projets",
    year: "Master 2",
    description: "Une application web complète pour gérer des projets en équipe avec des tableaux Kanban et des calendriers partagés. Ce projet a été réalisé dans le cadre de mon mémoire de Master 2 avec une équipe de 4 développeurs.",
    longDescription: "L'application permet aux utilisateurs de créer des projets, d'ajouter des tâches, de les organiser en tableaux Kanban (To Do, In Progress, Done) et de les assigner aux membres de l'équipe. Elle inclut également un calendrier partagé pour visualiser les échéances, un système de messagerie interne et des tableaux de bord analytiques.\n\nTechnologies utilisées : React pour le frontend, Node.js avec Express pour le backend, MongoDB comme base de données, et Socket.io pour les fonctionnalités en temps réel. L'application est déployée sur Heroku avec une intégration continue via GitHub Actions.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux"],
    image: "/assets/images/project1.jpg",
    githubLink: "#",
    liveLink: "#",
    features: [
      "Tableaux Kanban personnalisables",
      "Calendrier partagé avec drag & drop",
      "Messagerie instantanée",
      "Notifications en temps réel",
      "Tableaux de bord analytiques",
      "Système d'authentification sécurisé"
    ]
  };

  return (
    <section className="project-details">
      <div className="container">
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <span className="project-year">{project.year}</span>
        </div>
        
        <div className="project-content">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="project-info">
            <h2 className="section-title">À propos du projet</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-links">
              <a href={project.githubLink} className="btn">
                <FiGithub style={{ marginRight: '8px' }} />
                Code Source
              </a>
              <a href={project.liveLink} className="btn-outline">
                <FiExternalLink style={{ marginRight: '8px' }} />
                Voir en ligne
              </a>
            </div>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="project-details-content">
          <h2 className="section-title">Détails du projet</h2>
          <p className="project-long-description">
            {project.longDescription.split('\n').map((paragraph, i) => (
              <React.Fragment key={i}>
                {paragraph}
                <br /><br />
              </React.Fragment>
            ))}
          </p>
          
          <h3 className="features-title">Fonctionnalités clés</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;