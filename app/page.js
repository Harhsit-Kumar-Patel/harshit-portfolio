import ContactSection from "../components/contact-section";
import ExperienceSection from "../components/experience-section";
import HeroSection from "../components/hero-section";
import ProductThinkingSection from "../components/product-thinking-section";
import CaseStudiesSection from "../components/case-studies-section";
import SiteNavbar from "../components/site-navbar";
import SkillsSection from "../components/skills-section";
import AboutSection from "../components/about-section";
import ScrollProgress from "../components/ui/scroll-progress";
import ScrollTopButton from "../components/ui/scroll-top-button";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white">
      <ScrollProgress />
      <SiteNavbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <CaseStudiesSection />
        <ProductThinkingSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <ScrollTopButton />
    </div>
  );
}
