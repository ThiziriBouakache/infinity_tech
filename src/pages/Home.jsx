import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import EducationTimeline from '../components/EducationTimeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <EducationTimeline />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;