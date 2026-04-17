import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const contacts = [
  { label: 'Email', value: 'harshit.mzp888@gmail.com', href: 'mailto:harshit.mzp888@gmail.com' },
  { label: 'Phone', value: '+91 6386226495', href: 'tel:+916386226495' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="site-section pb-24">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="dark-panel"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="section-kicker border-white/15 bg-white/5 text-stone-200">Contact</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold text-stone-50 md:text-5xl">
                Looking for someone who can connect product thinking, AI depth, and hands-on execution?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                I&apos;m open to opportunities across product, applied AI, LLM evaluation, and research-informed execution where curiosity and ownership matter.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/Harhsit-Kumar-Patel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-100 transition hover:-translate-y-1"
              >
                <FiGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-patel-900729205/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-stone-100 transition hover:-translate-y-1"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-stone-50">
                    {item.label === 'Email' ? <FiMail className="h-5 w-5" /> : <FiPhone className="h-5 w-5" />}
                  </span>
                  <div>
                    <p className="grid-label text-stone-400">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-stone-100">{item.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
