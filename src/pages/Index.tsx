import { lazy, Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { BadgeStrip } from "@/components/landing/BadgeStrip";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { DeferredSection } from "@/components/landing/DeferredSection";

const Services = lazy(() => import("@/components/landing/Services").then((m) => ({ default: m.Services })));
const Process = lazy(() => import("@/components/landing/Process").then((m) => ({ default: m.Process })));
const About = lazy(() => import("@/components/landing/About").then((m) => ({ default: m.About })));
const Doctors = lazy(() => import("@/components/landing/Doctors").then((m) => ({ default: m.Doctors })));
const Gallery = lazy(() => import("@/components/landing/Gallery").then((m) => ({ default: m.Gallery })));
const Pricing = lazy(() => import("@/components/landing/Pricing").then((m) => ({ default: m.Pricing })));
const Reviews = lazy(() => import("@/components/landing/Reviews").then((m) => ({ default: m.Reviews })));
const Booking = lazy(() => import("@/components/landing/Booking").then((m) => ({ default: m.Booking })));
const Location = lazy(() => import("@/components/landing/Location").then((m) => ({ default: m.Location })));
const CtaBanner = lazy(() => import("@/components/landing/CtaBanner").then((m) => ({ default: m.CtaBanner })));
const Footer = lazy(() => import("@/components/landing/Footer").then((m) => ({ default: m.Footer })));
const FloatingButtons = lazy(() => import("@/components/landing/FloatingButtons").then((m) => ({ default: m.FloatingButtons })));
const BottomNav = lazy(() => import("@/components/landing/BottomNav").then((m) => ({ default: m.BottomNav })));
const SectionIndex = lazy(() => import("@/components/landing/SectionIndex").then((m) => ({ default: m.SectionIndex })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <BadgeStrip />
        <Suspense fallback={null}>
          <DeferredSection id="services" minHeight={900}>
            <Services />
          </DeferredSection>
          <DeferredSection id="process" minHeight={900}>
            <Process />
          </DeferredSection>
          <DeferredSection id="why" minHeight={800}>
            <About />
          </DeferredSection>
          <DeferredSection id="doctors" minHeight={1000}>
            <Doctors />
          </DeferredSection>
          <DeferredSection id="gallery" minHeight={900}>
            <Gallery />
          </DeferredSection>
          <DeferredSection id="pricing" minHeight={900}>
            <Pricing />
          </DeferredSection>
          <DeferredSection id="reviews" minHeight={700}>
            <Reviews />
          </DeferredSection>
          <DeferredSection id="contact" minHeight={1000}>
            <Booking />
          </DeferredSection>
          <DeferredSection minHeight={800}>
            <Location />
          </DeferredSection>
          <DeferredSection minHeight={500}>
            <CtaBanner />
          </DeferredSection>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <DeferredSection minHeight={600}>
          <Footer />
        </DeferredSection>
        <SectionIndex />
        <FloatingButtons />
        <BottomNav />
      </Suspense>
    </div>
  );
};

export default Index;
