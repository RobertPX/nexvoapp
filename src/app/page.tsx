import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FreeTrialSection from "@/components/FreeTrialSection";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07070f] text-[#e8e8f0] overflow-x-hidden">
      {/* Noise overlay for premium texture */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FreeTrialSection />
        <ProductSection />
        <PricingSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
