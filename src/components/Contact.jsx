import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/components/contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_e43k772', 'template_ejd2wgn', form.current, 'b-m9OdAGFi3jEfqgv')
      .then((result) => {
          console.log(result.text);
          setMessage('Votre message a été envoyé avec succès !');
          setIsSending(false);
          form.current.reset(); // Réinitialise le formulaire
      }, (error) => {
          console.log(error.text);
          setMessage('Une erreur est survenue, veuillez réessayer.');
          setIsSending(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contactez-moi</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Disponible pour des opportunités de collaboration ou simplement pour discuter
          </p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-title">Mes projets</h3>
            <p className="contact-text">
              Je suis toujours intéressée par de nouveaux défis et opportunités. 
              N'hésitez pas à me contacter pour discuter de collaborations potentielles.
            </p>
            
            <ul className="contact-details">
              <li className="contact-item">
                <div className="contact-icon">
                  <FaPaperPlane />
                </div>
                <div>
                  <h4>Email</h4>
                  <span>infinity.tech.bkc@gmail.com</span>
                </div>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon">
                  <FaFacebook />
                </div>
                <div>
                  <h4>Facebook</h4>
                  <span>Infinity Tech</span>
                </div>
              </li>
              
              <li className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Localisation</h4>
                  <span>Ville, France</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Votre nom" name="from_name" className="form-control" required />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Votre email" name="from_email" className="form-control" required />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="Sujet" name="subject" className="form-control" required />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Votre message" name="message" className="form-control" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn" disabled={isSending}>
              <FaPaperPlane style={{ marginRight: '8px' }} />
              {isSending ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            {message && <p className="form-message">{message}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;