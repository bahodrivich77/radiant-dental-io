import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageContext";

export const FAQ = () => {
  const { t } = useLang();
  return (
    <section id="faq" className="py-16 md:py-28 bg-muted/40">
      <div className="container max-w-3xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.faq.kicker}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold">
            {t.faq.titleA} <span className="text-gradient">{t.faq.titleB}</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">{t.faq.desc}</p>
        </motion.div>

        <Accordion type="single" collapsible className="mt-8 md:mt-12 space-y-3">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-2xl px-5 md:px-6 shadow-card data-[state=open]:border-primary/40 transition-colors">
              <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 md:py-5 gap-3">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
