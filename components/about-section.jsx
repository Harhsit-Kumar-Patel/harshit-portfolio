"use client";

import Reveal from "./ui/reveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell bg-slate-50/20 border-t border-slate-100">
      <div className="page-shell">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                About
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-0.04em] text-slate-950">
                About Me
              </h2>
            </div>
            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-slate-650">
              <p>
                I build products people actually need, using structured thinking, curiosity, and data-backed decisions. I enjoy solving ambiguous user problems, improving product experiences, and turning insights into clear action.
              </p>
              <p>
                Currently, I lead product at Nakshatraa.online, designing customer journeys and managing roadmaps. Previously, I worked on AI evaluation at Ethara AI and product discovery at the Institute for Global Research.
              </p>
              <p>
                I&apos;m always open to new opportunities to solve hard problems and build great products. Let&apos;s connect!
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
