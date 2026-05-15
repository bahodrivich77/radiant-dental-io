import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
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
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.doctors.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.doctors.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.doctors.desc}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.doctors.items.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }}
              className="group relative bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-32 gradient-primary opacity-90" />
              <div className="absolute inset-x-0 top-0 h-32 gradient-mesh opacity-50" />
              <div className="relative mt-8 mx-auto w-28 h-28 rounded-full bg-background border-4 border-background shadow-elevated grid place-items-center">
                <span className="font-display text-4xl text-primary font-semibold">{initials(d.name)}</span>
              </div>
              <h3 className="relative mt-6 font-display text-2xl">{d.name}</h3>
              <p className="relative mt-1 text-sm text-primary font-semibold">{d.role}</p>
              <p className="relative mt-1 text-xs text-muted-foreground">{d.years} {t.doctors.yearsLabel}</p>
              <div className="relative mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold">
                <GraduationCap className="w-3.5 h-3.5" /> {d.edu}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
