"use client";

import { FiAward, FiBriefcase, FiCpu, FiLayers } from "react-icons/fi";
import Reveal from "./ui/reveal";

export default function SkillsSection() {
  const cards = [
    {
      title: "Product Thinking",
      desc: "Applying user-first empathy, structured thinking, and product judgment to solve complex user problems.",
      icon: FiBriefcase
    },
    {
      title: "Continuous Learning",
      desc: "Regularly acquiring new skills and certifications to stay aligned with modern product practices.",
      icon: FiAward
    },
    {
      title: "PM + Technology",
      desc: "Leveraging understanding of tech stacks, AI workflows, and databases to collaborate effectively with engineers.",
      icon: FiCpu
    },
    {
      title: "Product Interactions",
      desc: "Crafting conversion-focused user journeys, wireframes, and prototypes using industry tools.",
      icon: FiLayers
    }
  ];

  return (
    <section id="skills" className="section-shell bg-slate-50/50 border-y border-slate-100">
      <div className="page-shell">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Core Strengths
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-0.04em] text-slate-950">
              What I Bring
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              A focus on bridging the gap between business objectives, user needs, and engineering feasibility.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 80}>
                <div className="surface-card p-6 h-full flex flex-col justify-between hover:shadow-medium transition-all group">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {card.desc}
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
