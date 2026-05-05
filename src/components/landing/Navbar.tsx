import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Smile } from "lucide-react";

const links = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#biz-haqimizda", label: "Biz haqimizda" },
  { href: "#shifokorlar", label: "Shifokorlar" },
  { href: "#fikrlar", label: "Fikrlar" },
  { href: "#faq", label: "FAQ" },
  { href: "#aloqa", label: "Aloqa" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    // Wait for menu close animation, then scroll
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      }
    });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-14 md:h-16">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-2 font-bold text-base md:text-lg"
        >
          <span className="grid place-items-center w-8 h-8 md:w-9 md:h-9 rounded-xl bg-primary text-primary-foreground">
            <Smile className="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span>DentaCare</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#aloqa" onClick={(e) => handleNavClick(e, "#aloqa")}>
              Qabulga yozilish
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-background border-t border-border transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container py-4 flex flex-col gap-1 text-base">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-3 px-2 rounded-lg font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <Button asChild className="rounded-full w-full h-11">
              <a href="#aloqa" onClick={(e) => handleNavClick(e, "#aloqa")}>
                Qabulga yozilish
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};
