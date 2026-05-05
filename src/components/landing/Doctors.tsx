import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: d1, name: "Dr. Madina Rahimova", role: "Bosh stomatolog · 12 yil tajriba" },
  { img: d2, name: "Dr. Sherzod Karimov", role: "Ortoped-stomatolog · 10 yil tajriba" },
  { img: d3, name: "Dr. Nilufar Yusupova", role: "Bolalar stomatologi · 8 yil tajriba" },
];

export const Doctors = () => {
  return (
    <section id="shifokorlar" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Jamoamiz</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Tajribali shifokorlarimiz
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sizning sog'lig'ingiz uchun mas'ul professional jamoa.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d) => (
            <div key={d.name} className="group">
              <div className="overflow-hidden rounded-2xl bg-accent aspect-[4/5] shadow-card">
                <img
                  src={d.img}
                  alt={d.name}
                  width={600}
                  height={700}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
