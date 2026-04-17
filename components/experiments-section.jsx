"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { experiments } from "../data/site-content";
import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";

export default function ExperimentsSection() {
  const [openId, setOpenId] = useState(experiments[0].id);

  return (
    <section id="experiments" className="section-shell">
      <div className="page-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Product Teardowns & Experiments"
            title="Ideas, critiques, and product observations that sharpen how I think."
            copy="These are compact product notes. They show curiosity, initiative, and the habit of turning observation into structured improvement ideas."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {experiments.map((experiment, index) => {
            const open = openId === experiment.id;

            return (
              <Reveal key={experiment.id} delay={index * 70}>
                <article className="surface-card h-full p-6">
                  <span className="pill-tag">{experiment.category}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{experiment.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{experiment.summary}</p>

                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : experiment.id)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deep"
                  >
                    Read Note
                    <FiArrowRight className={`h-4 w-4 ${open ? "rotate-90" : ""}`} />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ${
                      open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                        <div className="space-y-4 text-sm leading-7 text-slate-600">
                          <div>
                            <p className="font-semibold text-slate-900">Problem observed</p>
                            <p>{experiment.detail.problem}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Why it matters</p>
                            <p>{experiment.detail.importance}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Proposed improvement</p>
                            <p>{experiment.detail.improvement}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Expected impact</p>
                            <p>{experiment.detail.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
