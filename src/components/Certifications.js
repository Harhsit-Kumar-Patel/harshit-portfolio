import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiClock, FiEye } from 'react-icons/fi';

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
      title: "Modern Programming",
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
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Certifications
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        My commitment to continuous learning.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {Object.entries(groupedCertifications).map(([type, certs], typeIndex) => (
                        <motion.div
                            key={type}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + typeIndex * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                {type} Certifications
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certs.map((cert, index) => {
                                    const Icon = cert.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col"
                                        >
                                            <div className="flex items-start space-x-4 mb-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-md`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        {cert.title}
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-400">
                                                        {cert.provider}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${cert.status === 'Pursuing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'}`}>
                                                    {cert.status}
                                                </span>
                                                {cert.status === 'Completed' && (
                                                    <a href={cert.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-semibold transition-colors">
                                                        <FiEye />
                                                        <span>View</span>
                                                    </a>
                                                )}
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