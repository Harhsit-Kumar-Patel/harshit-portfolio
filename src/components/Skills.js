import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FiTrendingUp, FiUsers, FiBarChart, FiLayers, FiTarget, FiCode, FiDatabase, FiShare2
} from 'react-icons/fi';
import { SiCplusplus, SiPython, SiGit } from 'react-icons/si';

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
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "DSA", icon: FiShare2 },
    { name: "SQL", icon: FiDatabase },
    { name: "Git", icon: SiGit },
    { name: "HTML/CSS/JS", icon: FiCode }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            My professional and technical capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {professionalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <p className="font-semibold text-gray-700">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <p className="font-semibold text-gray-700">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;