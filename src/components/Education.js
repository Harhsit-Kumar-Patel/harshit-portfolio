import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech - Computer Science and Business Systems',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2023 - 2027',
    grade: '8.67 CGPA',
    status: 'Pursuing',
    icon: FiBookOpen,
  },
  {
    degree: 'Higher Secondary (10+2)',
    institution: 'Little Flower House',
    location: 'Varanasi, India',
    period: '2022',
    grade: '82.2% (2022)',
    status: 'Completed',
    icon: FiAward,
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Sunbeam School',
    location: 'Ghazipur, India',
    period: '2020',
    grade: '87.5% (2020)',
    status: 'Completed',
    icon: FiAward,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-kicker">Education</span>
          <h2 className="section-title">Academic grounding in computer science, business systems, and applied problem solving.</h2>
          <p className="mt-5 section-copy">
            My education pairs strong technical foundations with the systems thinking that supports product, AI, and real-world execution.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.degree}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="editorial-card grid gap-6 lg:grid-cols-[120px_1fr_auto]"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-stone-900 text-stone-50">
                  <Icon className="h-10 w-10" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-stone-950">{item.degree}</h3>
                    <span className={`pill ${item.status === 'Pursuing' ? 'bg-[rgba(36,91,91,0.14)] text-[var(--teal)]' : ''}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-medium text-stone-700">{item.institution}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-2">
                      <FiMapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-stone-900/8 bg-white/60 px-6 py-5 text-left lg:min-w-[150px]">
                  <p className="grid-label">Grade</p>
                  <p className="mt-3 text-2xl font-bold text-[var(--accent-deep)]">{item.grade}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
