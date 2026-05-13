import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-40 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-primary/20 text-primary text-xs font-semibold shadow-card">
            <ShieldCheck className="w-4 h-4" /> {t.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            {t.hero.titleA} <span className="text-gradient">{t.hero.titleB}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">{t.hero.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-base gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all border-0">
              <a href="#contact">{t.hero.cta1} <ArrowRight className="ml-1 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2">
              <a href="#services">{t.hero.cta2}</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">4.9/5</strong> · {t.hero.rating}</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute -inset-8 gradient-primary rounded-[3rem] blur-3xl opacity-20" aria-hidden />
          <img src={heroImg} alt={t.hero.altImg} width={1280} height={960} className="relative w-full h-auto rounded-[2rem] shadow-elevated object-cover aspect-[4/3]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-elevated p-4 flex items-center gap-3 max-w-[260px]">
            <div className="w-12 h-12 rounded-xl gradient-primary grid place-items-center text-primary-foreground shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold">{t.hero.years}</div>
              <div className="text-xs text-muted-foreground">{t.hero.yearsExp}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="absolute -top-4 -right-2 md:-right-6 bg-white rounded-2xl shadow-elevated p-4">
            <div className="text-3xl font-extrabold text-gradient">98%</div>
            <div className="text-xs text-muted-foreground">{t.hero.happy}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
