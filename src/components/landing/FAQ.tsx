import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qabulga qanday yozilsam bo'ladi?",
    a: "Saytdagi 'Qabulga yozilish' formasini to'ldiring yoki +998 90 123 45 67 raqamiga qo'ng'iroq qiling. Administratorlarimiz qulay vaqtni tanlashda yordam beradi.",
  },
  {
    q: "Davolash og'riqli bo'ladimi?",
    a: "Yo'q. Biz zamonaviy og'riqsizlantirish texnologiyalari va yumshoq anesteziyadan foydalanamiz. Bemorlarimizning 98%i protseduralarni og'riqsiz o'tkazadi.",
  },
  {
    q: "Tishlarni oqartirish xavfsizmi?",
    a: "Ha, mutlaqo xavfsiz. Biz faqat sertifikatlangan Yevropa preparatlaridan foydalanamiz. Protsedura shifokor nazorati ostida o'tkaziladi va tish emaliga zarar yetkazmaydi.",
  },
  {
    q: "Implant qancha vaqtga qo'yiladi?",
    a: "Implantatsiya 1–2 soat davom etadi. Suyak bilan to'liq integratsiya 3–6 oyni oladi, shundan so'ng doimiy koronka o'rnatiladi. Sifatli implantlar 20+ yil xizmat qiladi.",
  },
  {
    q: "Bolalar uchun maxsus shifokor bormi?",
    a: "Ha, bizda bolalar stomatologiyasi bo'yicha mutaxassis Dr. Nilufar Yusupova faoliyat yuritadi. Bolalar uchun alohida qulay muhit va o'yinli yondashuv mavjud.",
  },
  {
    q: "Xizmatlar narxi qanday?",
    a: "Narxlar xizmat turiga qarab farqlanadi. Birinchi konsultatsiya — bepul. Bo'lib-bo'lib to'lash imkoniyati ham mavjud. Aniq narxlar uchun biz bilan bog'laning.",
  },
  {
    q: "Qaysi to'lov turlarini qabul qilasiz?",
    a: "Naqd pul, plastik karta (Uzcard, Humo, Visa, Mastercard), Click va Payme orqali to'lovlarni qabul qilamiz. Yirik xizmatlar uchun bo'lib to'lash rejasi taklif etiladi.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-28 bg-muted/40">
      <div className="container max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Savol-javob
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">
            Tez-tez beriladigan savollar
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground">
            Stomatologik xizmatlar haqida eng ko'p so'raladigan savollarga javoblar.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-8 md:mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-4 md:px-6 shadow-card"
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
