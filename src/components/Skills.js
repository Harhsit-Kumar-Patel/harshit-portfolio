import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTrendingUp, FiUsers, FiBarChart, FiLayers, FiTarget } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const professionalSkills = [
    { name: "Product Strategy", icon: FiTarget },
    { name: "Market Research", icon: FiTrendingUp },
    { name: "Wireframing (Figma)", icon: FiLayers },
    { name: "Roadmapping", icon: FiBarChart },
    { name: "A/B Testing", icon: FiUsers }
  ];

  const technicalSkills = [
    { name: "C++", color: "from-blue-500 to-blue-600" },
    { name: "Python", color: "from-yellow-500 to-yellow-600" },
    { name: "DSA", color: "from-green-500 to-green-600" },
    { name: "SQL", color: "from-red-500 to-red-600" },
    { name: "Git", color: "from-orange-500 to-orange-600" },
    { name: "HTML/CSS/JS", color: "from-purple-500 to-purple-600" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional and technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass dark:glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-200"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass dark:glass-dark p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.name.charAt(0)}
                    </motion.div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
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