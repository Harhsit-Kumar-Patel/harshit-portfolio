"use client";

import { useState } from "react";
import { FiBriefcase, FiCalendar, FiChevronDown, FiChevronUp, FiMapPin, FiLayers } from "react-icons/fi";
import Reveal from "./ui/reveal";

const expSpecs = [
  {
    id: "dutient",
    code: "EXP-101",
    role: "Product Management Intern",
    company: "Dutient.ai",
    period: "Aug 2026 - Present",
    status: "ACTIVE",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    location: "Remote",
    focus: "PRDs, User Research, Scrum Sprints",
    summary: "Supporting cross-functional product discovery, PRD drafting, sprint planning, and roadmap tracking for B2B AI features.",
    bullets: [
      "Supporting product discovery, requirements definition, and execution across cross-functional teams.",
      "Contributing to PRDs, user stories, acceptance criteria, and feature briefs for product initiatives.",
      "Supporting user research, usability testing, competitive analysis, and identification of product opportunities.",
      "Assisting with backlog prioritization, sprint planning, and roadmap tracking to support product delivery.",
      "Working across product strategy, GTM planning, customer discovery, product analytics, and feature adoption initiatives."
    ]
  },
  {
    id: "nakshatraa",
    code: "EXP-102",
    role: "Founder & Lead PM",
    company: "Nakshatraa.online",
    period: "Jul 2026 - Present",
    status: "ACTIVE",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    location: "Self-Employed",
    focus: "Startup PM, Roadmap Scoping, GTM",
    summary: "Founded and scaled an AI consultation platform. Managed product strategy, user onboarding, payments, and SEO growth strategy.",
    bullets: [
      "Founded and launched an AI-powered consultation platform offering astrology, relationship, and life-guidance services, taking it from concept to a live, customer-facing product.",
      "Ran customer discovery interviews to validate demand and shape the service offering and pricing.",
      "Designed the full customer journey, including onboarding, booking, consultation flow, payments, and retention.",
      "Own the product roadmap end to end: prioritize features based on customer feedback, and drive SEO and organic growth strategy."
    ]
  },
  {
    id: "ethara",
    code: "EXP-103",
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    period: "Jan 2026 - Jun 2026",
    status: "COMPLETED",
    statusColor: "bg-slate-50 text-slate-600 border-slate-200",
    location: "Hybrid",
    focus: "Model Eval, SFT Alignment",
    summary: "Evaluated LLM outputs for instruction-following, factuality, and reasoning quality. Supported SFT workflows.",
    bullets: [
      "Evaluated large language model outputs for reasoning quality, factual reliability, and instruction following.",
      "Supported supervised fine-tuning (SFT) workflows and dataset refinement to improve post-training performance.",
      "Worked on improving model alignment and response consistency across a wide range of prompts."
    ]
  },
  {
    id: "igr",
    code: "EXP-104",
    role: "Product Research Intern",
    company: "Institute for Global Research (IGR & SDGs)",
    period: "Jan 2026 - Jun 2026",
    status: "COMPLETED",
    statusColor: "bg-slate-50 text-slate-600 border-slate-200",
    location: "Remote",
    focus: "Market Research, EdTech PM",
    summary: "Conducted qualitative and quantitative discovery for AI/EdTech initiatives, building product roadmap recommendations.",
    bullets: [
      "Conducted market research and product discovery for AI and EdTech initiatives.",
      "Identified customer pain points through qualitative research and secondary analysis.",
      "Turned research findings into product recommendations that fed directly into roadmap planning."
    ]
  },
  {
    id: "santsai",
    code: "EXP-105",
    role: "Computer Science Faculty",
    company: "Sant Sai Shikshan Sansthan",
    period: "Jul 2025",
    status: "COMPLETED",
    statusColor: "bg-slate-50 text-slate-600 border-slate-200",
    location: "On-site",
    focus: "Technical Training & CS Instruction",
    summary: "Delivered CS curriculum and practical application coding labs, improving student course engagement.",
    bullets: [
      "Delivered practical, application-based Computer Science instruction and improved student engagement through structured lesson planning."
    ]
  }
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="section-shell">
      <div className="page-shell">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Experience Log
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-[-0.04em] text-slate-950">
              Work History Archive
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-650">
              A chronological index of my product management, AI post-training, and user research work.
            </p>
          </div>
        </Reveal>

        {/* Spec Rows (Full Width) */}
        <div className="space-y-4 max-w-5xl">
          {expSpecs.map((spec, idx) => {
            const isExpanded = expandedId === spec.id;

            return (
              <Reveal key={spec.id} delay={idx * 60}>
                <div
                  className="bg-white border border-slate-200 rounded-[20px] p-5 hover:border-slate-350 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    {/* Row Top: Code & Status */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 font-mono">
                        <FiBriefcase className="h-4 w-4 text-accent" />
                        {spec.code}
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${spec.statusColor}`}>
                        {spec.status}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mt-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-tight">
                        {spec.role}
                      </h3>
                      <span className="text-sm sm:text-base font-semibold text-slate-500">
                        {spec.company}
                      </span>
                    </div>

                    {/* Summary description */}
                    <p className="mt-2 text-sm sm:text-base text-slate-605 leading-relaxed">
                      {spec.summary}
                    </p>

                    {/* Expandable Bullet points details SOW */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                          Deliverables & SOW
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-sm sm:text-base leading-relaxed text-slate-650">
                          {spec.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="pl-1">
                              <span className="text-slate-650">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Row Metadata Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-50 mt-3">
                      <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] sm:text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="h-3.5 w-3.5 text-slate-400" />
                          {spec.location}
                        </span>
                        <span className="hidden sm:inline text-slate-200">|</span>
                        <span className="flex items-center gap-1">
                          <FiLayers className="h-3.5 w-3.5 text-slate-400" />
                          Focus: {spec.focus}
                        </span>
                        <span className="hidden sm:inline text-slate-200">|</span>
                        <span className="flex items-center gap-1">
                          <FiCalendar className="h-3.5 w-3.5 text-slate-400" />
                          {spec.period}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpand(spec.id)}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-accent hover:text-accent-deep transition-colors select-none"
                      >
                        {isExpanded ? (
                          <>
                            Hide SOW
                            <FiChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            View SOW
                            <FiChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
}
