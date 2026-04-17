import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiAward } from 'react-icons/fi';

const certifications = [
  { title: 'Azure AI Engineer', provider: 'Microsoft', status: 'Completed', type: 'AI & Cloud', certificate: '/certificates/microsoft-azure-ai-engineer.pdf' },
  { title: 'Semantic Kernel', provider: 'Microsoft', status: 'Completed', type: 'AI & Cloud', certificate: '/certificates/microsoft-azure-openai-semantic-kernel.pdf' },
  { title: 'GitHub Copilot', provider: 'Microsoft', status: 'Completed', type: 'AI & Developer Tools', certificate: '/certificates/microsoft-github-copilot.pdf' },
  { title: 'Cloud Generative AI Leader', provider: 'Google', status: 'Completed', type: 'AI & Cloud', certificate: '/certificates/Coursera-Google-Cloud-Certificate.pdf' },
  { title: 'Project Management', provider: 'Google', status: 'Completed', type: 'Product', certificate: '/certificates/google-product-management.pdf' },
  { title: 'Networking', provider: 'NVIDIA', status: 'Completed', type: 'Technical', certificate: '/certificates/nvidia-networking-coursera.pdf' },
  { title: 'NLP Basics', provider: 'NVIDIA', status: 'Completed', type: 'Technical', certificate: '/certificates/Coursera-NLP-Certificate.pdf' },
  { title: 'AI Product Manager', provider: 'Coursera', status: 'Completed', type: 'Product', certificate: '/certificates/microsoft-ai-product-manager.pdf' },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="site-section">
      <div className="site-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker">Certifications</span>
            <h2 className="section-title">Continuous learning across product, AI, cloud, and developer tooling.</h2>
          </div>
          <p className="max-w-xl section-copy">
            Certifications help me deepen both the product and technical sides of my work, especially around AI systems and practical execution.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="editorial-card flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-stone-50">
                  <FiAward className="h-5 w-5" />
                </span>
                <span className={`pill ${cert.status === 'Completed' ? 'bg-[rgba(36,91,91,0.14)] text-[var(--teal)]' : ''}`}>
                  {cert.status}
                </span>
              </div>

              <div className="mt-6">
                <p className="grid-label">{cert.type}</p>
                <h3 className="mt-3 text-xl font-bold text-stone-950">{cert.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{cert.provider}</p>
              </div>

              <div className="mt-8">
                {cert.certificate ? (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-deep)] transition hover:text-[var(--accent)]"
                  >
                    View certificate
                    <FiArrowUpRight className="h-4 w-4" />
                  </a>
                ) : <p className="text-sm font-medium text-stone-500">Listed on resume</p>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
