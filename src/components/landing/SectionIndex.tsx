import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", n: "01", label: "Atelier" },
  { id: "services", n: "02", label: "Soins" },
  { id: "process", n: "03", label: "Protocole" },
  { id: "why", n: "04", label: "Maison" },
  { id: "doctors", n: "05", label: "Équipe" },
  { id: "gallery", n: "06", label: "Galerie" },
  { id: "pricing", n: "07", label: "Carte" },
  { id: "reviews", n: "08", label: "Voix" },
  { id: "contact", n: "09", label: "Contact" },
];

export const SectionIndex = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section index"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 py-3 px-2"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => go(e, s.id)}
            className="group relative flex items-center justify-end gap-3 py-1.5 pr-1"
          >
            {/* Label pops out on hover / active */}
            <span
              className={`text-[10px] uppercase tracking-[0.28em] font-semibold transition-all duration-500 ${
                isActive
                  ? "opacity-100 translate-x-0 text-[hsl(var(--gold))]"
                  : "opacity-0 -translate-x-2 text-foreground/60 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              <span className="tabular-nums mr-2 text-foreground/40">{s.n}</span>
              {s.label}
            </span>
            {/* Rule mark */}
            <span
              aria-hidden
              className={`block h-px transition-all duration-500 ${
                isActive
                  ? "w-10 bg-[hsl(var(--gold))]"
                  : "w-5 bg-foreground/25 group-hover:w-8 group-hover:bg-foreground/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};
