import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, HeartHandshake } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const icons = [HeartHandshake, Microscope, Award, ShieldCheck];

export const About = () => {
  const { t } = useLang();
  return (
    <section id="why" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.why.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.why.title}</h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.why.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={it.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-elevated transition-all"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary text-primary-foreground grid place-items-center shadow-soft">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
