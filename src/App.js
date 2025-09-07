import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Contacts from './components/Contact';
import About from './components/About';
import Education from './components/EducationTimeline';
import Projet from './components/Projects';

import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/projets" element={<Projet/>} />




      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;