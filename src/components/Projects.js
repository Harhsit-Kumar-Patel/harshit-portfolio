import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "PathByte",
      description: "A full-stack career development platform to help professionals navigate their career paths with personalized roadmaps.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
      github: "https://github.com/harshit-patel/pathbyte",
      demo: "https://pathbyte-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Project
          </h2>
          <p className="text-xl text-gray-600">
            An innovative solution I've built.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition-colors">
                  <FiGithub />
                  <span>View Code</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-primary-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-full font-semibold transition-opacity">
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;