import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "harshit.mzp888@gmail.com",
      link: "mailto:harshit.mzp888@gmail.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 6386226495",
      link: "tel:+916386226495"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Chennai, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/harshit-patel-900729205/",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      link: "https://github.com/Harhsit-Kumar-Patel",
      color: "text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-600 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's connect and discuss opportunities
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="glass dark:glass-dark p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl w-fit mx-auto mb-6">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {info.label}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-lg"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {info.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Connect With Me
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass dark:glass-dark rounded-2xl ${social.color} transition-all duration-200 hover:scale-110`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Collaboration Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-12"
          >
            <div className="relative glass dark:glass-dark p-12 rounded-3xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-400 rounded-full translate-x-12 translate-y-12"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-300 rounded-full -translate-x-8 -translate-y-8"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FiMail className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Collaborate!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg max-w-2xl mx-auto leading-relaxed">
                  I'm passionate about creating innovative solutions and bringing ideas to life. 
                  Whether you have a project in mind, need a technical partner, or want to discuss 
                  exciting opportunities, I'd love to hear from you.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                    Product Development
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                    Technical Consulting
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                    Innovation Projects
                  </span>
                </div>
                
                <motion.div
                  className="mt-8 text-primary-600 dark:text-primary-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Drop me an email to start the conversation
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;