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
      title: "Computer Faculty",
      company: "Sant Sai Shikshan Sansthan",
      location: "Varanasi",
      period: "Jul 2025",
      responsibilities: [
        "Developed comprehensive lesson plans for computer science curriculum.",
        "Provided one-on-one support to students for better understanding.",
        "Created engaging activities to enhance the learning experience.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            My journey in the professional world.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative mb-12"
            >
              <div className="absolute left-1/2 top-1 w-4 h-4 mt-1 bg-primary-500 rounded-full border-4 border-white transform -translate-x-1/2"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-3">
                  <FiBriefcase className="w-6 h-6 mr-3 text-primary-500" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-3">
                  {exp.company}
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;