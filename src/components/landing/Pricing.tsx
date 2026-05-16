import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, CreditCard } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const fmt = (n: number) => n.toLocaleString("ru-RU").replace(/,/g, " ");

export const Pricing = () => {
  const { t } = useLang();
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.pricing.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.pricing.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.pricing.desc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 text-primary text-xs font-bold">
              <Check className="w-3.5 h-3.5" /> {t.pricing.free}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-gold text-foreground text-xs font-bold shadow-soft">
              <CreditCard className="w-3.5 h-3.5" /> {t.pricing.installment}
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-5xl">
          {t.pricing.items.map((p, i) => {
            const featured = p.price === 7900000 || p.price === 2490000;
            return (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group flex items-center justify-between gap-6 p-5 md:p-6 rounded-2xl bg-card border transition-all hover:shadow-card ${
                  featured ? "border-primary/30" : "border-border"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center shrink-0 group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{p.name}</h3>
                    {featured && <span className="text-[10px] font-bold uppercase tracking-wider text-gold">★ Premium</span>}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {p.price === 0 ? (
                    <div className="font-display text-2xl text-primary">{p.note}</div>
                  ) : (
                    <>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.pricing.from}</div>
                      <div className="font-display text-xl md:text-2xl font-semibold">{fmt(p.price)} <span className="text-xs text-muted-foreground font-sans">{t.pricing.currency}</span></div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <Button asChild size="lg" className="px-8">
            <a href="#contact">{t.nav.ctaLong}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
