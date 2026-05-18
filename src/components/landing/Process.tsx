import { PhoneCall, Stethoscope, Sparkles, ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const ICONS = [PhoneCall, Stethoscope, Sparkles, ShieldCheck];

export const Process = () => {
  const { t } = useLang();
  const { kicker, title, desc, steps } = t.process;

  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gold mb-3">{kicker}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">{title}</h2>
          {desc && <p className="mt-4 text-foreground/65">{desc}</p>}
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <li
                  key={i}
                  className="group relative bg-card rounded-2xl border border-border p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-5xl leading-none text-gold/70 group-hover:text-gold transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
