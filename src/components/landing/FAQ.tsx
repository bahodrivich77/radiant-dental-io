import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Как записаться на приём?",
    a: "Заполните форму на сайте или позвоните по номеру +998 90 123 45 67. Администратор поможет выбрать удобное время.",
  },
  {
    q: "Лечение проходит без боли?",
    a: "Да. Мы используем современные методы анестезии и щадящие технологии. 98% пациентов проходят лечение без дискомфорта.",
  },
  {
    q: "Безопасно ли отбеливание зубов?",
    a: "Полностью безопасно. Используем сертифицированные европейские препараты. Процедура проходит под контролем врача и не повреждает эмаль.",
  },
  {
    q: "Сколько длится имплантация?",
    a: "Установка импланта занимает 1–2 часа. Полная остеоинтеграция — 3–6 месяцев. Качественные импланты служат более 20 лет.",
  },
  {
    q: "Есть ли детский стоматолог?",
    a: "Да, у нас работает специалист по детской стоматологии. Создана отдельная игровая зона и применяется бережный подход.",
  },
  {
    q: "Сколько стоят услуги?",
    a: "Цены зависят от типа услуги. Первая консультация — бесплатно. Доступна рассрочка. Точные цены уточняйте у администратора.",
  },
  {
    q: "Какие способы оплаты доступны?",
    a: "Наличные, карты Uzcard, Humo, Visa, Mastercard, а также Click и Payme. Для крупных услуг доступна рассрочка.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-28 bg-muted/40">
      <div className="container max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Вопросы</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold">
            Часто задаваемые <span className="text-gradient">вопросы</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">
            Ответы на самые популярные вопросы о наших услугах.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="mt-8 md:mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-5 md:px-6 shadow-card data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 md:py-5 gap-3">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
