import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiEye } from 'react-icons/fi';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-center lg:text-left"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
                    >
                        Harshit Kumar Patel
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500 mb-6"
                    >
                        Aspiring Product Manager
                    </motion.p>
                    <motion.p
                        className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    >
                        A passionate product enthusiast bridging the gap between user needs and business goals through technology and user-centric design.
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105"
                        >
                            <FiEye className="w-5 h-5" />
                            <span>View Resume</span>
                        </a>
                        <div className="flex items-center space-x-6">
                            <a href="https://github.com/Harhsit-Kumar-Patel" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors transform hover:scale-110">
                                <FiGithub className="w-8 h-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/harshit-patel-900729205/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors transform hover:scale-110">
                                <FiLinkedin className="w-8 h-8" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-96 h-96">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute inset-0 border-4 border-primary-500/20 rounded-full"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                            className="absolute inset-4 border-4 border-indigo-500/20 rounded-full"
                        ></motion.div>
                        <div className="absolute inset-12 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center">
                            <p className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500">
                                HKP
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;