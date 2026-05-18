import { ShieldCheck, ScanLine, Sparkles, HandHeart, Baby, BadgePercent, Award } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const ICONS = [ShieldCheck, ScanLine, Sparkles, HandHeart, Baby, BadgePercent, Award];

export const BadgeStrip = () => {
  const { t } = useLang();
  const items = t.badgeStrip.items;
  const row = [...items, ...items];

  return (
    <section aria-label="Trust badges" className="bg-muted/60 border-y border-border overflow-hidden">
      <div className="relative py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted/90 to-transparent z-10" />
        <ul className="flex gap-3 marquee w-max">
          {row.map((label, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-card whitespace-nowrap"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full gradient-primary text-primary-foreground">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-[13px] font-medium tracking-wide text-foreground/80">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
