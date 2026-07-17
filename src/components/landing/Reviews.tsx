import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Reviews = () => {
  const { t } = useLang();
  const items = [...t.reviews.items, ...t.reviews.items];

  return (
    <section
      id="reviews"
      className="py-24 md:py-36 relative overflow-hidden bg-[hsl(var(--background))]"
    >
      {/* watermark */}
      <div className="absolute -right-16 top-24 rotate-90 origin-center pointer-events-none select-none hidden lg:block">
        <span className="font-display text-[9rem] font-semibold tracking-tighter leading-none uppercase text-foreground/[0.035] whitespace-nowrap">
          Témoignages
        </span>
      </div>

      <div className="container relative">
        {/* Editorial header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">§ 08</span>
              <span className="h-px w-14 bg-[hsl(var(--gold))]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-foreground/50">
                {t.reviews.kicker} · Voix
              </span>
            </div>
            <h2 className="font-display font-light leading-[0.9] tracking-[-0.02em] text-[clamp(2rem,5.8vw,5rem)]">
              {t.reviews.title.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="italic text-[hsl(var(--gold))] font-normal">
                {t.reviews.title.split(" ").slice(-1)[0]}
              </em>
              <span className="text-[hsl(var(--gold))]">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="inline-flex items-center gap-4 px-5 py-4 border border-foreground/15 bg-[hsl(var(--background))]">
              <div className="font-display text-4xl leading-none text-foreground tabular-nums">
                4.9<span className="text-[hsl(var(--gold))]">/5</span>
              </div>
              <div className="h-8 w-px bg-foreground/15" />
              <div>
                <div className="flex gap-0.5 text-[hsl(var(--gold))] mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-foreground/50">
                  {t.reviews.googleBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ledger */}
      <div className="relative border-y border-foreground/15 bg-[hsl(var(--muted))]/40 py-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(var(--muted))]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(var(--muted))]/80 to-transparent z-10" />
        <div className="flex gap-8 marquee w-max">
          {items.map((r, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
              className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 bg-[hsl(var(--background))] border border-foreground/10 p-7 sm:p-8 md:p-9 relative"
            >
              <Quote
                className="absolute top-6 right-6 w-8 h-8 text-[hsl(var(--gold))]/20"
                strokeWidth={1}
              />
              <div className="flex gap-0.5 text-[hsl(var(--gold))]">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-display italic text-xl md:text-[22px] leading-[1.45] text-foreground/85 font-light">
                “{r.text}”
              </p>
              <div className="mt-8 pt-5 border-t border-foreground/15 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold tracking-[0.02em] text-foreground">
                    — {r.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--gold))] mt-1">
                    {r.treatment}
                  </p>
                </div>
                <span className="font-display text-2xl italic text-foreground/25 tabular-nums">
                  {String((i % t.reviews.items.length) + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
