import { motion } from "framer-motion";
import { PhoneCall, Stethoscope, Sparkles, ShieldCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const ICONS = [PhoneCall, Stethoscope, Sparkles, ShieldCheck];

export const Process = () => {
  const { t } = useLang();
  const { kicker, title, desc, steps } = t.process;

  return (
    <section id="process" className="py-24 md:py-36 relative overflow-hidden bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
      {/* Gold wash & watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 rotate-90 origin-center select-none pointer-events-none hidden lg:block">
        <span className="font-display text-[10rem] font-semibold tracking-tighter leading-none uppercase text-[hsl(var(--primary-foreground))]/[0.04] whitespace-nowrap">
          Protocole
        </span>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Sticky editorial header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--gold))]">§ 02</span>
                <span className="h-px w-14 bg-[hsl(var(--gold))]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[hsl(var(--primary-foreground))]/60">
                  {kicker}
                </span>
              </div>
              <h2 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-[clamp(2.4rem,5.6vw,4.8rem)]">
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="italic text-[hsl(var(--gold))] font-normal">
                  {title.split(" ").slice(-1)[0]}
                </em>
                <span className="text-[hsl(var(--gold))]">.</span>
              </h2>
              {desc && (
                <p className="mt-8 text-[15px] leading-[1.75] text-[hsl(var(--primary-foreground))]/65 font-light max-w-md">
                  {desc}
                </p>
              )}
            </div>
          </div>

          {/* Vertical typographic manifesto */}
          <ol className="lg:col-span-7 relative">
            {/* Vertical rule */}
            <span
              aria-hidden
              className="absolute left-[22px] md:left-[30px] top-3 bottom-3 w-px bg-[hsl(var(--primary-foreground))]/15"
            />
            {steps.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-[68px] md:pl-[92px] pb-14 md:pb-16 last:pb-0"
                >
                  {/* Node */}
                  <span className="absolute left-0 top-1 grid place-items-center w-[46px] h-[46px] md:w-[62px] md:h-[62px] rounded-full bg-[hsl(var(--primary))] border border-[hsl(var(--gold))/50] text-[hsl(var(--gold))]">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.4} />
                  </span>

                  <div className="flex items-baseline gap-3 md:gap-5 mb-3">
                    <span className="font-display text-xs uppercase tracking-[0.35em] text-[hsl(var(--gold))]/80">
                      Étape {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[hsl(var(--primary-foreground))]/15" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-light leading-tight tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] leading-[1.75] text-[hsl(var(--primary-foreground))]/60 font-light max-w-lg">
                    {s.desc}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
