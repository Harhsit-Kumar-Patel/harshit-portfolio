import ContactSection from "../components/contact-section";
import ExperienceSection from "../components/experience-section";
import HeroSection from "../components/hero-section";
import ProductThinkingSection from "../components/product-thinking-section";
import CaseStudiesSection from "../components/case-studies-section";
import SiteFooter from "../components/site-footer";
import SiteNavbar from "../components/site-navbar";
import SkillsSection from "../components/skills-section";
import ScrollProgress from "../components/ui/scroll-progress";
import ScrollTopButton from "../components/ui/scroll-top-button";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <SiteNavbar />
      <main>
        <HeroSection />
        <CaseStudiesSection />
        <ProductThinkingSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollTopButton />
    </div>
  );
}
