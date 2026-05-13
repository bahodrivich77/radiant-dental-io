import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

const prices = ["390 000", "890 000", "1 990 000"];
const featured = [false, true, false];

export const Pricing = () => {
  const { t } = useLang();
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.pricing.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            {t.pricing.titleA} <span className="text-gradient">{t.pricing.titleB}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t.pricing.desc}</p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((p, i) => {
            const isFeat = featured[i];
            return (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${isFeat ? "gradient-primary text-primary-foreground shadow-elevated md:-translate-y-4 md:scale-105" : "bg-card border border-border shadow-card"}`}>
                {isFeat && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-card">
                    <Sparkles className="w-3.5 h-3.5" /> {t.pricing.popular}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-1 text-sm ${isFeat ? "opacity-90" : "text-muted-foreground"}`}>{p.desc}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">{prices[i]}</span>
                  <span className={`text-sm ${isFeat ? "opacity-90" : "text-muted-foreground"}`}>{t.pricing.currency}</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center flex-shrink-0 ${isFeat ? "bg-white/20" : "bg-accent text-primary"}`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`mt-8 rounded-full h-12 border-0 ${isFeat ? "bg-white text-primary hover:bg-white/90" : "gradient-primary text-primary-foreground"}`}>
                  <a href="#contact">{p.cta}</a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
