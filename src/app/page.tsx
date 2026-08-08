import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { RippleCtaSection } from "@/components/sections/ripple-cta-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <TechStackSection />

      <AboutSection />
      
      <div id="work">
        <WorkSection />
      </div>
      
      <TestimonialsSection />

      <RippleCtaSection />

      <FaqSection />
    </main>
  );
}
