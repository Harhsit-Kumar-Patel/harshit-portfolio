import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "2023 - 2027",
      cgpa: "8.67 CGPA",
      status: "Pursuing",
      icon: FiBookOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Little Flower House",
      location: "Varanasi, India",
      period: "2021 - 2023",
      cgpa: "82.2%",
      status: "Completed",
      icon: FiAward,
      color: "from-green-500 to-green-600"
    },
    {
      degree: "Secondary (10th)",
      institution: "Sunbeam School",
      location: "Ghazipur, India",
      period: "2019 - 2021",
      cgpa: "87.5%",
      status: "Completed",
      icon: FiAward,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
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
            Education
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Academic journey and achievements
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="glass dark:glass-dark p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-6 flex-1">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'Pursuing' 
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        {edu.institution}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center space-x-1">
                          <FiMapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          Grade:
                        </span>
                        <span className="text-xl font-bold gradient-text">
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
