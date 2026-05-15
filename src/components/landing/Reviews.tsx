import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Reviews = () => {
  const { t } = useLang();
  const items = [...t.reviews.items, ...t.reviews.items]; // duplicate for seamless loop

  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted/50 overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.reviews.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.reviews.title}</h2>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-card">
            <span className="font-display text-lg font-semibold">4.9</span>
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm text-muted-foreground">{t.reviews.googleBadge}</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 marquee w-max">
          {items.map((r, i) => (
            <article key={i} className="w-[340px] sm:w-[380px] shrink-0 bg-card border border-border rounded-3xl p-7 shadow-card">
              <div className="flex">{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="w-4 h-4 fill-secondary text-secondary" />)}</div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">«{r.text}»</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.treatment}</p>
                </div>
                <div className="w-9 h-9 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-semibold">
                  {r.name[0]}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
