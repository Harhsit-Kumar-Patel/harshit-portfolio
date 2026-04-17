import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';

const caseStudies = [
  {
    title: 'PathByte - Career Growth Platform',
    summary: 'Built and deployed a career guidance platform with structured learning paths, onboarding flows, and progress tracking.',
    href: 'https://pathbyte-casestudy.netlify.app/',
    extra: '/PathByte-CaseStudyReport.pdf',
    tags: ['Founder-led build', 'Career growth', 'User journey'],
  },
  {
    title: 'Inventura Case Study',
    summary: 'Conceptualized an AI-assisted inventory tool for SMBs using offline-first architecture and WhatsApp-based workflows.',
    href: 'https://inventura-casestudy.netlify.app/',
    tags: ['SMB tooling', 'Offline-first', 'WhatsApp workflows'],
  },
  {
    title: 'ConvoHub Case Study',
    summary: 'Designed a student-first communication system separating high-priority academic notices from peer discussions.',
    href: 'https://convohub-casestudy.netlify.app/',
    tags: ['Academic communication', 'Student systems', 'Information clarity'],
  },
];

const CaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">Projects &amp; Case Studies</span>
            <h2 className="section-title">Product thinking applied across career growth, student communication, and SMB operations.</h2>
          </div>
          <p className="max-w-xl section-copy">
            These projects show how I frame product opportunities, define user value, and shape solutions around real constraints and workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="editorial-card flex h-full flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-stone-50">
                  <FiBookOpen className="h-6 w-6" />
                </span>
                <span className="grid-label">0{index + 1}</span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-stone-950">{study.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">{study.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button gap-2"
                >
                  Explore
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
                {study.extra && (
                  <a
                    href={study.extra}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button"
                  >
                    Full Report
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
