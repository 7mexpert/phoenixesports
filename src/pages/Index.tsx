import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RosterSection from "@/components/RosterSection";
import CompetitionsSection from "@/components/CompetitionsSection";
import AboutSection from "@/components/AboutSection";
import CareersSection from "@/components/CareersSection";
import SocialsSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RosterSection />
      <CompetitionsSection />
      <AboutSection />
      <CareersSection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default Index;
