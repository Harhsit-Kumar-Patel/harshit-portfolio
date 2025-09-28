import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <CaseStudy />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;