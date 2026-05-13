import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Globe, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

export const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#doctors", label: t.nav.doctors },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      const el = href === "#" ? document.body : document.querySelector(href);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        if (href !== "#") history.replaceState(null, "", href);
      }
    });
  };

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center p-1 rounded-full bg-accent/60 border border-border ${className}`}>
      {(["uz", "ru"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
            lang === l
              ? "gradient-primary text-primary-foreground shadow-soft"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-card" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" onClick={(e) => handleNav(e, "#")} className="flex items-center gap-2.5 font-bold text-lg">
            <span className="grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-2xl gradient-primary text-primary-foreground shadow-soft">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="font-extrabold tracking-tight">DentaLux</span>
          </a>

          <ul className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium text-foreground/70">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)} className="hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <LangSwitch />
            <Button asChild size="sm" className="rounded-full px-5 h-11 gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-shadow border-0">
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>{t.nav.cta}</a>
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LangSwitch />
            <button
              className="p-2 -mr-2 rounded-xl hover:bg-accent transition-colors"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menuOpen}
              aria-expanded={open}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer (slides from right) */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-background shadow-elevated flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-border">
            <a href="#" onClick={(e) => handleNav(e, "#")} className="flex items-center gap-2.5 font-bold">
              <span className="grid place-items-center w-9 h-9 rounded-2xl gradient-primary text-primary-foreground">
                <Sparkles className="w-5 h-5" />
              </span>
              <span className="font-extrabold tracking-tight">DentaLux</span>
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label={t.nav.menuClose}
              className="p-2 -mr-2 rounded-xl hover:bg-accent transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold text-foreground hover:bg-accent hover:text-primary transition-colors"
                  >
                    {l.label}
                    <span className="text-primary/40">›</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Globe className="w-4 h-4" /> {t.nav.langLabel}
                </span>
                <LangSwitch />
              </div>
            </div>
          </nav>

          <div className="p-5 border-t border-border space-y-3">
            <Button asChild className="w-full h-12 rounded-full gradient-primary text-primary-foreground border-0 shadow-soft">
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>{t.nav.ctaLong}</a>
            </Button>
            <a
              href="tel:+998901234567"
              className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> +998 90 123 45 67
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};
