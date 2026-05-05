import { Smile, Instagram, Facebook, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-14">
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

      <div className="container mt-10 pt-6 border-t border-background/10 text-xs text-center">
        © {new Date().getFullYear()} DentaCare. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};
