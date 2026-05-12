import { motion } from "framer-motion";
import { Award, Users, Microscope, HeartHandshake } from "lucide-react";
import aboutImg from "@/assets/about-clinic.jpg";

const features = [
  { icon: Users, title: "Опытные врачи", desc: "Специалисты с 10+ годами практики и международными сертификатами." },
  { icon: Microscope, title: "Современное оборудование", desc: "Цифровая диагностика, микроскопы и 3D-сканеры последнего поколения." },
  { icon: HeartHandshake, title: "Доступные цены", desc: "Прозрачное ценообразование, рассрочка и программы лояльности." },
  { icon: Award, title: "Гарантия качества", desc: "Официальная гарантия на все виды лечения и протезирования." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-6 gradient-primary rounded-[3rem] blur-3xl opacity-15" />
          <img
            src={aboutImg}
            alt="DentaLux — врач с пациентом"
            loading="lazy"
            width={900}
            height={800}
            className="relative w-full h-auto rounded-[2rem] shadow-elevated object-cover aspect-[9/8]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Почему мы?</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Премиум-сервис, которому <span className="text-gradient">доверяют</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            DentaLux — это команда профессионалов, объединённых одной целью: подарить вам
            здоровую и красивую улыбку без стресса и боли.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border shadow-card"
              >
                <div className="w-11 h-11 rounded-xl gradient-primary text-primary-foreground grid place-items-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
