import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Testimonials = () => {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);

  useEffect(() => {
    const tm = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(tm);
  }, [items.length]);

  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.testimonials.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            {t.testimonials.titleA} <span className="text-gradient">{t.testimonials.titleB}</span>
          </h2>
        </div>

        <div className="mt-12 relative bg-card border border-border rounded-[2rem] p-8 md:p-14 shadow-card overflow-hidden">
          <Quote className="w-16 h-16 text-primary/10 absolute top-6 right-6" />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="text-center">
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-6 text-lg md:text-2xl text-foreground leading-relaxed font-medium">«{items[i].text}»</p>
              <div className="mt-8">
                <p className="font-bold text-lg">{items[i].name}</p>
                <p className="text-sm text-muted-foreground">{items[i].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={prev} aria-label={t.testimonials.prev} className="w-11 h-11 grid place-items-center rounded-full border border-border hover:bg-accent hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`${idx + 1}`} className={`h-2 rounded-full transition-all ${idx === i ? "w-8 gradient-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
            <button onClick={next} aria-label={t.testimonials.next} className="w-11 h-11 grid place-items-center rounded-full border border-border hover:bg-accent hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
