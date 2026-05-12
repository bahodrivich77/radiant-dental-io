import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: d1, name: "Др. Мадина Рахимова", role: "Главный стоматолог", exp: "12 лет опыта" },
  { img: d2, name: "Др. Шерзод Каримов", role: "Стоматолог-ортопед", exp: "10 лет опыта" },
  { img: d3, name: "Др. Нилуфар Юсупова", role: "Детский стоматолог", exp: "8 лет опыта" },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Команда</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Наши <span className="text-gradient">врачи</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Профессионалы, которые заботятся о вашей улыбке.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-background">
                  <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">{d.exp}</p>
                  <h3 className="mt-1 text-xl font-bold">{d.name}</h3>
                  <p className="text-sm opacity-90">{d.role}</p>
                  <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur grid place-items-center hover:bg-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white/20 backdrop-blur grid place-items-center hover:bg-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
