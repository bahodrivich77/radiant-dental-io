import { Check } from "lucide-react";
import aboutImg from "@/assets/about-clinic.jpg";

const points = [
  "15+ yillik tajribaga ega shifokorlar",
  "Eng so'nggi Yevropa uskunalari",
  "Steril va xavfsiz muhit",
  "Og'riqsiz davolash texnologiyalari",
  "Qulay narxlar va to'lov rejasi",
];

export const About = () => {
  return (
    <section id="biz-haqimizda" className="py-20 md:py-28 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src={aboutImg}
            alt="DentaCare shifokori bemor bilan"
            width={900}
            height={800}
            loading="lazy"
            className="w-full h-auto rounded-3xl shadow-soft object-cover aspect-[9/8]"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Biz haqimizda</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Sizning ishonchingiz — bizning mas'uliyatimiz
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            DentaCare — bu nafaqat klinika, balki sog'lom tabassum uchun ishonchli sherik.
            Har bir bemorga individual yondashamiz va eng yaxshi natijani kafolatlaymiz.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
