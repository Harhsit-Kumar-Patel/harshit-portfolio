import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { name: 'Experience', href: '#experience' },
  { name: 'Project', href: '#projects' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="site-container">
        <div className="flex items-center justify-between rounded-full border border-stone-900/10 bg-[#fffaf3]/80 px-5 py-3 shadow-[0_16px_50px_rgba(50,40,24,0.1)] backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-stone-50">
              HK
            </span>
            <div>
              <p className="font-space text-sm font-semibold uppercase tracking-[0.26em] text-stone-500">
                Harshit Patel
              </p>
              <p className="text-sm text-stone-700">Product-thinking builder</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition hover:text-[var(--accent-deep)]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-900/10 text-stone-700 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-[28px] border border-stone-900/10 bg-[#fffaf3]/95 p-5 shadow-[0_18px_60px_rgba(50,40,24,0.12)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-900 hover:text-stone-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
