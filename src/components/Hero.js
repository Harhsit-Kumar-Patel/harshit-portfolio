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
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-gray-900 py-16 md:py-20">
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
                    Aspiring Product Manager
                </motion.p>
                <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/Harhsit-Kumar-Patel" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <FiGithub className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/harshit-patel-900729205/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <FiLinkedin className="w-8 h-8" />
                    </a>
                </motion.div>

                {/* Summary section content is now here */}
                <motion.div variants={itemVariants}>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        I am a passionate and driven product enthusiast with a strong foundation in technology and a keen eye for user-centric design. My goal is to bridge the gap between user needs and business objectives by creating innovative products that deliver exceptional value. With experience in full-stack development and a deep understanding of the product lifecycle, I am eager to transition into a product management role where I can lead cross-functional teams to build and launch successful products.
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-200"
                    >
                        <FiEye className="w-5 h-5" />
                        <span>View Resume</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;