import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const CtaBanner = () => {
  const { t } = useLang();
  const { title, subtitle, cta } = t.ctaBanner;
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-primary text-primary-foreground p-10 md:p-16 text-center shadow-elevated">
          <div className="absolute inset-0 gradient-mesh opacity-20 mix-blend-overlay pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[hsl(var(--gold)/0.25)] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[hsl(var(--primary-glow)/0.35)] blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">{title}</h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8">{subtitle}</p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--gold))] text-foreground hover:bg-[hsl(var(--gold)/0.92)] px-8"
            >
              <a href="#contact">
                {cta} <ArrowRight className="ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
