import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiEye } from 'react-icons/fi';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-white py-20">
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                    Harshit Kumar Patel
                </h1>
                <p className="text-2xl md:text-3xl text-primary-500 font-semibold mb-6">
                    Aspiring Product Manager
                </p>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8 leading-relaxed">
                    A passionate product enthusiast bridging the gap between user needs and business goals through technology and user-centric design.
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/Harhsit-Kumar-Patel" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <FiGithub className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/harshit-patel-900729205/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors">
                        <FiLinkedin className="w-8 h-8" />
                    </a>
                </div>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    <FiEye className="w-5 h-5" />
                    <span>View Resume</span>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;