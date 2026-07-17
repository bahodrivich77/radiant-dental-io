import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, HeartHandshake } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-clinic.jpg";

const icons = [HeartHandshake, Microscope, Award, ShieldCheck];

export const About = () => {
  const { t } = useLang();
  return (
    <section id="why" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — rotated caption + framed portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 aspect-[4/5]">
              {/* Rotated vertical label */}
              <div className="hidden lg:block absolute -left-8 top-0 h-full">
                <div className="rotate-180 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/40 whitespace-nowrap">
                  Maison DentaLux · Est. MMXIV · Tashkent
                </div>
              </div>

              {/* Offset frame */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-[hsl(var(--gold)/0.4)] pointer-events-none z-0" />

              <div className="relative w-full h-full overflow-hidden shadow-elevated z-10">
                <img
                  src={heroImg}
                  alt="DentaLux atelier"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[hsl(var(--background))]/90 text-[9px] uppercase tracking-[0.35em]">
                  <span>— Plate N° II</span>
                  <span className="opacity-70">Atelier · 2014</span>
                </div>
              </div>

              {/* Floating gold plate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -left-4 md:-left-10 bg-[hsl(var(--gold))] text-foreground p-6 md:p-7 z-30 shadow-elevated"
              >
                <div className="font-display text-5xl md:text-6xl font-light leading-none tabular-nums">
                  12<span className="text-2xl align-top">+</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.32em] mt-3 opacity-80 font-semibold">
                  Yillik meros
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT — editorial content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">§ 03</span>
                <span className="h-px w-14 bg-[hsl(var(--gold))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/50">
                  {t.why.kicker}
                </span>
              </div>
              <h2 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-foreground text-[clamp(2.2rem,5vw,4.4rem)]">
                {t.why.title.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="italic text-[hsl(var(--gold))] font-normal">
                  {t.why.title.split(" ").slice(-1)[0]}
                </em>
                <span className="text-[hsl(var(--gold))]">.</span>
              </h2>
            </motion.div>

            {/* 2-col principle grid */}
            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-2 border-t border-foreground/15">
              {t.why.items.map((it, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={it.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    className="group py-7 border-b border-foreground/15 sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 grid place-items-center w-10 h-10 rounded-full border border-foreground/20 text-foreground/70 group-hover:border-[hsl(var(--gold))] group-hover:text-[hsl(var(--gold))] transition-colors duration-500">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-display text-xs text-[hsl(var(--gold))] tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-xl md:text-2xl font-light leading-tight tracking-[-0.01em]">
                            {it.title}
                          </h3>
                        </div>
                        <p className="text-[13px] md:text-sm text-foreground/60 font-light leading-relaxed">
                          {it.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
