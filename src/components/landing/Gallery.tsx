import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";

type Sample = { cat: number; before: string; after: string };

// SVG-based teeth before/after to avoid extra image weight + load instantly
const teethSVG = (variant: "before" | "after", hue: number) => {
  const isBefore = variant === "before";
  const fill = isBefore ? `hsl(${hue} 25% 70%)` : "#FAFAF6";
  const gum = isBefore ? `hsl(${hue} 35% 55%)` : `hsl(345 50% 65%)`;
  const stain = isBefore;
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
      <defs>
        <linearGradient id='bg' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0' stop-color='${isBefore ? "#2a2a2a" : "#1a3b38"}'/>
          <stop offset='1' stop-color='${isBefore ? "#1a1a1a" : "#0e2422"}'/>
        </linearGradient>
      </defs>
      <rect width='600' height='400' fill='url(#bg)'/>
      <ellipse cx='300' cy='240' rx='240' ry='90' fill='${gum}' opacity='0.8'/>
      ${Array.from({ length: 10 }).map((_, i) => {
        const x = 80 + i * 48;
        const w = 40, h = 70;
        return `<rect x='${x}' y='180' width='${w}' height='${h}' rx='10' fill='${fill}'/>${
          stain ? `<rect x='${x + 4}' y='${190 + (i % 3) * 8}' width='${w - 8}' height='6' rx='3' fill='hsl(${hue} 30% 45%)' opacity='0.6'/>` : ""
        }`;
      }).join("")}
      <ellipse cx='300' cy='180' rx='240' ry='40' fill='${gum}' opacity='0.9'/>
    </svg>
  `)}`;
};

const samples: Sample[] = [
  { cat: 0, before: teethSVG("before", 35), after: teethSVG("after", 0) },
  { cat: 0, before: teethSVG("before", 25), after: teethSVG("after", 0) },
  { cat: 1, before: teethSVG("before", 30), after: teethSVG("after", 0) },
  { cat: 2, before: teethSVG("before", 40), after: teethSVG("after", 0) },
  { cat: 2, before: teethSVG("before", 45), after: teethSVG("after", 0) },
  { cat: 3, before: teethSVG("before", 20), after: teethSVG("after", 0) },
];

const Comparison = ({ before, after, labelBefore, labelAfter }: { before: string; after: string; labelBefore: string; labelAfter: string }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-card border border-border bg-foreground select-none aspect-[4/3]">
      <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img src={before} alt="before" className="w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} loading="lazy" />
      </div>
      <div className="absolute inset-y-0 w-0.5 bg-white shadow-glow pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white grid place-items-center shadow-elevated">
          <span className="text-foreground text-sm">⇆</span>
        </div>
      </div>
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-foreground/70 text-background text-[10px] font-bold uppercase tracking-wider backdrop-blur">{labelBefore}</span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">{labelAfter}</span>
      <input
        type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Before/after slider"
      />
    </div>
  );
};

export const Gallery = () => {
  const { t } = useLang();
  const [cat, setCat] = useState<number | null>(null);
  const filtered = cat === null ? samples : samples.filter((s) => s.cat === cat);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.gallery.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.gallery.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.gallery.desc}</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setCat(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              cat === null ? "gradient-primary text-primary-foreground border-transparent shadow-soft" : "border-border text-foreground/70 hover:border-primary hover:text-primary"
            }`}
          >
            All
          </button>
          {t.gallery.categories.map((c, i) => (
            <button
              key={c}
              onClick={() => setCat(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                cat === i ? "gradient-primary text-primary-foreground border-transparent shadow-soft" : "border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filtered.slice(0, 4).map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <Comparison before={s.before} after={s.after} labelBefore={t.gallery.labelBefore} labelAfter={t.gallery.labelAfter} />
              <p className="mt-3 text-sm text-muted-foreground text-center font-medium">{t.gallery.categories[s.cat]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
