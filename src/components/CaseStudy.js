import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiEye } from 'react-icons/fi';

const CaseStudy = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Case Studies
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        A closer look at my product thinking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* PathByte Case Study Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
                    >
                        <div>
                            <FiBookOpen className="w-10 h-10 mb-4 text-primary-500" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                PathByte Case Study
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                An AI-powered career roadmap platform that revolutionizes how developers navigate their tech journey.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                             <a href="https://pathbyte-casestudy.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-primary-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-full font-semibold transition-opacity">
                                <FiEye />
                                <span>View Case Study</span>
                            </a>
                             <a href="/PathByte-CaseStudyReport.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 rounded-full font-semibold transition-colors">
                                <FiEye />
                                <span>View Full Report</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Inventura Case Study Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
                    >
                        <div>
                            <FiBookOpen className="w-10 h-10 mb-4 text-primary-500" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Inventura Case Study
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                A smart inventory assistant for small vendors in emerging markets, designed to reduce waste and increase profitability.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://inventura-casestudy.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-primary-500 to-indigo-500 hover:opacity-90 px-6 py-3 rounded-full font-semibold transition-opacity">
                                <FiEye />
                                <span>View Case Study</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default CaseStudy;