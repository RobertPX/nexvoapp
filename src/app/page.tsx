import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProductsSection from '@/components/ProductsSection'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'
import TechStackSection from '@/components/TechStackSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0E1A] text-[#F8FAFC] overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        <ProcessSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
