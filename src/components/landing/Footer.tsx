import { Instagram, Send, Youtube } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-xl gradient-gold text-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-2.5 0-4 1-5.5 1S3 3 3 6c0 4 1.5 6 2.5 9.5C6.2 18 7 21 9 21c1.5 0 1.8-3 3-3s1.5 3 3 3c2 0 2.8-3 3.5-5.5C19.5 12 21 10 21 6c0-3-2-2-3.5-2S14.5 3 12 3z"/>
              </svg>
            </span>
            <span className="font-display text-2xl text-background font-semibold">Denta<span className="text-gold">Lux</span></span>
          </a>
          <p className="mt-5 text-sm max-w-sm leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Send, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full bg-background/10 hover:gradient-gold hover:text-foreground grid place-items-center transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-background font-display text-xl mb-4">{t.footer.sections}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-background transition-colors">{t.nav.services}</a></li>
            <li><a href="#doctors" className="hover:text-background transition-colors">{t.nav.doctors}</a></li>
            <li><a href="#pricing" className="hover:text-background transition-colors">{t.nav.pricing}</a></li>
            <li><a href="#gallery" className="hover:text-background transition-colors">{t.nav.gallery}</a></li>
            <li><a href="#contact" className="hover:text-background transition-colors">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-background font-display text-xl mb-4">{t.footer.contacts}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{t.location.phone}</li>
            <li>info@dentalux.uz</li>
            <li>{t.location.address}</li>
            <li>{t.location.hoursWeek}</li>
            <li>{t.location.hoursSun}</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-background/10 text-xs text-center">
        © 2025 DentaLux. {t.footer.rights}
      </div>
    </footer>
  );
};
