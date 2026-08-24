"use client";

import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { contactLinks } from "../data/site-content";
import Reveal from "./ui/reveal";

export default function HeroSection() {
  return (
    <section id="home" className="section-shell pt-32 sm:pt-40 pb-20">
      <div className="page-shell">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Associate Product Manager | AI Product Management | Product Strategy
            </span>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] text-slate-950 leading-[1.1] max-w-3xl">
              I build products people actually need.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-600 max-w-2xl">
              Building user-first products with structured thinking, curiosity, and data-backed decisions. I enjoy solving ambiguous user problems, improving product experiences, and turning insights into clear action.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#case-studies" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View Projects
                <FiArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                Download CV
                <FiDownload className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-500">
              <span>Chennai, India</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:block" />
              <a href={contactLinks[1].href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                LinkedIn
              </a>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:block" />
              <a href={contactLinks[2].href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
