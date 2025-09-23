import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import InventuraCaseStudy from './components/InventuraCaseStudy';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900">
        <Navigation />
        <main>
          <Hero />
          <Summary />
          <Experience />
          <Projects />
          <CaseStudy />
          <InventuraCaseStudy />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;