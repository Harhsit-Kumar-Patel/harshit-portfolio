import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const project = {
  title: 'PathByte - Career Growth Platform',
  description:
    'Built and deployed a career guidance platform with structured learning paths, onboarding flows, and progress tracking.',
  technologies: ['Product vision', 'User journey design', 'Execution roadmap', 'Onboarding flows', 'Progress tracking'],
  github: 'https://github.com/Harhsit-Kumar-Patel/PathByte',
  demo: 'https://pathbyte.netlify.app/',
  challenge: 'Career growth support is often scattered, generic, and hard to translate into a clear learning path.',
  response: 'PathByte turns career planning into a guided system with structured progression, clearer onboarding, and trackable momentum.',
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-kicker">Featured Project</span>
          <h2 className="section-title">A founder-led build shaped by product vision, user journey thinking, and execution.</h2>
          <p className="mt-5 section-copy">
            This project reflects how I define a product vision, translate it into a user journey, and carry the roadmap from ideation to live deployment.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="dark-panel">
            <p className="grid-label text-stone-400">Product spotlight</p>
            <h3 className="mt-4 text-4xl font-bold text-stone-50">{project.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200">{project.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="grid-label text-stone-400">Problem</p>
                <p className="mt-3 text-sm leading-7 text-stone-200">{project.challenge}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="grid-label text-stone-400">Approach</p>
                <p className="mt-3 text-sm leading-7 text-stone-200">{project.response}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="accent-button gap-2">
                <FiExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="outline-button gap-2 border-white/15 bg-white/5 text-stone-100">
                <FiGithub className="h-4 w-4" />
                View Code
              </a>
            </div>
          </div>

          <div className="editorial-card">
            <p className="grid-label">Stack</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-5">
              <div className="rounded-[24px] border border-stone-900/8 bg-white/60 p-5">
                <p className="grid-label">Why it matters</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  It shows how I connect product framing with real execution instead of stopping at a concept or mockup.
                </p>
              </div>
              <div className="rounded-[24px] border border-stone-900/8 bg-white/60 p-5">
                <p className="grid-label">What it signals</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  I like building products with clear structure, practical user value, and enough depth to validate the idea in the real world.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
