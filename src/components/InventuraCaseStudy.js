import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiUsers, FiBarChart2, FiMessageCircle, FiEdit, FiAward } from 'react-icons/fi';

const InventuraCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const challenges = [
    "Vendors often find existing software too complicated and untrustworthy.",
    "Many users have limited internet access and low digital literacy.",
    "Inefficient collaboration between suppliers and vendors leads to waste.",
    "Current systems only track inventory; they don't provide business insights."
  ];

  const solutions = [
    {
      title: "AI Demand Forecasting",
      description: "Predict future stock needs to prevent stockouts and overstocking.",
      icon: <FiBarChart2 className="w-6 h-6" />
    },
    {
      title: "Community Stock Exchange",
      description: "A network for vendors to share or sell excess stock to each other.",
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      title: "Voice & WhatsApp Commands",
      description: "Update stock and get reports using simple, natural language.",
      icon: <FiMessageCircle className="w-6 h-6" />
    },
    {
        title: "Dynamic Pricing Assistant",
        description: "Suggests smart price adjustments to maximize profit.",
        icon: <FiEdit className="w-6 h-6" />
    },
    {
        title: "Sustainability Tracker",
        description: "Reduce waste, manage near-expiry items, and earn eco-badges.",
        icon: <FiAward className="w-6 h-6" />
    }
  ];

  const techStack = [
    { category: "Frontend", techs: ["React (Web)", "Flutter (Mobile)"] },
    { category: "Backend", techs: ["Node.js (Express)", "Django REST"] },
    { category: "Database", techs: ["PostgreSQL", "Redis", "ElasticSearch"] },
    { category: "AI/ML", techs: ["Python", "TensorFlow", "Prophet"] }
  ];

  const results = [
    {
      metric: "60-70%",
      label: "Time Saved",
      description: "Reduced time spent on daily stock management"
    },
    {
      metric: "80%",
      label: "Stock Accuracy",
      description: "Significant reduction in stock mismatches and errors"
    },
    {
      metric: "20-30%",
      label: "Waste Reduction",
      description: "Minimized waste, especially for perishable goods"
    }
  ];

  return (
    <section id="inventura-case-study" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Case Study: Inventura
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Smart Inventory Assistant for Small & Mid-Scale Vendors
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Overview
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        Inventura is a smart business assistant designed to help small and mid-scale vendors overcome the challenges of manual inventory management. It simplifies operations, predicts demand, and fosters a collaborative ecosystem between vendors and suppliers.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                        href="https://github.com/your-repo/inventura" // Replace with your actual GitHub link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <FiGithub className="w-5 h-5" />
                        <span>View Code</span>
                        </motion.a>
                        <motion.a
                        href="https://inventura-casestudy.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                        </motion.a>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-2xl">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Key Features
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>AI Demand Forecasting</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>Community Stock Exchange</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>Voice & WhatsApp Integration</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>Sustainability Tracking</span>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Challenge
            </h3>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Solution
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                    {solution.icon}
                    <h4 className="font-semibold text-sm">{solution.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Expected Results & Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {result.metric}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {result.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InventuraCaseStudy;