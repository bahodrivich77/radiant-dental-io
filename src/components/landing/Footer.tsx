import { useState } from "react";
import { Smile, Instagram, Facebook, Send, MapPin, Navigation } from "lucide-react";
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
    name: "Markaziy filial",
    address: "Amir Temur ko'chasi 12, Toshkent",
    lat: 41.311081,
    lng: 69.279737,
    embed:
      "https://www.google.com/maps?q=41.311081,69.279737&hl=uz&z=15&output=embed",
  },
  {
    id: "chilonzor",
    name: "Chilonzor filiali",
    address: "Bunyodkor shoh ko'chasi 45, Toshkent",
    lat: 41.275345,
    lng: 69.203697,
    embed:
      "https://www.google.com/maps?q=41.275345,69.203697&hl=uz&z=15&output=embed",
  },
  {
    id: "yunusobod",
    name: "Yunusobod filiali",
    address: "Amir Temur shoh ko'chasi 108, Toshkent",
    lat: 41.367423,
    lng: 69.288872,
    embed:
      "https://www.google.com/maps?q=41.367423,69.288872&hl=uz&z=15&output=embed",
  },
];

export const Footer = () => {
  const [active, setActive] = useState<Branch>(branches[0]);

  return (
    <footer className="bg-foreground text-background/80 pt-14 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-background">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Smile className="w-5 h-5" />
            </span>
            DentaCare
          </a>
          <p className="mt-4 text-sm max-w-sm">
            Toshkentdagi zamonaviy stomatologiya klinikasi. Sog'lom tabassum — bizning vazifamiz.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary grid place-items-center transition-colors"
              >
                <Icon className="w-4 h-4 text-background" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-background font-semibold mb-4">Bo'limlar</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#xizmatlar" className="hover:text-background">Xizmatlar</a></li>
            <li><a href="#biz-haqimizda" className="hover:text-background">Biz haqimizda</a></li>
            <li><a href="#shifokorlar" className="hover:text-background">Shifokorlar</a></li>
            <li><a href="#fikrlar" className="hover:text-background">Fikrlar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-background font-semibold mb-4">Aloqa</h4>
          <ul className="space-y-2 text-sm">
            <li>+998 90 123 45 67</li>
            <li>info@dentacare.uz</li>
            <li>Amir Temur 12, Toshkent</li>
            <li>Du–Sh: 09:00 – 20:00</li>
          </ul>
        </div>
      </div>

      {/* Filiallar */}
      <div className="container mt-12">
        <h3 className="text-background font-semibold text-xl mb-6">Filiallarimiz</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Branches list */}
          <ul className="space-y-3">
            {branches.map((b) => {
              const isActive = b.id === active.id;
              return (
                <li
                  key={b.id}
                  onClick={() => setActive(b)}
                  className={`group cursor-pointer rounded-xl p-4 border transition-colors ${
                    isActive
                      ? "bg-background/10 border-primary"
                      : "bg-background/[0.04] border-background/10 hover:bg-background/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary/20 text-primary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-background font-medium">{b.name}</div>
                      <div className="text-sm mt-0.5 truncate">{b.address}</div>
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="mt-3 rounded-full h-8 px-3 text-xs"
                      >
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          Yo'lni ko'rish
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-background/10 bg-background/5 h-[240px] md:h-full md:min-h-[260px]">
            <iframe
              key={active.id}
              title={`Xarita — ${active.name}`}
              src={active.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-background/10 text-xs text-center">
        © {new Date().getFullYear()} DentaCare. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};
