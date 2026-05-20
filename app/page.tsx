import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import PlansSection from "@/components/sections/PlansSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import WebBusinessCTASection from "@/components/sections/WebBusinessCTASection";
export default function Home() {
  return (
     <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection />
      <BenefitsSection />
        <WebBusinessCTASection />
      <ProgramsSection />
      <PlansSection />

    

      <FinalCTASection />

      <Footer />

      <FloatingWhatsAppButton />
    </main>
  );
}