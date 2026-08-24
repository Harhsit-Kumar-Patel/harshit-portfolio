"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiBarChart2, FiTarget, FiX, FiFileText, FiUser, FiTrendingUp, FiFolder } from "react-icons/fi";
import { caseStudies } from "../data/site-content";
import Reveal from "./ui/reveal";

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
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{value}</p>;
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
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Product Spec</p>
            <h3 id={`${study.id}-title`} className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
              {study.title}
            </h3>
            <div className="mt-2 flex gap-4 text-xs font-semibold">
              {study.demoUrl && (
                <a
                  href={study.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-deep hover:underline inline-flex items-center gap-0.5"
                >
                  View Product Demo <FiArrowUpRight className="h-3 w-3" />
                </a>
              )}
              {study.caseStudyUrl && (
                <a
                  href={study.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-deep hover:underline inline-flex items-center gap-0.5"
                >
                  View Case Study Site <FiArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 p-6 lg:block">
            <div className="sticky top-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">PRD Jump to</p>
              {modalSections.map((section) => (
                <a
                  key={section.key}
                  href={`#${study.id}-${section.key}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-600 dark:text-slate-350 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{metric.note}</p>
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

            <p className="mt-4 text-base font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              {study.problemStatement}
            </p>

            <div className="mt-8 space-y-8">
              {modalSections.map((section) => (
                <section
                  id={`${study.id}-${section.key}`}
                  key={section.key}
                  className="rounded-[28px] border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                      {section.key.toLowerCase().includes("impact") ? (
                        <FiBarChart2 className="h-4 w-4" />
                      ) : (
                        <FiTarget className="h-4 w-4" />
                      )}
                    </span>
                    <h4 className="text-lg font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">{section.label}</h4>
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
  const [filter, setFilter] = useState("all");

  const projectSpecs = [
    {
      id: "ai-copilot",
      code: "PRD-101",
      title: "AI Product Execution Copilot",
      status: "SHIPPED",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      category: "ai",
      author: "Harshit Kumar Patel",
      updated: "Q3 2026",
      targetMetric: "-80% manual PRD writing time",
      summary: "Scoped and built an AI transcript parsing pipeline that automates developer-ready user stories and PRDs directly from team transcripts."
    },
    {
      id: "pathbyte",
      code: "PRD-102",
      title: "PathByte Career roadmap platform",
      status: "LIVE",
      statusColor: "bg-blue-50 text-blue-700 border-blue-100",
      category: "ux",
      author: "Harshit Kumar Patel",
      updated: "Q2 2026",
      targetMetric: "Curriculum roadmap alignment",
      summary: "Owned product discovery and onboarding flow design for a live career path tracking platform resolving student learning fragmentation."
    },
    {
      id: "convohub",
      code: "PRD-103",
      title: "ConvoHub Academic Split",
      status: "PROTOTYPED",
      statusColor: "bg-amber-50 text-amber-700 border-amber-100",
      category: "ux",
      author: "Harshit Kumar Patel",
      updated: "Q1 2026",
      targetMetric: "Announcement channel noise split",
      summary: "Designed UX information architecture wireframes based on customer interviews to separate high-priority updates from casual peer chats."
    },
    {
      id: "inventura",
      code: "PRD-104",
      title: "Inventura SMB Inventory Assistant",
      status: "PROTOTYPED",
      statusColor: "bg-amber-50 text-amber-700 border-amber-100",
      category: "ai",
      author: "Harshit Kumar Patel",
      updated: "Q2 2026",
      targetMetric: "Offline forecasting for small retail",
      summary: "Designed the spec for an offline-first inventory helper utilizing predictive demand modeling to minimize stock waste for local shops."
    }
  ];

  const getStudyData = (id) => caseStudies.find(study => study.id === id);

  const filteredSpecs = useMemo(() => {
    if (filter === "all") return projectSpecs;
    return projectSpecs.filter(spec => spec.category === filter);
  }, [filter]);

  return (
    <section id="case-studies" className="section-shell bg-slate-50/10">
      <div className="page-shell">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Specification Library
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-0.04em] text-slate-950">
                PRD & Spec Archive
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                A collection of product requirement documents (PRDs) detailing scoping, prioritization models, and metric levers.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-start md:self-end">
              {[
                { id: "all", label: "All Specs" },
                { id: "ai", label: "AI Workflows" },
                { id: "ux", label: "UX & Discovery" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                    filter === tab.id
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Spec Archive Binder List */}
        <div className="space-y-4 max-w-5xl">
          {filteredSpecs.map((spec, idx) => {
            const study = getStudyData(spec.id);
            if (!study) return null;

            return (
              <Reveal key={spec.id} delay={idx * 60}>
                <article className="group relative bg-white border border-slate-200 rounded-[24px] p-6 hover:border-slate-350 hover:shadow-soft transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                    {/* Left side: Doc Meta info */}
                    <div className="space-y-3 flex-grow max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400 font-mono">
                          <FiFileText className="h-4.5 w-4.5 text-accent" />
                          {spec.code}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${spec.statusColor}`}>
                          {spec.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
                        {spec.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-slate-600">
                        {spec.summary}
                      </p>

                      {/* Row Metadata Tags */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium pt-2 border-t border-slate-50 mt-4">
                        <span className="flex items-center gap-1.5">
                          <FiUser className="h-4 w-4 text-slate-400" />
                          Owner: {spec.author}
                        </span>
                        <span className="hidden sm:inline text-slate-200">|</span>
                        <span className="flex items-center gap-1.5">
                          <FiTrendingUp className="h-4 w-4 text-slate-400" />
                          Metric: {spec.targetMetric}
                        </span>
                        <span className="hidden sm:inline text-slate-200">|</span>
                        <span className="flex items-center gap-1.5">
                          <FiFolder className="h-4 w-4 text-slate-400" />
                          Updated: {spec.updated}
                        </span>
                      </div>
                    </div>

                    {/* Right side: Action Triggers */}
                    <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto shrink-0 gap-3 md:self-center border-t border-slate-100 md:border-0 pt-4 md:pt-0">
                      <button
                        type="button"
                        onClick={() => setActiveStudy(study)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors w-full md:w-auto"
                      >
                        Open PRD Spec
                        <FiArrowUpRight className="h-4 w-4" />
                      </button>
                      
                      {study.demoUrl && (
                        <a
                          href={study.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-950 transition-colors px-4 py-2 border border-slate-200 rounded-xl w-full md:w-auto hover:bg-slate-50"
                        >
                          Launch Demo
                          <FiArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>

      <CaseStudyDialog study={activeStudy} onClose={() => setActiveStudy(null)} />
    </section>
  );
}
