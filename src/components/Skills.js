import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    title: 'Product',
    items: ['Product discovery', 'User research', 'Product strategy', 'Roadmapping', 'Agile', 'Wireframing (Figma)'],
  },
  {
    title: 'AI & Technical',
    items: ['Large Language Models (LLMs)', 'Prompt evaluation', 'AI alignment', 'Azure', 'Git & GitHub Copilot', 'Semantic Kernel', 'Basic DSA'],
  },
  {
    title: 'Execution',
    items: ['Structured feedback generation', 'Dataset refinement', 'Cross-functional collaboration', 'Curriculum design', 'Execution planning', 'Clear communication'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">A blend of product sense, AI fluency, and execution discipline.</h2>
          <p className="mt-5 section-copy">
            I&apos;m most effective in work that asks for product thinking, technical depth, and the discipline to turn insights into action.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className={index === 1 ? 'dark-panel' : 'editorial-card'}
            >
              <p className={`grid-label ${index === 1 ? 'text-stone-400' : ''}`}>Capability area</p>
              <h3 className={`mt-4 text-3xl font-bold ${index === 1 ? 'text-stone-50' : 'text-stone-950'}`}>{group.title}</h3>
              <div className="mt-8 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[20px] border px-4 py-4 text-sm leading-7 ${
                      index === 1
                        ? 'border-white/10 bg-white/5 text-stone-200'
                        : 'border-stone-900/8 bg-white/60 text-stone-700'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
