import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

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

const GoogleGlyph = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export const Hero = () => {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative pt-28 md:pt-36 pb-24 md:pb-32 gradient-hero overflow-hidden"
    >
      {/* Editorial paper texture */}
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Rotated background wordmark */}
      <motion.div
        aria-hidden
        style={{ y: watermarkY }}
        className="absolute -left-24 md:-left-32 top-1/2 -translate-y-1/2 -rotate-90 origin-center pointer-events-none select-none hidden md:block"
      >
        <span className="font-display text-[10rem] lg:text-[14rem] font-semibold tracking-tighter leading-none uppercase whitespace-nowrap text-foreground/[0.035]">
          Dental Excellence
        </span>
      </motion.div>

      <div className="container relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* LEFT — Editorial type column */}
        <motion.div style={{ y: textY }} className="lg:col-span-6 relative z-20">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8 md:mb-10 overflow-hidden"
          >
            <span className="h-px w-14 bg-[hsl(var(--gold))]" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[hsl(var(--gold))]">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light leading-[0.9] tracking-[-0.02em] text-foreground text-[clamp(2.1rem,7vw,6.5rem)]"
          >
            {t.hero.titleA.split(" ").slice(0, -1).join(" ")}{" "}
            <br className="hidden sm:block" />
            <em className="italic font-normal text-[hsl(var(--gold))]">
              {t.hero.titleA.split(" ").slice(-1)[0]}{" "}
              {t.hero.titleB.split(" ").slice(0, 1)[0]}
            </em>
            <br className="hidden sm:block" />{" "}
            <span className="font-light">
              {t.hero.titleB.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-md text-[15px] leading-[1.75] text-foreground/65 font-light"
          >
            {t.hero.desc1} <span className="text-foreground/45">— {t.hero.desc3}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            {/* Primary — vertical fill on hover */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[11px] uppercase tracking-[0.22em] font-semibold overflow-hidden shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)] transition-shadow duration-500 hover:shadow-[0_24px_50px_-18px_hsl(var(--gold)/0.55)]"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
                {t.hero.cta1}
              </span>
              <span className="absolute inset-0 bg-[hsl(var(--gold))] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>

            {/* Secondary — underline link */}
            <a
              href="#services"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold text-foreground border-b border-foreground/20 pb-2 hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors"
            >
              {t.hero.cta2}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex items-center gap-6 md:gap-8"
          >
            <div className="flex -space-x-3">
              {[doc1, doc2, doc3].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover object-top ring-4 ring-[hsl(var(--background))] border border-[hsl(var(--gold)/0.35)]"
                />
              ))}
              <div className="w-11 h-11 rounded-full ring-4 ring-[hsl(var(--background))] bg-[hsl(var(--gold))] grid place-items-center text-[10px] font-bold text-[hsl(var(--primary-foreground))]">
                +10
              </div>
            </div>

            <div className="h-10 w-px bg-foreground/15" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-bold mb-1">
                {t.hero.stats[1]?.label ?? "5000+"}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                {t.hero.stats[2]?.label ?? "Yevropa standartlari"}
              </div>
            </div>
          </motion.div>

          {/* Editorial stat rule */}
          <div
            ref={statsRef}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-2xl border-t border-foreground/15 pt-8"
          >
            {statValues.map((v, i) => {
              const C = () => {
                const val = useCounter(v, run);
                return (
                  <div className="flex flex-col gap-1.5">
                    <div className="font-display text-3xl md:text-4xl font-normal text-foreground leading-none tabular-nums">
                      {val.toLocaleString()}
                      <span className="text-[hsl(var(--gold))]">{statSuffix[i]}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
                      {t.hero.stats[i].label}
                    </div>
                  </div>
                );
              };
              return <C key={i} />;
            })}
          </div>
        </motion.div>

        {/* RIGHT — Architectural framed plate */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end pt-6 pb-24 lg:pb-16"
        >
          <div className="relative w-full max-w-[460px] aspect-[4/5]">
            {/* Architectural offset borders */}
            <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-full h-full border border-[hsl(var(--gold))]/35 z-0 pointer-events-none" />
            <div className="absolute -bottom-5 md:-bottom-8 -left-5 md:-left-8 w-1/2 h-1/2 border-l border-b border-foreground/15 z-0 pointer-events-none" />

            {/* Main framed image */}
            <div className="relative w-full h-full overflow-hidden z-10 shadow-[30px_30px_80px_-20px_hsl(var(--primary)/0.25)]">
              <motion.img
                src={heroImg}
                alt="DentaLux — Toshkentdagi premium stomatologiya interyeri"
                fetchPriority="high"
                decoding="async"
                width={1280}

                height={1600}
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/35 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--background))]/10 pointer-events-none" />

              {/* Plate caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[hsl(var(--background))]/90">
                <span className="text-[9px] uppercase tracking-[0.4em]">— Plate N° I</span>
                <span className="text-[9px] uppercase tracking-[0.3em] opacity-75">
                  Mirzo Ulug‘bek · 2014
                </span>
              </div>
            </div>

            {/* Floating dark "10+" credibility badge */}
            <motion.div
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="absolute -bottom-24 md:-bottom-28 right-0 md:-right-6 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-6 md:p-8 z-30 shadow-elevated min-w-[190px] md:min-w-[210px]"
            >
              <div className="font-display text-6xl md:text-7xl font-light leading-none text-[hsl(var(--gold))] tabular-nums">
                10<span className="text-2xl md:text-3xl align-top">+</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] mt-3 opacity-75 font-medium whitespace-nowrap">
                {t.hero.stats[0]?.label ?? "Yillik tajriba"}
              </div>
              <svg
                className="absolute top-3 right-3 w-6 h-6 opacity-25"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>

            {/* Floating Google rating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="absolute -top-6 -left-4 md:-left-12 bg-[hsl(var(--background))]/95 backdrop-blur-md border border-foreground/10 p-5 z-30 shadow-elevated flex items-center gap-4"
            >
              <div className="w-11 h-11 grid place-items-center bg-[hsl(var(--background))] shadow-inner">
                <GoogleGlyph />
              </div>
              <div>
                <div className="flex gap-0.5 text-[hsl(var(--gold))] mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-foreground/50">
                  4.9 · 312 sharhlar
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
