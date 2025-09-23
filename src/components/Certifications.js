import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiEye } from 'react-icons/fi';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Modern C++: C++11/14/17/20",
      issuer: "Udemy",
      pdfPath: "/certificates/modern-programming-udemy.pdf"
    },
    {
      title: "Mastering C & C++",
      issuer: "Udemy",
      pdfPath: "/certificates/mastering-c-cpp-udemy.pdf"
    },
    {
      title: "C Programming for Beginners",
      issuer: "Udemy",
      pdfPath: "/certificates/c-programming-udemy.pdf"
    },
    {
      title: "PHP & MySQL",
      issuer: "Udemy",
      pdfPath: "/certificates/php-mysql-udemy.pdf"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Commitment to continuous learning and skill development
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass dark:glass-dark p-8 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <FiAward className="w-8 h-8 text-primary-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  <span className="font-semibold">Issuer:</span> {cert.issuer}
                </p>
              </div>
              <motion.a
                href={cert.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiEye className="w-5 h-5" />
                <span>View Certificate</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;