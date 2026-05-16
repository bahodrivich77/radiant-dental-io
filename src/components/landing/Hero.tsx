import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { useLang } from "@/i18n/LanguageContext";

const statValues = [10, 5000, 98, 1];
const statSuffix = ["+", "+", "%", ""];

const useCounter = (to: number, run: boolean, duration = 1600) => {
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
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-none">
        {v.toLocaleString()}<span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
    </div>
  );
};

export const Hero = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-primary/15 text-primary text-xs font-semibold shadow-card">
            <ShieldCheck className="w-4 h-4" /> {t.hero.badge}
          </span>
          <h1 className="font-display mt-6 text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.02]">
            {t.hero.titleA} <em className="not-italic text-gradient">{t.hero.titleB}</em>
          </h1>
          <div className="mt-7 space-y-1.5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            <p>{t.hero.desc1}</p>
            <p>{t.hero.desc2}</p>
            <p>{t.hero.desc3}</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all border-0">
              <a href="#contact">{t.hero.cta1} <ArrowRight className="ml-1 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 border-foreground/15 hover:border-primary hover:text-primary bg-transparent">
              <a href="#services">{t.hero.cta2}</a>
            </Button>
          </div>

          <div ref={ref} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-xl border-t border-border pt-8">
            {statValues.map((v, i) => (
              <StatCell key={i} to={v} suffix={statSuffix[i]} label={t.hero.stats[i].label} run={run} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="absolute -inset-8 gradient-primary rounded-[3rem] blur-3xl opacity-15" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated">
            <img src={heroImg} alt="DentaLux clinic" width={1280} height={960} className="w-full h-auto object-cover aspect-[4/5] md:aspect-[4/4.5]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="absolute -bottom-5 -left-3 md:-left-8 bg-card/95 backdrop-blur rounded-2xl shadow-elevated p-4 flex items-center gap-3 max-w-[260px] border border-border">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />)}</div>
            <div className="text-sm"><strong className="font-display text-base">4.9</strong> · Google</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="absolute -top-4 -right-2 md:-right-6 bg-card/95 backdrop-blur rounded-2xl shadow-elevated p-4 border border-border">
            <div className="font-display text-3xl font-semibold text-gradient">98%</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
