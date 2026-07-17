import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-clinic.jpg";
import before1 from "@/assets/smile-before.jpg";
import after1 from "@/assets/smile-after.jpg";
import before2 from "@/assets/smile-before-2.jpg";
import after2 from "@/assets/smile-after-2.jpg";

const visuals = [after1, after2, before1, heroImg, before2, after1];

export const Services = () => {
  const { t } = useLang();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden bg-background">
      <div className="container">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">
                § 01
              </span>
              <span className="h-px w-14 bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/50">
                {t.services.kicker}
              </span>
            </div>
            <h2 className="font-display font-light leading-[0.94] tracking-[-0.02em] text-foreground text-[clamp(2rem,5.6vw,4.8rem)]">
              {t.services.title.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="italic text-[hsl(var(--gold))] font-normal">
                {t.services.title.split(" ").slice(-1)[0]}
              </em>
              <span className="text-[hsl(var(--gold))]">.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 text-[15px] leading-[1.75] text-foreground/60 font-light lg:pb-3 max-w-md"
          >
            {t.services.desc}
          </motion.p>
        </div>

        {/* Editorial index list */}
        <div className="relative">
          {/* Floating preview image */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-[380px] pointer-events-none z-0">
            {t.services.items.map((_, i) => (
              <div
                key={i}
                className="absolute right-4 w-[340px] aspect-[4/5] overflow-hidden shadow-elevated transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  top: `${i * 96 - 40}px`,
                  opacity: hover === i ? 1 : 0,
                  transform: `translateY(${hover === i ? 0 : 40}px) scale(${hover === i ? 1 : 0.96})`,
                }}
              >
                <img
                  src={visuals[i % visuals.length]}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[hsl(var(--background))]">
                  <span className="text-[9px] uppercase tracking-[0.4em] opacity-80">
                    Plate N° {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <ul className="relative z-10 lg:pr-[420px] border-t border-foreground/15">
            {t.services.items.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group border-b border-foreground/15 relative"
              >
                <a
                  href="#contact"
                  className="grid grid-cols-[auto,1fr,auto] items-center gap-6 md:gap-10 py-7 md:py-9 relative"
                >
                  {/* Hover fill wash */}
                  <span className="absolute inset-0 bg-[hsl(var(--gold)/0.06)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  <span className="relative font-display text-2xl md:text-3xl font-light text-foreground/35 group-hover:text-[hsl(var(--gold))] transition-colors duration-500 tabular-nums w-14 md:w-20">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative min-w-0">
                    <h3 className="font-display text-2xl md:text-4xl font-light tracking-[-0.01em] leading-tight transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[13px] md:text-sm text-foreground/55 font-light leading-relaxed max-w-lg">
                      {s.desc}
                    </p>
                  </div>

                  <span className="relative flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] font-semibold text-foreground/45 group-hover:text-[hsl(var(--gold))] transition-colors">
                    <span className="hidden md:inline">{t.services.more}</span>
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 group-hover:border-[hsl(var(--gold))] grid place-items-center transition-all duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
