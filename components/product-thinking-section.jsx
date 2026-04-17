import { FiArrowRight } from "react-icons/fi";
import { frameworks, processFlow } from "../data/site-content";
import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";

export default function ProductThinkingSection() {
  return (
    <section id="product-thinking" className="section-shell">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="How I Think About Products"
              title="I like breaking down product problems through user empathy, structured prioritization, and measurable outcomes."
              copy="My PM mindset is simple: understand the problem deeply, stay honest about tradeoffs, and build toward outcomes instead of features for their own sake."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card-strong p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {frameworks.map((framework, index) => (
                  <div
                    key={framework.title}
                    className={`rounded-[24px] border p-5 ${
                      index === 1 || index === 4
                        ? "border-slate-200 bg-slate-950 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-950"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                        index === 1 || index === 4 ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      Framework
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{framework.title}</h3>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        index === 1 || index === 4 ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {framework.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="surface-card mt-10 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Product Process Flow</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  A repeatable flow I use to move from ambiguity to action.
                </h3>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500">
                From insight to measurement
              </div>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-6">
              {processFlow.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex min-h-[88px] flex-1 items-center justify-center rounded-[22px] border border-slate-200 bg-slate-50 px-4 text-center text-sm font-semibold text-slate-800">
                    {step}
                  </div>
                  {index < processFlow.length - 1 ? (
                    <FiArrowRight className="hidden h-4 w-4 text-slate-300 lg:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
