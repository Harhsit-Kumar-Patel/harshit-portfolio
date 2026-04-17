import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { contactLinks } from "../data/site-content";
import Reveal from "./ui/reveal";

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-accent/15 via-sky-100 to-transparent blur-3xl" />
      <div className="surface-card-strong relative overflow-hidden p-6 sm:p-8">
        <div className="grid-lines absolute inset-0 opacity-35" />
        <div className="relative space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">PM Snapshot</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              Structured thinking, simple communication, clear product judgment.
            </h3>
          </div>

          <div className="grid gap-3">
            {[
              ["Focus", "User problems worth solving"],
              ["Approach", "Research, prioritization, and clarity"],
              ["Goal", "Thoughtful product work with measurable impact"]
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="section-shell pt-32 sm:pt-36">
      <div className="page-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Product Portfolio</span>
              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl">
                Harshit
                <span className="mt-3 block text-slate-500">Aspiring Product Manager</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
                Building user-first products with structured thinking, curiosity, and data-backed decisions.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                I enjoy solving ambiguous user problems, improving product experiences, and turning insights into clear action.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#case-studies" className="button-primary">
                  View Case Studies
                  <FiArrowRight className="h-4 w-4" />
                </a>
                <a href="/resume.pdf" download className="button-secondary">
                  Download Resume
                  <FiDownload className="h-4 w-4" />
                </a>
                <a href="#contact" className="button-secondary">
                  Contact Me
                  <FiMail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <span>Chennai, India</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <a href={contactLinks[1].href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  LinkedIn
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <a href={contactLinks[2].href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:max-w-md lg:justify-self-end">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
