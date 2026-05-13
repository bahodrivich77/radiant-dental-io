import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Smile, Shield, Baby, Crown, Brackets, Activity } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Sparkles, Crown, Stethoscope, Brackets, Smile, Activity, Baby, Shield];

export const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.services.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            {t.services.titleA} <span className="text-gradient">{t.services.titleB}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.services.desc}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ y: -6 }}
                className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-card hover:shadow-soft transition-all overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <div className="relative w-14 h-14 rounded-2xl bg-accent text-primary grid place-items-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
