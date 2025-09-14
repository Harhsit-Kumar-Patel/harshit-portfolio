import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="w-32 h-32 rounded-full glass dark:glass-dark border-4 border-primary-400/30 flex items-center justify-center text-4xl font-bold gradient-text"
              variants={floatingVariants}
              animate="animate"
            >
              HK
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-600 dark:text-slate-200 leading-tight">
              Harshit Kumar Patel
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium gradient-text">
              Aspiring Product Manager
            </h2>
            <div className="flex items-center justify-center space-x-2 text-slate-400 dark:text-slate-300">
              <FiMapPin className="w-5 h-5" />
              <span>Chennai, India</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="mailto:harshit.mzp888@gmail.com"
              className="flex items-center space-x-2 glass dark:glass-dark px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <FiMail className="w-4 h-4" />
              <span>harshit.mzp888@gmail.com</span>
            </a>
            <a
              href="tel:+916386226495"
              className="flex items-center space-x-2 glass dark:glass-dark px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <FiPhone className="w-4 h-4" />
              <span>+91 6386226495</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/harshit-patel-900729205/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass dark:glass-dark rounded-full hover:scale-110 transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
            <motion.a
              href="https://github.com/Harhsit-Kumar-Patel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass dark:glass-dark rounded-full hover:scale-110 transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
            </motion.a>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 rounded-full"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
