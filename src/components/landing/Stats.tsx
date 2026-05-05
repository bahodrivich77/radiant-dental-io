import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Mamnun bemorlar" },
  { value: 15, suffix: "+", label: "Yillik tajriba" },
  { value: 25, suffix: "", label: "Professional shifokorlar" },
  { value: 98, suffix: "%", label: "Muvaffaqiyat darajasi" },
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
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
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

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm md:text-base text-primary-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
