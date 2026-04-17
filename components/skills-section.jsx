import { FiBarChart2, FiBriefcase, FiMessageCircle, FiTool } from "react-icons/fi";
import { skills } from "../data/site-content";
import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";

const icons = [FiBriefcase, FiBarChart2, FiTool, FiMessageCircle];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="page-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Skills & Toolkit"
            title="A PM toolkit built around strategy, analysis, communication, and practical execution."
            copy="I like skills that make product thinking more actionable: clearer problem framing, stronger prioritization, better measurement, and smoother collaboration."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={group.title} delay={index * 80}>
                <article className="surface-card h-full p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Category</p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{group.title}</h3>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:-translate-y-0.5 hover:bg-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
