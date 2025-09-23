import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        Harshit Patel
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="md:hidden px-4 pt-2 pb-4 space-y-2"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 py-2 font-medium"
                            variants={linkVariants}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Navigation;