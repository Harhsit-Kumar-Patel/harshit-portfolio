import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navigation />
        <ThemeToggle />
        
        <main>
          <Hero />
          <Summary />
          <Experience />
          <Projects />
          <CaseStudy />
          <Education />
          <Certifications />
          <Skills />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-800 py-8">
          <div className="container-max section-padding">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-300">
                © 2024 Harshit Kumar Patel. All rights reserved.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Built with React, TailwindCSS, and Framer Motion
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
