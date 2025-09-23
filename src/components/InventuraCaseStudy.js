import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiUsers, FiBarChart2, FiMessageCircle, FiAward, FiCalendar } from 'react-icons/fi';

const InventuraCaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const challenges = [
    "Existing systems are too complex or expensive for small vendors.",
    "Many vendors lack trust in software and have low digital literacy.",
    "Inefficient supplier-vendor collaboration leads to wastage and losses.",
    "Current tools only track data; they don't offer business advice."
  ];

  const solutions = [
    {
      title: "AI Demand Forecasting",
      description: "Predict what stock will run out to optimize purchasing.",
      icon: <FiBarChart2 className="w-6 h-6" />
    },
    {
      title: "Community Stock Exchange",
      description: "Share or sell excess stock to nearby vendors to reduce waste.",
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      title: "Voice & WhatsApp Commands",
      description: "Update stock and request reports using natural language.",
      icon: <FiMessageCircle className="w-6 h-6" />
    },
    {
        title: "Sustainability Tracker",
        description: "Reduce waste, donate items, and earn eco-badges.",
        icon: <FiAward className="w-6 h-6" />
    }
  ];

  const techStack = [
    { category: "Frontend", techs: ["React (Web)", "Flutter (Mobile)"] },
    { category: "Backend", techs: ["Node.js (Express)", "Django REST"] },
    { category: "Database", techs: ["PostgreSQL", "Redis", "ElasticSearch"] },
    { category: "AI/ML & Integrations", techs: ["Python (TensorFlow)", "WhatsApp API"] }
  ];

  const results = [
    {
      metric: "60-70%",
      label: "Time Saved",
      description: "Expected reduction in time spent on daily stock updates."
    },
    {
      metric: "Up to 80%",
      label: "Reduced Mismatches",
      description: "Projected decrease in stock mismatches from manual errors."
    },
    {
      metric: "20-30%",
      label: "Wastage Reduction",
      description: "Anticipated reduction in waste for perishable goods."
    }
  ];

  const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
  };

  return (
    <section id="inventura-case-study" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Case Study: Inventura
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A smart inventory assistant designed for small and mid-scale vendors in emerging markets.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Inventura is more than an inventory tracker—it’s a smart business assistant. It simplifies operations, predicts demand, and connects vendors with suppliers to reduce waste and increase profitability for small businesses that form the backbone of local economies.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiCalendar className="w-5 h-5" />
                  <span>Concept Phase</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiUsers className="w-5 h-5" />
                  <span>Solo Project</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/Harhsit-Kumar-Patel" // Replace with your actual GitHub link if available
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
                Unique Features
              </h4>
              <ul className="space-y-3">
                {[ "AI Demand Forecasting", "Community Stock Exchange", "Voice & WhatsApp Commands", "Dynamic Pricing Assistant", "Sustainability Tracker"].map(feature => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="glass dark:glass-dark p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Challenge
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Small vendors rely on manual record-keeping, leading to stockouts, wasted products, and missed profit opportunities.
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass dark:glass-dark p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Inventura is a user-friendly smart assistant that simplifies operations, predicts demand, and connects vendors with suppliers and peers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 mb-2">
                    {solution.icon}
                    <h4 className="font-semibold text-sm">{solution.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technology Stack & Implementation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category) => (
              <div key={category.category} className="text-center">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Expected Results & Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {result.metric}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {result.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InventuraCaseStudy;