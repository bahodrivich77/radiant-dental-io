import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Довольных пациентов" },
  { value: 15, suffix: "+", label: "Лет опыта" },
  { value: 25, suffix: "", label: "Врачей-специалистов" },
  { value: 98, suffix: "%", label: "Успешных случаев" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1500, 1);
            setVal(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

export const Stats = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container">
        <div className="rounded-[2.5rem] gradient-primary text-primary-foreground p-10 md:p-14 shadow-elevated relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm md:text-base opacity-90">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
