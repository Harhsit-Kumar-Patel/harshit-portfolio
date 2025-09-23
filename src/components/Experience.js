import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Innovate Solutions",
      period: "Jan 2024 – Present",
      location: "San Francisco, CA",
      description: "Developed and maintained scalable web applications using React, Node.js, and PostgreSQL. Led the design and implementation of a new microservices-based architecture, improving system performance by 30%.",
      responsibilities: [
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Implemented RESTful APIs and integrated with third-party services.",
        "Mentored junior developers and conducted code reviews."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Tech Forward Inc.",
      period: "June 2022 – Dec 2023",
      location: "Austin, TX",
      description: "Focused on building responsive and interactive user interfaces for client-facing applications using modern JavaScript frameworks. Optimized application performance, reducing load times by 20%.",
      responsibilities: [
        "Translated UI/UX designs into high-quality code.",
        "Ensured the technical feasibility of UI/UX designs.",
        "Worked closely with product managers to define feature requirements."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey in the world of technology
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <FiBriefcase className="w-12 h-12 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;