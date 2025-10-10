import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiClock } from 'react-icons/fi';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Google Product Management",
      provider: "Coursera",
      status: "Pursuing",
      type: "Professional",
      color: "from-blue-500 to-blue-600",
      icon: FiAward,
      certificate: "/certificates/google-product-management.pdf"
    },
    {
      title: "Microsoft AI Product Manager",
      provider: "Coursera",
      status: "Pursuing",
      type: "Professional",
      color: "from-green-500 to-green-600",
      icon: FiAward,
      certificate: "/certificates/microsoft-ai-product-manager.pdf"
    },
    {
      title: "Natural Language Processing Essentials",
      provider: "Coursera",
      status: "Completed",
      type: "Technical",
      color: "from-teal-500 to-teal-600",
      icon: FiAward,
      certificate: "/certificates/Coursera-NLP-Certificate.pdf"
    },
    {
      title: "C Programming",
      provider: "Udemy",
      status: "Completed",
      type: "Technical",
      color: "from-purple-500 to-purple-600",
      icon: FiAward,
      certificate: "/certificates/c-programming-udemy.pdf"
    },
    {
      title: "PHP & MySQL",
      provider: "Udemy",
      status: "Completed",
      type: "Technical",
      color: "from-orange-500 to-orange-600",
      icon: FiAward,
      certificate: "/certificates/php-mysql-udemy.pdf"
    },
    {
      title: "Modern Programming (C, C++, PHP, Java)",
      provider: "Udemy",
      status: "Completed",
      type: "Technical",
      color: "from-red-500 to-red-600",
      icon: FiAward,
      certificate: "/certificates/modern-programming-udemy.pdf"
    },
    {
      title: "Mastering C & C++",
      provider: "Udemy",
      status: "Completed",
      type: "Technical",
      color: "from-indigo-500 to-indigo-600",
      icon: FiAward,
      certificate: "/certificates/mastering-c-cpp-udemy.pdf"
    }
  ];

  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.type]) {
      acc[cert.type] = [];
    }
    acc[cert.type].push(cert);
    return acc;
  }, {});

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Certifications
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Continuous learning and professional development
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(groupedCertifications).map(([type, certs], typeIndex) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + typeIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {type} Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: 0.8 + typeIndex * 0.2 + index * 0.1 }}
                      className="glass dark:glass-dark p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                            {cert.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {cert.provider}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.status === 'Pursuing' 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            }`}>
                              {cert.status === 'Pursuing' ? (
                                <div className="flex items-center space-x-1">
                                  <FiClock className="w-3 h-3" />
                                  <span>Pursuing</span>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-1">
                                  <FiAward className="w-3 h-3" />
                                  <span>Completed</span>
                                </div>
                              )}
                            </span>
                            
                            {cert.status === 'Completed' && (
                              <motion.a
                                href={cert.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View Certificate
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;