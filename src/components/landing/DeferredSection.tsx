import { ReactNode, useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  /** Anchor id kept on the placeholder so in-page links still resolve. */
  id?: string;
  /** Reserved height while the section is not mounted (avoids layout shift). */
  minHeight?: number;
  children: ReactNode;
}

/**
 * Mounts its children only once they approach the viewport.
 * Keeps the initial render (and main-thread work) limited to above-the-fold content.
 */
export const DeferredSection = ({ id, minHeight = 600, children }: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);

    const onDemand = () => setShow(true);
    window.addEventListener("hashchange", onDemand);
    return () => {
      io.disconnect();
      window.removeEventListener("hashchange", onDemand);
    };
  }, [show]);

  if (show) return <>{children}</>;

  return <div ref={ref} id={id} aria-hidden style={{ minHeight }} />;
};
