import { navigationLinks } from "../data/site-content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 py-8">
      <div className="page-shell flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">Harshit</p>
          <p>Aspiring Product Manager</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <p>{new Date().getFullYear()} Harshit</p>
      </div>
    </footer>
  );
}
