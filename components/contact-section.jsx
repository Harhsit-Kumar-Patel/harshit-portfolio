"use client";

import { FiDownload, FiMail } from "react-icons/fi";
import { contactLinks } from "../data/site-content";
import Reveal from "./ui/reveal";

export default function ContactSection() {
  const handleEmailClick = () => {
    const subject = "Portfolio inquiry";
    const body = "Hi Harshit,\n\nI visited your portfolio and would love to connect.";
    window.location.href = `mailto:work.harshitpatel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="pb-16 pt-8">
      <div className="page-shell">
        {/* Banner: Want the full picture? */}
        <Reveal>
          <div className="rounded-[32px] border border-accent/15 bg-accent-soft p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950">
                Want the full picture?
              </h3>
              <p className="mt-2 text-base text-slate-600 leading-relaxed">
                Get a detailed look at my experience, skills, and projects by downloading my complete resume.
              </p>
            </div>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-slate-800 shrink-0"
            >
              Download Resume (PDF)
              <FiDownload className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        {/* Footer Contact Callout */}
        <div className="border-t border-slate-100 pt-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black tracking-[-0.05em] text-slate-950 leading-tight">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              If you have a role that matches my skills or want to talk about products, feel free to reach out.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <button 
              onClick={handleEmailClick}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send email
              <FiMail className="h-5 w-5" />
            </button>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <a href={contactLinks[0].href} className="hover:text-accent transition-colors">
                Email
              </a>
              <span className="h-4 w-px bg-slate-200" />
              <a href={contactLinks[1].href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <span className="h-4 w-px bg-slate-200" />
              <a href={contactLinks[2].href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-16 text-xs text-slate-400 font-medium">
              <p>© {new Date().getFullYear()} Harshit Kumar Patel. All rights reserved.</p>
              <p className="mt-1">Chennai, India</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
