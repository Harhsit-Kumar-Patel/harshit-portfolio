import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        I'm open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-500 dark:text-primary-400">
                                    <FiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                    <a href="mailto:harshitkumarp54@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500">harshitkumarp54@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-500 dark:text-primary-400">
                                    <FiPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+91 1234567890</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-500 dark:text-primary-400">
                                    <FiMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Varanasi, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;