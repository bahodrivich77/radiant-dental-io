import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 gradient-hero overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Litsenziyalangan klinika
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-foreground">
            Sog'lom va chiroyli{" "}
            <span className="text-primary">tabassum</span> sizning huquqingiz
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            DentaCare — Toshkentdagi zamonaviy stomatologiya klinikasi. Og'riqsiz
            davolash, professional shifokorlar va eng so'nggi texnologiyalar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 h-12 shadow-soft">
              <a href="#aloqa">
                Qabulga yozilish <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12">
              <a href="#xizmatlar">Xizmatlarimiz</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span><strong className="text-foreground">4.9/5</strong> · 1,200+ mamnun bemorlar</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Zamonaviy stomatologiya klinikasi interyeri"
            width={1280}
            height={960}
            className="relative w-full h-auto rounded-3xl shadow-soft object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};
