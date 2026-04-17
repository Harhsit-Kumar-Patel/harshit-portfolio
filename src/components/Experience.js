import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'LLM Post-Training Intern',
    company: 'Ethara AI',
    location: 'Remote',
    period: 'Jan 2026 - Present',
    summary:
      'Contributing to post-training optimization work for Large Language Models with a focus on reasoning quality, alignment, and response accuracy.',
    responsibilities: [
      'Evaluate model outputs for coherence, instruction-following, and factual reliability across diverse prompts.',
      'Support supervised fine-tuning workflows, structured feedback generation, and dataset refinement.',
      'Help improve LLM reasoning quality and alignment through careful prompt review and response analysis.',
    ],
  },
  {
    title: 'Product Manager - Research & EdTech',
    company: 'Institute for Global Research on Public Policy and the SDGs',
    location: 'Remote',
    period: 'Jan 2026 - Present',
    summary:
      'Led market and user research on AI adoption and EdTech trends to inform product discovery and roadmap decisions.',
    responsibilities: [
      'Translated research insights into structured product recommendations aligned with academic and policy objectives.',
      'Collaborated cross-functionally with research, academic, and operational stakeholders.',
      'Connected research outcomes to product direction for education-focused initiatives.',
    ],
  },
  {
    title: 'Computer Faculty',
    company: 'Sant Sai Shikshan Sansthan',
    location: 'Varanasi',
    period: 'Jul 2025',
    summary:
      'Delivered applied computer science instruction and tailored curriculum based on student learning gaps.',
    responsibilities: [
      'Built lesson delivery around practical understanding rather than rote theory.',
      'Adapted teaching style to learner needs and helped students gain confidence in core computing concepts.',
      'Strengthened communication and curriculum design through classroom instruction.',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="experience" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">Experience</span>
            <h2 className="section-title">Experience across LLM evaluation, product research, and applied teaching.</h2>
          </div>
          <p className="max-w-xl section-copy">
            My recent work spans post-training for LLMs, research-led product work in EdTech, and teaching-based execution on the ground.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="editorial-card grid gap-6 lg:grid-cols-[220px_1fr]"
            >
              <div className="rounded-[24px] bg-stone-900 p-6 text-stone-50">
                <FiBriefcase className="h-7 w-7 text-[var(--accent-soft)]" />
                <p className="mt-8 text-xs uppercase tracking-[0.22em] text-stone-400">Role</p>
                <h3 className="mt-2 text-2xl font-bold text-stone-50">{exp.title}</h3>
                <p className="mt-3 text-sm text-stone-300">{exp.company}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-7 text-stone-700">{exp.summary}</p>
                <div className="mt-6 grid gap-3">
                  {exp.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="flex items-start gap-3 rounded-[20px] border border-stone-900/8 bg-white/60 px-4 py-4"
                    >
                      <FiArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
                      <p className="text-sm leading-7 text-stone-700">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
