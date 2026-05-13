import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t.contact.ok);
    }, 700);
  };

  const contacts = [
    { icon: Phone, label: t.contact.phone, value: "+998 90 123 45 67", href: "tel:+998901234567" },
    { icon: Mail, label: t.contact.email, value: "info@dentalux.uz", href: "mailto:info@dentalux.uz" },
    { icon: MapPin, label: t.contact.address, value: t.contact.addressVal },
    { icon: Clock, label: t.contact.schedule, value: t.contact.scheduleVal },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{t.contact.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            {t.contact.titleA} <span className="text-gradient">{t.contact.titleB}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">{t.contact.desc}</p>

          <ul className="mt-10 space-y-5">
            {contacts.map((c) => (
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

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={onSubmit}
          className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-elevated space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">{t.contact.name}</Label>
            <Input id="name" name="name" placeholder={t.contact.namePh} required className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t.contact.phone}</Label>
            <Input id="phone" name="phone" type="tel" placeholder={t.contact.phonePh} required className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.msg}</Label>
            <Textarea id="message" name="message" placeholder={t.contact.msgPh} rows={4} className="rounded-xl resize-none" />
          </div>
          <Button type="submit" disabled={loading} className="w-full rounded-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-shadow border-0 h-12 text-base">
            {loading ? t.contact.sending : (<>{t.contact.send} <Send className="ml-2 w-4 h-4" /></>)}
          </Button>
          <p className="text-xs text-muted-foreground text-center">{t.contact.privacy}</p>
        </motion.form>
      </div>
    </section>
  );
};
