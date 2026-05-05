import { Sparkles, Stethoscope, Smile, Shield, Baby, Crown } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Tishlarni oqartirish", desc: "Xavfsiz va samarali oqartirish protseduralari." },
  { icon: Stethoscope, title: "Davolash", desc: "Karies va boshqa tish kasalliklarini og'riqsiz davolash." },
  { icon: Smile, title: "Estetik stomatologiya", desc: "Mukammal tabassum uchun zamonaviy yechimlar." },
  { icon: Crown, title: "Protezlash", desc: "Sifatli koronka va implantlar — uzoq muddatga." },
  { icon: Baby, title: "Bolalar stomatologiyasi", desc: "Bolalaringiz uchun mehribon va ehtiyotkor yondashuv." },
  { icon: Shield, title: "Profilaktika", desc: "Muntazam ko'rik va professional tozalash xizmatlari." },
];

export const Services = () => {
  return (
    <section id="xizmatlar" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Xizmatlarimiz</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Har qanday ehtiyojga to'liq yechim
          </h2>
          <p className="mt-4 text-muted-foreground">
            Klinikamizda barcha turdagi stomatologik xizmatlar bir joyda.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 rounded-2xl bg-card border border-border shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-soft hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-accent text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
