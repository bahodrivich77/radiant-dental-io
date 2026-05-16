import { useEffect, useState } from "react";
import { Home, LayoutGrid, Users, Phone, CalendarCheck } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const SECTIONS = [
  { id: "home", icon: Home, key: "home" as const },
  { id: "services", icon: LayoutGrid, key: "services" as const },
  { id: "doctors", icon: Users, key: "doctors" as const },
  { id: "contact", icon: Phone, key: "contact" as const },
  { id: "contact", icon: CalendarCheck, key: "booking" as const, isCta: true },
];

export const BottomNav = () => {
  const { t } = useLang();
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = Array.from(new Set(SECTIONS.map((s) => s.id)));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach((el) => io.observe(el));

    const onScroll = () => {
      if (window.scrollY < 120) setActive("home");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/85 backdrop-blur-xl shadow-[0_-8px_32px_-12px_hsl(var(--foreground)/0.12)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-5">
        {SECTIONS.map((s, idx) => {
          const isActive = active === s.id && !s.isCta;
          const Icon = s.icon;
          if (s.isCta) {
            return (
              <li key={idx} className="flex items-center justify-center">
                <a
                  href={`#${s.id}`}
                  onClick={(e) => go(e, s.id)}
                  aria-label={t.bottomNav[s.key]}
                  className="flex flex-col items-center justify-center gap-1 -mt-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_-8px_hsl(var(--primary)/0.55)] active:scale-90 transition-transform"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            );
          }
          return (
            <li key={idx}>
              <a
                href={`#${s.id}`}
                onClick={(e) => go(e, s.id)}
                aria-current={isActive ? "page" : undefined}
                className={`group flex flex-col items-center justify-center gap-1 py-2.5 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`grid place-items-center w-9 h-9 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 scale-110"
                      : "bg-transparent group-active:scale-90"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-semibold tracking-wide leading-none">
                  {t.bottomNav[s.key]}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
