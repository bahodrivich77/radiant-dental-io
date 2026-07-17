import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const fmt = (n: number) => n.toLocaleString("ru-RU").replace(/,/g, " ");

export const Pricing = () => {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden bg-[hsl(var(--muted)/0.5)]">
      <div className="absolute inset-0 gradient-mesh opacity-25 pointer-events-none" />
      <div className="container relative">
        {/* Header — asymmetric editorial */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">§ 05</span>
              <span className="h-px w-14 bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/50">{t.pricing.kicker}</span>
            </div>
            <h2 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-foreground text-[clamp(2.4rem,5.6vw,4.8rem)]">
              {t.pricing.title.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="italic text-[hsl(var(--gold))] font-normal">
                {t.pricing.title.split(" ").slice(-1)[0]}
              </em>
              <span className="text-[hsl(var(--gold))]">.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-5 lg:pb-3"
          >
            <p className="text-[15px] leading-[1.75] text-foreground/60 font-light max-w-md">
              {t.pricing.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-[hsl(var(--primary)/0.2)] text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                <Check className="w-3 h-3" /> {t.pricing.free}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(var(--gold))] text-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
                <CreditCard className="w-3 h-3" /> {t.pricing.installment}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Fine-dining ledger */}
        <div className="max-w-4xl mx-auto bg-background/60 backdrop-blur-sm border border-foreground/10 p-6 md:p-14 shadow-card">
          {/* Menu header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-foreground/15">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-semibold text-foreground/60">
                Carte des soins · MMXIV
              </span>
            </div>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.35em] font-semibold text-foreground/40">
              {t.pricing.from} / {t.pricing.currency}
            </span>
          </div>

          <ul className="space-y-1">
            {t.pricing.items.map((p, i) => {
              const featured = p.price === 7900000 || p.price === 2490000;
              return (
                <motion.li
                  key={p.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group grid grid-cols-[auto,1fr,auto] items-baseline gap-3 md:gap-4 py-4 md:py-5 border-b border-dashed border-foreground/10 last:border-0 hover:border-solid hover:border-[hsl(var(--gold))/40] transition-colors"
                >
                  <span className="font-display text-sm text-foreground/40 tabular-nums w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-baseline min-w-0 gap-2">
                    <h3 className="font-display text-lg md:text-2xl font-light tracking-[-0.01em] truncate">
                      {p.name}
                      {featured && (
                        <span className="ml-2 align-middle inline-block text-[9px] uppercase tracking-[0.25em] font-bold text-[hsl(var(--gold))]">
                          ★
                        </span>
                      )}
                    </h3>
                    {/* Leader dots */}
                    <span
                      aria-hidden
                      className="flex-1 mx-2 h-px self-center border-b border-dotted border-foreground/25 min-w-4"
                    />
                  </div>
                  <div className="text-right shrink-0">
                    {p.price === 0 ? (
                      <span className="font-display text-lg md:text-xl italic text-[hsl(var(--gold))]">
                        {p.note}
                      </span>
                    ) : (
                      <span className="font-display text-lg md:text-2xl font-normal tabular-nums">
                        {fmt(p.price)}
                        <span className="text-[10px] text-foreground/40 font-sans uppercase tracking-widest ml-1.5">
                          {t.pricing.currency}
                        </span>
                      </span>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <div className="mt-10 pt-8 border-t border-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-5">
            <span className="text-[10px] uppercase tracking-[0.32em] font-semibold text-foreground/50">
              — Yashirin to‘lovlar yo‘q
            </span>
            <Button
              asChild
              size="lg"
              className="rounded-none bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--gold))] hover:text-foreground px-10 text-[11px] uppercase tracking-[0.22em] font-semibold transition-colors duration-500"
            >
              <a href="#contact">{t.nav.ctaLong}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
