import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    }, 700);
  };

  return (
    <section id="aloqa" className="py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Aloqa</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Qabulga yoziling
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Formani to'ldiring — administratorlarimiz tez orada siz bilan bog'lanib, qulay vaqtni tasdiqlaydi.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <a href="tel:+998901234567" className="font-semibold hover:text-primary">+998 90 123 45 67</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Manzil</p>
                <p className="font-semibold">Toshkent, Amir Temur ko'chasi 12</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-accent text-primary grid place-items-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Ish vaqti</p>
                <p className="font-semibold">Du–Sh: 09:00 — 20:00</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-3xl p-7 md:p-9 shadow-card space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Ismingiz</Label>
            <Input id="name" required placeholder="Ali Valiyev" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon raqam</Label>
            <Input id="phone" type="tel" required placeholder="+998 90 123 45 67" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Qulay sana</Label>
            <Input id="date" type="date" required className="h-12 rounded-xl" />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full h-12 rounded-xl shadow-soft">
            {loading ? "Yuborilmoqda..." : "Qabulga yozilish"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz.
          </p>
        </form>
      </div>
    </section>
  );
};
