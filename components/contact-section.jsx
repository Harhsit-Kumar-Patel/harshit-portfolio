"use client";

import { useState } from "react";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { contactLinks } from "../data/site-content";
import Reveal from "./ui/reveal";
import SectionHeader from "./ui/section-header";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${formData.name || "a visitor"}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:harshit.mzp888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="page-shell">
        <Reveal>
          <SectionHeader
            eyebrow="Let's Connect"
            title="I’m actively exploring product opportunities, internships, and thoughtful conversations."
            copy="If you’re hiring or want to connect, I’d love to hear from you."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="surface-card-strong h-full p-6 sm:p-8">
              <div className="grid gap-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={index > 0 ? "_blank" : undefined}
                    rel={index > 0 ? "noreferrer" : undefined}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 p-5 hover:-translate-y-1 hover:bg-white"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{link.label}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{link.value}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Open
                      <FiArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2 w-full rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-900 placeholder:text-slate-400"
                    placeholder="Tell me a little about the opportunity or conversation you have in mind."
                    required
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="button-primary">
                    Send Message
                    <FiSend className="h-4 w-4" />
                  </button>
                  <a href="/resume.pdf" download className="button-secondary">
                    Download Resume
                  </a>
                </div>

                {submitted ? (
                  <p className="rounded-2xl border border-accent/15 bg-accent-soft px-4 py-3 text-sm text-accent-deep">
                    Your email app should open with the message prefilled. If it doesn&apos;t, you can also write directly to harshit.mzp888@gmail.com.
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
