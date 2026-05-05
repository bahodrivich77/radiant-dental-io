import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    text: "Hayotimda birinchi marta stomatologdan qo'rqmasdan chiqdim. Shifokorlar juda professional va g'amxo'r ekan!",
    name: "Aziza Karimova",
    role: "Doimiy bemor",
  },
  {
    text: "Implant qo'ydirdim — natija ajoyib. Hech qanday og'riq sezmadim. Klinikani tavsiya qilaman.",
    name: "Bekzod Tursunov",
    role: "Bemor",
  },
  {
    text: "Bolam endi tish davolatishdan qo'rqmaydi. Bolalar shifokori juda mehribon. Rahmat DentaCare!",
    name: "Mohira Rashidova",
    role: "Ona",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  return (
    <section id="fikrlar" className="py-20 md:py-28 bg-muted/40">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Mijozlar fikri</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Bemorlarimiz nima deydi
          </h2>
        </div>

        <div className="mt-12 relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card">
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
          <div className="text-center px-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              "{items[i].text}"
            </p>
            <div className="mt-6">
              <p className="font-semibold">{items[i].name}</p>
              <p className="text-sm text-muted-foreground">{items[i].role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Oldingi"
              className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Keyingi"
              className="w-10 h-10 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
