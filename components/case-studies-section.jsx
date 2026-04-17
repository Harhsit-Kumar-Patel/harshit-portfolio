"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiBarChart2, FiTarget, FiX } from "react-icons/fi";
import { caseStudies } from "../data/site-content";
import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";

const detailSections = [
  ["overview", "Overview"],
  ["problem", "Problem"],
  ["usersAffected", "Users Affected"],
  ["keyInsight", "Key Insight"],
  ["goalSuccessMetric", "Goal / Success Metric"],
  ["approach", "Approach"],
  ["researchAssumptions", "Research or Assumptions"],
  ["prioritizationLogic", "Prioritization Logic"],
  ["proposedSolution", "Proposed Solution"],
  ["whyThisSolution", "Why This Solution"],
  ["expectedImpact", "Expected Impact"],
  ["risksTradeoffs", "Risks / Tradeoffs"],
  ["whatILearned", "What I Learned"]
];

function renderValue(value) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-3">
        {value.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-sm leading-7 text-slate-600">{value}</p>;
}

function CaseStudyDialog({ study, onClose }) {
  const modalSections = useMemo(
    () => detailSections.map(([key, label]) => ({ key, label, content: study?.[key] })),
    [study]
  );

  useEffect(() => {
    if (!study) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, study]);

  if (!study) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-slate-950/45 p-4 sm:p-6">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${study.id}-title`}
        className="surface-card-strong relative z-10 mt-10 w-full max-w-6xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Case Study</p>
            <h3 id={`${study.id}-title`} className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              {study.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-slate-950"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-200 bg-slate-50/80 p-6 lg:block">
            <div className="sticky top-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Jump to</p>
              {modalSections.map((section) => (
                <a
                  key={section.key}
                  href={`#${study.id}-${section.key}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-slate-950"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{metric.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-8">
              {modalSections.map((section) => (
                <section
                  id={`${study.id}-${section.key}`}
                  key={section.key}
                  className="rounded-[28px] border border-slate-200/80 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      {section.key.toLowerCase().includes("impact") ? (
                        <FiBarChart2 className="h-4 w-4" />
                      ) : (
                        <FiTarget className="h-4 w-4" />
                      )}
                    </span>
                    <h4 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{section.label}</h4>
                  </div>
                  <div className="mt-4">{renderValue(section.content)}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <section id="case-studies" className="section-shell">
      <div className="page-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Case Studies"
            title="A selection of product problems I explored, structured, and solved through research, prioritization, and strategic thinking."
            copy="These case studies are designed like PM stories, not project repos. Each one highlights problem framing, decision logic, and expected user or business impact."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 90}>
              <article className="surface-card h-full p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow border-transparent bg-slate-100 text-slate-600">{`0${index + 1}`}</span>
                  <span className="pill-tag">{study.impact}</span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{study.title}</h3>
                <p className="mt-4 text-sm font-medium text-slate-800">{study.problemStatement}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStudy(study)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deep"
                >
                  Read Case Study
                  <FiArrowUpRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <CaseStudyDialog study={activeStudy} onClose={() => setActiveStudy(null)} />
    </section>
  );
}
