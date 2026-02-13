import {
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
} from "@/app/components/sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="accent-line" />
      <AboutSection />
      <div className="accent-line" />
      <ServicesSection />
      <div className="accent-line" />
      <PortfolioSection />
      <TestimonialsSection />
      <div className="accent-line" />
      <ContactSection />
    </>
  );
}
