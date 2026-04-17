import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";
import { experiences } from "../data/site-content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="page-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="Roles that shaped how I approach ownership, ambiguity, collaboration, and product judgment."
            copy="Even when the title was not strictly PM, the work consistently involved identifying friction, translating insight into clearer decisions, and improving how experiences are delivered."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {experiences.map((experience, index) => (
            <Reveal key={experience.role} delay={index * 90}>
              <article className="surface-card grid gap-6 p-6 sm:p-8 lg:grid-cols-[180px_minmax(0,1fr)]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Timeline</p>
                  <p className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {experience.period}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{experience.role}</h3>
                  <p className="mt-2 text-base font-medium text-slate-600">{experience.company}</p>

                  <ul className="mt-6 grid gap-3">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-600">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
