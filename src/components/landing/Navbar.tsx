import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О нас" },
  { href: "#doctors", label: "Врачи" },
  { href: "#pricing", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" onClick={(e) => handleNav(e, "#")} className="flex items-center gap-2.5 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-2xl gradient-primary text-primary-foreground shadow-soft">
            <Sparkles className="w-5 h-5" />
          </span>
          <span className="font-extrabold tracking-tight">DentaLux</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)} className="hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-6 h-11 gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-shadow border-0">
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>Записаться</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden bg-background border-t border-border transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-3 px-3 rounded-xl font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                onClick={(e) => handleNav(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 pb-2">
            <Button asChild className="rounded-full w-full h-12 gradient-primary text-primary-foreground border-0">
              <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>Записаться на приём</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
