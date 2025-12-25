import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import UnitsSection from "@/components/sections/UnitsSection";
import ContactSection from "@/components/sections/ContactSection";
import KPRCalculator from "@/components/sections/KPRCalculator";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import SEOHead from "@/components/SEOHead";

// Lazy load LocationSection (contains iframe for better LCP)
const LocationSection = lazy(() => import("@/components/sections/LocationSection"));

// Loading skeleton for lazy loaded sections
const SectionSkeleton = () => (
  <section className="py-24 lg:py-32 bg-background-cream">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="animate-pulse">
        <div className="h-8 bg-charcoal/10 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-charcoal/10 rounded w-2/3 mx-auto mb-8"></div>
        <div className="h-96 bg-charcoal/10 rounded"></div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <main className="overflow-x-hidden pb-16 lg:pb-0">
      <SEOHead />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AmenitiesSection />
      <UnitsSection />
      <Suspense fallback={<SectionSkeleton />}>
        <LocationSection />
      </Suspense>
      <ContactSection />
      <KPRCalculator />
      <Footer />
      <MobileStickyBar />
    </main>
  );
};

export default Index;
