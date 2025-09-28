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
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900">
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
        {/* ThemeToggle component is now removed from here */}
      </div>
    </ThemeProvider>
  );
}

export default App;