import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out—I'd love to hear from you!
                    </p>
                    <div className="max-w-sm mx-auto space-y-6">
                        <a href="mailto:work.harshitpatel@gmail.com" className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FiMail className="w-6 h-6 text-primary-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">work.harshitpatel@gmail.com</span>
                        </a>
                        <a href="tel:+916386226495" className="flex items-center justify-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FiPhone className="w-6 h-6 text-primary-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">+91 6386226495</span>
                        </a>
                    </div>
                    <div className="flex justify-center space-x-6 mt-10">
                        <a href="https://github.com/Harhsit-Kumar-Patel" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                            <FiGithub className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/harshit-patel-900729205/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">
                            <FiLinkedin className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;