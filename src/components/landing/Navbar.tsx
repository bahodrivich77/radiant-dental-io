import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Smile } from "lucide-react";

const links = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#biz-haqimizda", label: "Biz haqimizda" },
  { href: "#shifokorlar", label: "Shifokorlar" },
  { href: "#fikrlar", label: "Fikrlar" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
            <Smile className="w-5 h-5" />
          </span>
          <span>DentaCare</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#aloqa">Qabulga yozilish</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild className="rounded-full mt-2">
              <a href="#aloqa" onClick={() => setOpen(false)}>Qabulga yozilish</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
