import { lazy, Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { BadgeStrip } from "@/components/landing/BadgeStrip";
import { ScrollProgress } from "@/components/landing/ScrollProgress";

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
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Services />
          <Process />
          <About />
          <Doctors />
          <Gallery />
          <Pricing />
          <Reviews />
          <Booking />
          <Location />
          <CtaBanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <SectionIndex />
        <Footer />
        <FloatingButtons />
        <BottomNav />
      </Suspense>
    </div>
  );
};

export default Index;
