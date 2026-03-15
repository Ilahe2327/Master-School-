import AboutSection from "@/components/sections/About";
import BranchesSection from "@/components/sections/Branches";
import HeroSection from "@/components/sections/Hero";
import NavbarSection from "@/components/layout/Navbar";
import ServicesSection from "@/components/sections/Services";
import Image from "next/image";
import TeamSection from "@/components/sections/Team";
import Partners from "@/components/sections/Partners";
import OurResults from "@/components/sections/OurResults";
import MasterResults from "@/components/sections/MasterResults";
import Publications from "@/components/sections/Publications";
import ContactPage from "@/components/sections/Contact";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <Partners />
      <BranchesSection />
      <OurResults />
      <MasterResults />
      <Publications />
      <ContactPage />
      <CtaSection />
    </div>
  )
}
