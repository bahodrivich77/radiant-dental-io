import { motion } from "framer-motion";
import { Sparkles, Stethoscope, Smile, Shield, Baby, Crown, Brackets, Activity } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Отбеливание", desc: "Безопасное профессиональное отбеливание до 8 тонов." },
  { icon: Crown, title: "Имплантация", desc: "Импланты премиум-класса с пожизненной гарантией." },
  { icon: Stethoscope, title: "Протезирование", desc: "Эстетичные коронки и виниры по технологии E.max." },
  { icon: Brackets, title: "Брекеты и элайнеры", desc: "Современная ортодонтия для идеального прикуса." },
  { icon: Smile, title: "Эстетическая стоматология", desc: "Голливудская улыбка с минимальным вмешательством." },
  { icon: Activity, title: "Лечение каналов", desc: "Микроскопическая эндодонтия без боли." },
  { icon: Baby, title: "Детская стоматология", desc: "Бережный подход к маленьким пациентам." },
  { icon: Shield, title: "Профилактика", desc: "Профессиональная гигиена и осмотры." },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Услуги</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Полный спектр <span className="text-gradient">стоматологии</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            От профилактики до сложных хирургических операций — всё в одной клинике.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-card hover:shadow-soft transition-all overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="relative w-14 h-14 rounded-2xl bg-accent text-primary grid place-items-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
