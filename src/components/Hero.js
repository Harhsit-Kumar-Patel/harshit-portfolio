import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiEye } from 'react-icons/fi';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
                    >
                        Harshit Kumar Patel
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500 mb-8"
                    >
                        Aspiring Product Manager
                    </motion.p>
                    
                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
                    >
                        I am a passionate product enthusiast bridging the gap between user needs and business goals. With a background in technology and a keen eye for design, I'm driven to create innovative products that deliver exceptional value and drive success.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
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
            </div>
        </section>
    );
};

export default Hero;