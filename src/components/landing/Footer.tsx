import { useState } from "react";
import { Sparkles, Instagram, Facebook, Send, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

type Branch = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  embed: string;
};

const branches: Branch[] = [
  {
    id: "main",
    name: "Центральный филиал",
    address: "ул. Амира Темура 12, Ташкент",
    lat: 41.311081, lng: 69.279737,
    embed: "https://www.google.com/maps?q=41.311081,69.279737&hl=ru&z=15&output=embed",
  },
  {
    id: "chilonzor",
    name: "Филиал «Чиланзар»",
    address: "ул. Бунёдкор 45, Ташкент",
    lat: 41.275345, lng: 69.203697,
    embed: "https://www.google.com/maps?q=41.275345,69.203697&hl=ru&z=15&output=embed",
  },
  {
    id: "yunusobod",
    name: "Филиал «Юнусабад»",
    address: "пр. Амира Темура 108, Ташкент",
    lat: 41.367423, lng: 69.288872,
    embed: "https://www.google.com/maps?q=41.367423,69.288872&hl=ru&z=15&output=embed",
  },
];

export const Footer = () => {
  const [active, setActive] = useState<Branch>(branches[0]);

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
          <p className="mt-5 text-sm max-w-sm leading-relaxed">
            Премиальная стоматологическая клиника в Ташкенте. Здоровая улыбка — наша миссия.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Send].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                className="w-10 h-10 rounded-full bg-background/10 hover:gradient-primary grid place-items-center transition-all">
                <Icon className="w-4 h-4 text-background" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-background font-bold mb-4">Разделы</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-background transition-colors">Услуги</a></li>
            <li><a href="#about" className="hover:text-background transition-colors">О нас</a></li>
            <li><a href="#doctors" className="hover:text-background transition-colors">Врачи</a></li>
            <li><a href="#pricing" className="hover:text-background transition-colors">Цены</a></li>
            <li><a href="#reviews" className="hover:text-background transition-colors">Отзывы</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-background font-bold mb-4">Контакты</h4>
          <ul className="space-y-2.5 text-sm">
            <li>+998 90 123 45 67</li>
            <li>info@dentalux.uz</li>
            <li>ул. Амира Темура 12</li>
            <li>Пн–Сб: 09:00 – 20:00</li>
          </ul>
        </div>
      </div>

      <div className="container mt-14">
        <h3 className="text-background font-bold text-xl mb-6">Наши филиалы</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            {branches.map((b) => {
              const isActive = b.id === active.id;
              return (
                <li
                  key={b.id}
                  onClick={() => setActive(b)}
                  className={`group cursor-pointer rounded-2xl p-4 border transition-all ${
                    isActive
                      ? "bg-background/10 border-primary"
                      : "bg-background/[0.04] border-background/10 hover:bg-background/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl gradient-primary text-primary-foreground shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-background font-semibold">{b.name}</div>
                      <div className="text-sm mt-0.5 truncate">{b.address}</div>
                      <Button asChild size="sm" variant="secondary" className="mt-3 rounded-full h-8 px-3 text-xs">
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                          target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Navigation className="w-3.5 h-3.5" /> Маршрут
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="rounded-2xl overflow-hidden border border-background/10 bg-background/5 h-[240px] md:h-full md:min-h-[280px]">
            <iframe
              key={active.id}
              title={`Карта — ${active.name}`}
              src={active.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-background/10 text-xs text-center">
        © {new Date().getFullYear()} DentaLux. Все права защищены.
      </div>
    </footer>
  );
};
