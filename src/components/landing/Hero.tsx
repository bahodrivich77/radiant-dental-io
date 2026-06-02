import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { useLang } from "@/i18n/LanguageContext";

const statValues = [10, 5000, 98, 1];
const statSuffix = ["+", "+", "%", ""];

const useCounter = (to: number, run: boolean, duration = 1800) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to, duration]);
  return val;
};

const StatCell = ({ to, suffix, label, run }: { to: number; suffix: string; label: string; run: boolean }) => {
  const v = useCounter(to, run);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-display text-4xl md:text-5xl font-medium text-foreground leading-none tabular-nums">
        {v.toLocaleString()}
        <span className="text-[hsl(var(--gold))]">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

export const Hero = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Refined parallax — slower, more cinematic
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 gradient-hero overflow-hidden"
    >
      {/* Editorial paper texture */}
      <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Editorial floating index */}
      <div className="absolute top-28 md:top-36 right-6 md:right-12 hidden md:flex flex-col items-end gap-2 text-[10px] uppercase tracking-[0.35em] text-foreground/45 font-medium z-10">
        <span>N°01 — DentaLux</span>
        <span className="h-10 w-px bg-foreground/20" />
        <span className="[writing-mode:vertical-rl] rotate-180">Toshkent · 2014</span>
      </div>

      <div className="container relative grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Left — editorial text */}
        <motion.div style={{ y: textY }}>
          {/* Kicker line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-[hsl(var(--gold))]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/65 font-semibold">
              {t.hero.badge}
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.4em] text-foreground/30">
              — Est. MMXIV
            </span>
          </motion.div>

          {/* Display headline — editorial luxury */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.85rem,7.8vw,6.75rem)] font-normal leading-[0.92] tracking-[-0.025em] text-foreground"
          >
            {t.hero.titleA}
            <br />
            <em className="not-italic font-medium italic text-[hsl(var(--primary))]">
              {t.hero.titleB}
            </em>
            <span className="text-[hsl(var(--gold))] font-display italic">.</span>
          </motion.h1>

          {/* Display headline — editorial luxury */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-normal leading-[0.95] tracking-[-0.02em] text-foreground"
          >
            {t.hero.titleA}
            <br />
            <em className="not-italic font-medium italic text-[hsl(var(--primary))]">
              {t.hero.titleB}
            </em>
            <span className="text-[hsl(var(--gold))] font-display">.</span>
          </motion.h1>

          {/* Editorial lead paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-md"
          >
            <p className="text-base md:text-[17px] leading-[1.7] text-foreground/75 font-light">
              {t.hero.desc1} {t.hero.desc2}{" "}
              <span className="text-foreground/55 italic">— {t.hero.desc3}</span>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3 items-center"
          >
            <Button asChild size="lg" className="px-8 h-12 group">
              <a href="#contact">
                {t.hero.cta1}
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button asChild variant="link" className="text-foreground/80 hover:text-[hsl(var(--primary))] px-2">
              <a href="#services">{t.hero.cta2}</a>
            </Button>
          </motion.div>

          {/* Stats — editorial rule line */}
          <div
            ref={ref}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-2xl border-t border-foreground/15 pt-8"
          >
            {statValues.map((v, i) => (
              <StatCell key={i} to={v} suffix={statSuffix[i]} label={t.hero.stats[i].label} run={run} />
            ))}
          </div>
        </motion.div>

        {/* Right — editorial portrait frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: frameY }}
          className="relative"
        >
          {/* Gold serif watermark behind frame */}
          <div
            aria-hidden
            className="absolute -top-6 -left-6 md:-top-10 md:-left-12 font-display italic text-[hsl(var(--gold))]/15 text-[10rem] md:text-[14rem] leading-none select-none pointer-events-none"
          >
            ※
          </div>

          {/* Layered gold rule frame */}
          <div className="relative">
            {/* Outer hairline */}
            <div className="absolute -inset-4 md:-inset-7 border border-[hsl(var(--gold))]/25 pointer-events-none" />
            {/* Inner gold rule */}
            <div className="absolute -inset-1.5 md:-inset-2.5 border border-[hsl(var(--gold))]/55 pointer-events-none" />
            {/* Corner serifs */}
            <div className="absolute -top-4 -left-4 md:-top-7 md:-left-7 w-10 h-10 border-t border-l border-[hsl(var(--gold))]" />
            <div className="absolute -top-4 -right-4 md:-top-7 md:-right-7 w-10 h-10 border-t border-r border-[hsl(var(--gold))]" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-7 md:-left-7 w-10 h-10 border-b border-l border-[hsl(var(--gold))]" />
            <div className="absolute -bottom-4 -right-4 md:-bottom-7 md:-right-7 w-10 h-10 border-b border-r border-[hsl(var(--gold))]" />

            {/* Plate label on top of frame */}
            <div className="absolute -top-4 md:-top-7 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--background))] px-4 z-10">
              <span className="text-[9px] uppercase tracking-[0.5em] text-[hsl(var(--gold))] font-semibold">
                N° I — Atelier
              </span>
            </div>

            <div className="relative overflow-hidden shadow-elevated">
              <motion.img
                src={heroImg}
                alt="DentaLux clinic interior"
                width={1280}
                height={1600}
                style={{ y: imgY, scale: imgScale }}
                className="w-full h-auto object-cover aspect-[4/5] will-change-transform"
              />
              {/* Warmth + vignette wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/5 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--background))]/10 pointer-events-none" />

              {/* Caption — bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[hsl(var(--background))]">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] opacity-75">— Plate I</p>
                  <p className="font-display text-xl md:text-2xl mt-2 italic font-light leading-tight">
                    The studio of smiles
                  </p>
                </div>
                <p className="text-[9px] uppercase tracking-[0.3em] opacity-65 text-right">
                  Mirzo<br />Ulug‘bek
                </p>
              </div>
            </div>
          </div>

          {/* Floating Google card — counter-parallax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            style={{ y: cardY }}
            className="absolute -bottom-8 -left-3 md:-left-12 bg-background border border-foreground/10 shadow-elevated px-5 py-4 flex items-center gap-3 max-w-[260px]"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
              ))}
            </div>
            <div className="text-xs leading-tight">
              <div className="font-display text-lg leading-none tabular-nums">4.9</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Google · 312
              </div>
            </div>
          </motion.div>

          {/* Floating numeric badge — counter-parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
            className="absolute -top-5 -right-3 md:-right-10 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-6 py-5 shadow-elevated"
          >
            <div className="font-display text-4xl leading-none font-medium tabular-nums">
              10<span className="text-[hsl(var(--gold))] italic">+</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] opacity-80 mt-2">
              years · est. 2014
            </div>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
