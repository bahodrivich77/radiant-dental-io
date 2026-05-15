import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const LAT = 41.311081;
const LNG = 69.279737;
const EMBED = `https://www.google.com/maps?q=${LAT},${LNG}&hl=en&z=16&output=embed`;
const DIR = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

export const Location = () => {
  const { t } = useLang();
  return (
    <section id="location" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.location.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.location.title}</h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl gradient-primary text-primary-foreground grid place-items-center shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.location.kicker}</p>
                <p className="mt-1 font-semibold">{t.location.address}</p>
              </div>
            </div>
            <a href={`tel:${t.location.phone.replace(/\s/g, "")}`} className="bg-card border border-border rounded-2xl p-6 shadow-card flex items-start gap-4 hover:border-primary transition-colors">
              <span className="w-11 h-11 rounded-xl gradient-primary text-primary-foreground grid place-items-center shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Tel</p>
                <p className="mt-1 font-semibold">{t.location.phone}</p>
              </div>
            </a>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl gradient-primary text-primary-foreground grid place-items-center shrink-0">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.location.hoursLabel}</p>
                <p className="mt-1 font-semibold">{t.location.hoursWeek}</p>
                <p className="text-sm text-muted-foreground">{t.location.hoursSun}</p>
              </div>
            </div>
            <Button asChild size="lg" className="w-full rounded-full h-13 gradient-primary text-primary-foreground border-0 shadow-soft hover:shadow-glow transition-shadow">
              <a href={DIR} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4 mr-2" /> {t.location.route}
              </a>
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border shadow-elevated min-h-[380px] lg:min-h-0">
            <iframe
              title="DentaLux clinic location"
              src={EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
