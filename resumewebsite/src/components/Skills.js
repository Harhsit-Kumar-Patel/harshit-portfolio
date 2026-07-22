import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Using a single, clean icon

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Product Management Skills
  const professionalSkills = [
    "Product discovery",
    "User research",
    "Customer interviews",
    "Product strategy",
    "Roadmapping",
    "PRDs & user stories",
    "Feature prioritization",
    "MVP planning",
    "Agile/Scrum",
    "Sprint planning",
    "Backlog management",
    "Product analytics",
    "Go-to-market strategy",
    "Stakeholder management"
  ];

  // AI & Technical & Tools
  const technicalSkills = [
    "Large language models (LLMs)",
    "Prompt engineering",
    "Prompt evaluation",
    "AI product development",
    "AI workflow design",
    "OpenAI APIs & Azure AI",
    "Git & GitHub",
    "Supabase & Vercel",
    "Figma & Jira",
    "Notion & Miro",
    "Google Workspace",
    "Wireframing & Mapping"
  ];
  
  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered delay for each card
        duration: 0.3
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional and technical capabilities
          </motion.p>
        </motion.div>

        {/* Main grid: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Professional Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Product Management
            </h3>
            {/* Inner grid: 2 columns for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass dark:glass-dark p-5 rounded-xl shadow-lg flex items-center space-x-3 group"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <FiCheckCircle className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-md font-medium text-gray-800 dark:text-gray-100">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              AI, Technical & Tools
            </h3>
            {/* Inner grid: 2 columns for cards (IDENTICAL to professional for alignment) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass dark:glass-dark p-5 rounded-xl shadow-lg flex items-center space-x-3 group"
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <FiCheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-md font-medium text-gray-800 dark:text-gray-100">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;