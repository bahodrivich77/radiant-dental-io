import { motion } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s*|^Др\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

export const Doctors = () => {
  const { t } = useLang();
  const items = t.doctors.items;

  return (
    <section id="doctors" className="py-24 md:py-36 relative overflow-hidden">
      {/* subtle paper noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="container relative">
        {/* Editorial header — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">§ 04</span>
              <span className="h-px w-14 bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/50">
                {t.doctors.kicker} · Équipe
              </span>
            </div>
            <h2 className="font-display font-light leading-[0.9] tracking-[-0.02em] text-[clamp(2rem,5.8vw,5rem)]">
              {t.doctors.title.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="italic text-[hsl(var(--gold))] font-normal">
                {t.doctors.title.split(" ").slice(-1)[0]}
              </em>
              <span className="text-[hsl(var(--gold))]">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.75] text-foreground/60 font-light max-w-md lg:ml-auto">
              {t.doctors.desc}
            </p>
          </div>
        </div>

        {/* Editorial roster — plate style */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {items.map((d, i) => (
            <motion.li
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Portrait plate */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--primary))]/5">
                {/* offset gold frame */}
                <span className="absolute -top-3 -right-3 w-full h-full border border-[hsl(var(--gold))]/35 pointer-events-none z-0" />

                {/* portrait surface */}
                <div className="relative w-full h-full grid place-items-center bg-gradient-to-br from-[hsl(var(--primary))]/10 via-[hsl(var(--muted))] to-[hsl(var(--gold))]/10 overflow-hidden">
                  <span className="font-display italic text-[10rem] leading-none text-[hsl(var(--primary))]/25 select-none transition-transform duration-[1200ms] ease-out group-hover:scale-105">
                    {initials(d.name)}
                  </span>

                  {/* watermark plate no. */}
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.4em] text-foreground/40">
                    — Plate N° {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.3em] text-foreground/40">
                    Toshkent · MMXIV
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-6 pt-5 border-t border-foreground/15">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl md:text-[26px] leading-tight tracking-[-0.01em]">
                    {d.name.replace(/^Dr\.?\s*/i, "")}
                  </h3>
                  <span className="font-display text-[hsl(var(--gold))] tabular-nums text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-[0.28em] font-semibold text-[hsl(var(--gold))]">
                  {d.role}
                </p>
                <div className="mt-4 flex items-center gap-3 text-[12px] text-foreground/60">
                  <span className="tabular-nums font-medium text-foreground/80">
                    {d.years} <span className="text-foreground/40">— {t.doctors.yearsLabel}</span>
                  </span>
                  <span className="h-3 w-px bg-foreground/20" />
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span className="truncate">{d.edu}</span>
                  </span>
                </div>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-semibold text-foreground/70 border-b border-foreground/20 pb-1.5 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors"
                >
                  Qabulga yozilish
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
