import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Doctors } from "@/components/landing/Doctors";
import { Gallery } from "@/components/landing/Gallery";
import { Pricing } from "@/components/landing/Pricing";
import { Reviews } from "@/components/landing/Reviews";
import { Booking } from "@/components/landing/Booking";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";
import { FloatingButtons } from "@/components/landing/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Gallery />
        <Pricing />
        <Reviews />
        <Booking />
        <Location />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
