"use client";

import { FiSearch, FiTarget, FiList, FiLayout, FiCode, FiBarChart2, FiRotateCw } from "react-icons/fi";
import Reveal from "./ui/reveal";

export default function ProductThinkingSection() {
  const steps = [
    { title: "Discovery", desc: "User research & pain point discovery", icon: FiSearch },
    { title: "Define", desc: "Scope MVP and define key success specs", icon: FiTarget },
    { title: "Prioritize", desc: "Ruthless impact vs. effort prioritization", icon: FiList },
    { title: "Design", desc: "Interactive wireframes and user journeys", icon: FiLayout },
    { title: "Build", desc: "Agile sprints and developer collaboration", icon: FiCode },
    { title: "Measure", desc: "Analyze product usage and retention metrics", icon: FiBarChart2 },
    { title: "Iterate", desc: "Fast feedback cycles and feature upgrades", icon: FiRotateCw }
  ];

  return (
    <section id="product-thinking" className="section-shell bg-slate-50/30">
      <div className="page-shell">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Product Thinking
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-0.04em] text-slate-950">
              PM Framework
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              How I approach a product problem from discovery to launch.
            </p>
          </div>
        </Reveal>

        {/* Steps sequence */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={idx * 60}>
                <div className="surface-card p-5 h-full flex flex-col justify-between items-center text-center hover:border-slate-300 transition-colors">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-soft rounded-full px-2 py-0.5 mb-3">
                    {`0${idx + 1}`}
                  </span>
                  
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 mb-3">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="mt-2">
                    <h3 className="text-base font-bold text-slate-950 leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
