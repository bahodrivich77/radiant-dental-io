import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Заявка принята! Мы свяжемся с вами в ближайшее время.");
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Контакты</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Запишитесь <span className="text-gradient">сегодня</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            Оставьте заявку — администратор перезвонит и подтвердит удобное время визита.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Телефон", value: "+998 90 123 45 67", href: "tel:+998901234567" },
              { icon: Mail, label: "Email", value: "info@dentalux.uz", href: "mailto:info@dentalux.uz" },
              { icon: MapPin, label: "Адрес", value: "ул. Амира Темура 12, Ташкент" },
              { icon: Clock, label: "График работы", value: "Пн–Сб: 09:00 – 20:00" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center flex-shrink-0 shadow-soft">
                  <c.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-semibold">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-elevated space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input id="name" name="name" placeholder="Иван Иванов" required className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+998 90 123 45 67" required className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea id="message" name="message" placeholder="Опишите ваш вопрос или желаемую услугу" rows={4} className="rounded-xl resize-none" />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-13 rounded-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-shadow border-0 h-12 text-base">
            {loading ? "Отправка..." : (<>Отправить заявку <Send className="ml-2 w-4 h-4" /></>)}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </motion.form>
      </div>
    </section>
  );
};
