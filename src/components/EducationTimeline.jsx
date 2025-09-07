import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import '../styles/components/education.css';

const EducationTimeline = () => {
    const educationData = [
        {
            degree: "Licence 1 en Informatique RN",
            university: "Université Abderrahman Mira de Bejaia",
            year: "2020 - 2021",
            description: "Initiation fondamentale aux sciences informatiques avec les bases d'algorithmique (Pascal), d'architecture des ordinateurs et des systèmes d'exploitation. Acquisition des compétences mathématiques essentielles (analyse, algèbre) et physiques (électricité, mécanique). Première expérience en développement web (HTML) et bureautique. Renforcement des compétences communicationnelles (techniques d'expression écrite/orale) et linguistiques (anglais technique).",
            projects: 1
          },
          {
            degree: "Licence 2 en Informatique RN",
            university: "Université Abderrahman Mira de Bejaia",
            year: "2021 - 2022",
            description: "Approfondissement des structures de données complexes en C++ et initiation à la programmation orientée objet avec Java. Consolidation des connaissances en architecture matérielle et mathématiques appliquées (probabilités, statistiques). Premier contact avec les systèmes d'information et réalisation d'un projet pluridisciplinaire intégrant réseaux et sécurité. Poursuite du perfectionnement en anglais technique et découverte des bases de l'économie d'entreprise.",
            projects: 2
          },
          {
            degree: "Licence 3 en Systèmes d'Information",
            university: "Université Abderrahman Mira de Bejaia",
            year: "2022 - 2023",
            description: "Approfondissement des compétences en ingénierie logicielle avec une spécialisation en conception de systèmes d'information (méthodes MERISE, UML) et gestion de bases de données relationnelles. Développement d'applications web complètes avec une stack technologique incluant HTML5, CSS3, JavaScript et PHP pour le frontend, et initiation aux frameworks backend avec Python/Django. Acquisition des fondamentaux du management des SI et de la recherche opérationnelle pour l'optimisation des processus. Réalisation d'un projet concret intégrant la modélisation de bases de données, le développement web et mobile, ainsi qu'un mini-projet utilisant Django pour le backend. Cours complémentaires en administration de bases de données, théorie des langages et ingénierie des connaissances pour une vision globale du cycle de développement logiciel.",
            projects: 1
          },
          {
            degree: "Master 1 en Génie Logiciel",
            university: "Université Abderrahman Mira de Bejaia",
            year: "2023 - 2024",
            description: "Expertise avancée en développement Java (Spring Boot) et bases de données (Oracle SQL Developer). Exploration des architectures Big Data (MongoDB) et de la programmation système. Approche rigoureuse d'ingénierie dirigée par les modèles et mise en œuvre de solutions de sécurité informatique. Réalisation d'une application web complète (Java/Spring) dans le cadre d'un projet encadré. Première immersion professionnelle avec des techniques d'optimisation industrielle.",
            projects: 2
          },
          {
            degree: "Master 2 en Génie Logiciel",
            university: "Université Abderrahman Mira de Bejaia",
            year: "2024 - 2025",
            description: "Maîtrise des technologies web modernes avec la stack MERN (MongoDB, Express, React, Node.js). Conception de services web distribués et gestion de bases de données NoSQL à grande échelle. Développement d'applications temps réel avec les dernières technologies internet. Préparation à l'environnement professionnel avec une formation aux pratiques entrepreneuriales et une approche projet industrielle. Réalisation d'un PFE ambitieux intégrant l'ensemble de ces compétences.",
            projects: 1
          }
      ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Mon Parcours Académique</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            De la Licence 1 au Master 2 - Tous mes projets universitaires
          </p>
        </motion.div>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-degree">{item.degree}</h3>
                <span className="timeline-university">{item.university}</span>
                <span className="timeline-year">{item.year}</span>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-projects">
                  <span>{item.projects} projets réalisés</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;