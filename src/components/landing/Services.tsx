import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Crown, Stethoscope, Brackets, Smile, Baby } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Crown, Sparkles, Smile, Stethoscope, Baby, Brackets];

export const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.services.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.services.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl">{t.services.desc}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.a key={s.title} href="#contact"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-card hover:shadow-elevated transition-all overflow-hidden block"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <div className="flex items-start justify-between">
                  <div className="relative w-14 h-14 rounded-2xl bg-accent text-primary grid place-items-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="relative mt-6 font-display text-2xl">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-80">
                  {t.services.more} <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
