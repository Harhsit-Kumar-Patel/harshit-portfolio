import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillsData = [
    {
      category: "Programming Languages",
      icon: <FiCode className="w-8 h-8 text-primary-500" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      icon: <FiCode className="w-8 h-8 text-primary-500" />,
      skills: ["React", "Node.js", "Express", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Databases & ORMs",
      icon: <FiDatabase className="w-8 h-8 text-primary-500" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "SQLAlchemy"]
    },
    {
      category: "Tools & Platforms",
      icon: <FiTool className="w-8 h-8 text-primary-500" />,
      skills: ["Git & GitHub", "Docker", "AWS", "Netlify", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A snapshot of my technical expertise
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass dark:glass-dark p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {category.category}
                </h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={itemVariants}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;