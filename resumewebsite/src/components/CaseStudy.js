import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiCalendar, FiUsers, FiTarget, FiTrendingUp, FiCode, FiDatabase, FiShield, FiSmartphone } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const CaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const challenges = [
    "Fragmentation of resources across scattered blogs, videos, and courses",
    "Lack of clarity in mapping out the journey to achieve career goals",
    "Wasted time switching between different platforms causing confusion",
    "Students spend 30-40% of their time just searching for roadmaps and resources"
  ];

  const solutions = [
    {
      title: "Role-based Roadmaps",
      description: "Step-by-step guides for careers such as SDE and Data Analyst",
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      title: "Curated Content",
      description: "A mix of free and paid resources in one centralized location",
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: "Search & Filters",
      description: "Quick access to role-specific material with intelligent filtering",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: "Minimal UI",
      description: "Clean design with no distractions to keep users focused",
      icon: <FiSmartphone className="w-6 h-6" />
    }
  ];

  const techStack = [
    { category: "Frontend", techs: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", techs: ["Node.js", "Express", "PostgreSQL", "Knex.js"] },
    { category: "Infrastructure", techs: ["Docker", "Netlify", "Railway"] },
    { category: "Features", techs: ["Smart Onboarding", "Progress Tracking", "Community Integration"] }
  ];

  const results = [
    {
      metric: "30-40%",
      label: "Time Saved",
      description: "Reduced time spent searching for resources and roadmaps"
    },
    {
      metric: "100%",
      label: "User Satisfaction",
      description: "Positive feedback on ease of use and reduced overwhelm"
    },
    {
      metric: "Organic",
      label: "Community Growth",
      description: "Natural sharing and adoption within peer groups"
    }
  ];

  return (
    <section id="case-study" className="py-20 bg-white dark:bg-gray-800">
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
            Case Study: PathByte
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            An AI-powered career roadmap platform that revolutionizes how developers navigate their tech journey
          </motion.p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                PathByte is a web platform designed to help students prepare for tech-job roles through structured 
                roadmaps and resources. It simplifies career preparation by providing role-based learning paths, 
                curated content, and a minimal UI that keeps users focused on their goals.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiCalendar className="w-5 h-5" />
                  <span>September 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FiUsers className="w-5 h-5" />
                  <span>Solo Project</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/Harhsit-Kumar-Patel/PathByte"
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
                  href="https://pathbyte.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.a>
                <PDFViewer 
                  pdfPath="/PathByte-CaseStudyReport.pdf" 
                  title="PathByte Case Study Report"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Role-based structured roadmaps</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Curated free and paid resources</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Smart search and filtering</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Minimal, distraction-free UI</span>
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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Problem Statement
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The current process for students preparing for tech jobs is hindered by fragmented resources, 
              lack of clarity in career mapping, and significant time wasted switching between platforms.
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Solution Approach
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              PathByte makes tech career preparation simple and accessible by building role-specific roadmaps 
              and curating the best resources in one centralized platform with a minimal, focused design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
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

        {/* Research & Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Research & Discovery
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Key Findings
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Most existing platforms were too generic and lacked structure</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Students wanted step-by-step guidance instead of endless lists</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Existing platforms lacked role-based roadmaps</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Competitive Analysis
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>LeetCode & Geeks for Geeks: Great for practice, lack structured paths</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Coursera & Udemy: Quality resources, no role-based roadmaps</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Opportunity: Lightweight platform with role-based learning paths</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Results & Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
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

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Conclusion
          </h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              PathByte demonstrates how a simple and well-structured product can solve a real problem for students. 
              The platform successfully reduced "search fatigue" and provided a clear roadmap that made sense to users, 
              allowing them to spend more time learning rather than searching for resources.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Key Learnings
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• User research validates product direction</li>
                  <li>• Simple solutions often work best</li>
                  <li>• Community feedback drives iteration</li>
                </ul>
              </div>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Skills Developed
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Product making and user research</li>
                  <li>• Roadmap prioritization and execution</li>
                  <li>• Full-stack development and deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PDF Document Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="glass dark:glass-dark p-8 rounded-3xl shadow-xl mt-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Case Study Document
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              View the comprehensive case study document with detailed analysis, research findings, 
              technical implementation, and project outcomes.
            </p>
            <PDFViewer 
              pdfPath="/PathByte-CaseStudyReport.pdf" 
              title="PathByte Case Study Report"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
