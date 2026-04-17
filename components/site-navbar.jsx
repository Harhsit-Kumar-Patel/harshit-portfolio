"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navigationLinks } from "../data/site-content";

export default function SiteNavbar() {
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.55]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 sm:px-6">
      <div className="page-shell">
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/72 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              H
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[-0.02em] text-slate-950">Harshit</p>
              <p className="text-xs text-slate-500">Aspiring Product Manager</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navigationLinks.map((link) => {
              const active = activeId === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
          >
            {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-200 md:hidden ${
            mobileOpen ? "mt-3 max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="surface-card p-3">
            <nav className="flex flex-col gap-1">
              {navigationLinks.map((link) => {
                const active = activeId === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-slate-950 text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
