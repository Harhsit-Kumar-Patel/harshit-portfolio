import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiEye, FiGithub, FiLinkedin } from 'react-icons/fi';

const highlights = [
  { label: 'Focus', value: 'Product discovery, AI evaluation, and execution-driven problem solving' },
  { label: 'Current lane', value: 'LLM post-training work paired with EdTech and research-led product work' },
  { label: 'Strength', value: 'Turning research, feedback, and ambiguity into structured product direction' },
];

const metrics = [
  { value: '3', label: 'Projects & case studies' },
  { value: '8', label: 'Core certifications' },
  { value: '8.67', label: 'Current CGPA' },
];

const Hero = () => {
  return (
    <section id="home" className="site-section relative overflow-hidden pt-36 sm:pt-40">
      <div className="pointer-events-none absolute left-[-8%] top-24 h-56 w-56 rounded-full bg-[rgba(201,108,74,0.16)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-6%] top-10 h-72 w-72 rounded-full bg-[rgba(36,91,91,0.14)] blur-3xl" />

      <div className="site-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker">Computer Science Undergrad | Product & AI</span>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-stone-950 md:text-7xl">
            Building at the intersection of product thinking, AI systems, and practical execution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
            I&apos;m Harshit Kumar Patel, a Computer Science undergrad and Product &amp; AI enthusiast with experience in
            LLM post-training, product research, and execution-driven problem solving across EdTech and applied AI environments.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-button gap-2"
            >
              <FiEye className="h-4 w-4" />
              View Resume
            </a>
            <a href="#projects" className="outline-button gap-2">
              Featured Work
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Harhsit-Kumar-Patel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-900/10 bg-white/70 text-stone-700 transition hover:-translate-y-1 hover:text-[var(--accent-deep)]"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-patel-900729205/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-900/10 bg-white/70 text-stone-700 transition hover:-translate-y-1 hover:text-[var(--accent-deep)]"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Open to product, AI, and applied research roles</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="space-y-6"
        >
          <div className="dark-panel">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="grid-label text-stone-400">Current snapshot</p>
                <h2 className="mt-3 text-3xl font-bold text-stone-50">Computer Science Undergrad - Product &amp; AI Enthusiast</h2>
              </div>
              <span className="pill bg-white/10 text-stone-100">Chennai, India</span>
            </div>

            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="grid-label text-stone-400">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="editorial-card"
              >
                <p className="text-3xl font-bold text-stone-950">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
