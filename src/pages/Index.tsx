import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import UnitsSection from "@/components/UnitsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import KPRCalculator from "@/components/KPRCalculator";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <main className="overflow-x-hidden pb-16 lg:pb-0">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AmenitiesSection />
      <UnitsSection />
      <LocationSection />
      <ContactSection />
      <KPRCalculator />
      <Footer />
      <MobileStickyBar />
    </main>
  );
};

export default Index;
