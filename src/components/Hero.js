import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
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
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-gray-900">
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                    Harshit Kumar Patel
                </motion.h1>
                <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-primary-500 dark:text-primary-400 font-semibold mb-8">
                    Full Stack Engineer
                </motion.p>
                <motion.div variants={itemVariants} className="flex justify-center space-x-6">
                    <a href="https://github.com/Harhsit-Kumar-Patel" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <FiGithub className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/harshit-kumar-patel-94883522a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <FiLinkedin className="w-8 h-8" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <FiTwitter className="w-8 h-8" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;