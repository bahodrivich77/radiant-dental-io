import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const WHATSAPP = "https://wa.me/998901234567";
const TELEGRAM = "https://t.me/dentaluxuz";

export const Booking = () => {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      setService("");
      toast.success(t.booking.ok);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-60 pointer-events-none" />
      <div className="container relative max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em]">— {t.booking.kicker}</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">{t.booking.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">{t.booking.desc}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="mt-12 bg-card border border-border rounded-3xl p-7 md:p-10 shadow-elevated space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">{t.booking.name}</Label>
              <Input id="name" name="name" placeholder={t.booking.namePh} required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t.booking.phone}</Label>
              <Input id="phone" name="phone" type="tel" placeholder={t.booking.phonePh} required className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">{t.booking.service}</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className="h-12 rounded-xl">
                  <SelectValue placeholder={t.booking.servicePh} />
                </SelectTrigger>
                <SelectContent>
                  {t.services.items.map((s) => (
                    <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">{t.booking.date}</Label>
              <Input id="date" name="date" type="date" required className="h-12 rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">{t.booking.note}</Label>
            <Textarea id="note" name="note" placeholder={t.booking.notePh} rows={3} className="rounded-xl resize-none" />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full">
            {loading ? t.booking.sending : (<>{t.booking.send} <Send className="ml-1" /></>)}
          </Button>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 rounded-[10px] border border-[#25D366]/60 text-[#25D366] text-[13px] font-medium tracking-[0.04em] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors">
              <MessageCircle className="w-[15px] h-[15px]" /> {t.booking.whatsapp}
            </a>
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 rounded-[10px] border border-[#229ED9]/60 text-[#229ED9] text-[13px] font-medium tracking-[0.04em] hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9] transition-colors">
              <Send className="w-[15px] h-[15px]" /> {t.booking.telegram}
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
