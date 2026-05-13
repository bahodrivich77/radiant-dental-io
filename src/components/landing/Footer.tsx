import { useState } from "react";
import { Sparkles, Instagram, Facebook, Send, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

const branchData = [
  { id: "main", lat: 41.311081, lng: 69.279737, embed: "https://www.google.com/maps?q=41.311081,69.279737&hl=ru&z=15&output=embed" },
  { id: "chilonzor", lat: 41.275345, lng: 69.203697, embed: "https://www.google.com/maps?q=41.275345,69.203697&hl=ru&z=15&output=embed" },
  { id: "yunusobod", lat: 41.367423, lng: 69.288872, embed: "https://www.google.com/maps?q=41.367423,69.288872&hl=ru&z=15&output=embed" },
];

export const Footer = () => {
  const { t } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = branchData[activeIdx];
  const activeName = t.footer.branches[activeIdx].name;

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg text-background">
            <span className="grid place-items-center w-10 h-10 rounded-2xl gradient-primary text-primary-foreground">
              <Sparkles className="w-5 h-5" />
            </span>
            DentaLux
          </a>
          <p className="mt-5 text-sm max-w-sm leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Send].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full bg-background/10 hover:gradient-primary grid place-items-center transition-all">
                <Icon className="w-4 h-4 text-background" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-background font-bold mb-4">{t.footer.sections}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-background transition-colors">{t.nav.services}</a></li>
            <li><a href="#about" className="hover:text-background transition-colors">{t.nav.about}</a></li>
            <li><a href="#doctors" className="hover:text-background transition-colors">{t.nav.doctors}</a></li>
            <li><a href="#pricing" className="hover:text-background transition-colors">{t.nav.pricing}</a></li>
            <li><a href="#reviews" className="hover:text-background transition-colors">{t.nav.reviews}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-background font-bold mb-4">{t.footer.contacts}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>+998 90 123 45 67</li>
            <li>info@dentalux.uz</li>
            <li>{t.contact.addressVal}</li>
            <li>{t.contact.scheduleVal}</li>
          </ul>
        </div>
      </div>

      <div className="container mt-14">
        <h3 className="text-background font-bold text-xl mb-6">{t.footer.branchesTitle}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            {t.footer.branches.map((b, idx) => {
              const isActive = idx === activeIdx;
              const data = branchData[idx];
              return (
                <li key={data.id} onClick={() => setActiveIdx(idx)}
                  className={`group cursor-pointer rounded-2xl p-4 border transition-all ${isActive ? "bg-background/10 border-primary" : "bg-background/[0.04] border-background/10 hover:bg-background/10"}`}>
                  <div className="flex items-start gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl gradient-primary text-primary-foreground shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-background font-semibold">{b.name}</div>
                      <div className="text-sm mt-0.5 truncate">{b.address}</div>
                      <Button asChild size="sm" variant="secondary" className="mt-3 rounded-full h-8 px-3 text-xs">
                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          <Navigation className="w-3.5 h-3.5" /> {t.footer.route}
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="rounded-2xl overflow-hidden border border-background/10 bg-background/5 h-[240px] md:h-full md:min-h-[280px]">
            <iframe key={active.id} title={`${t.footer.mapTitle} — ${activeName}`} src={active.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full border-0" allowFullScreen />
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-background/10 text-xs text-center">
        © {new Date().getFullYear()} DentaLux. {t.footer.rights}
      </div>
    </footer>
  );
};
