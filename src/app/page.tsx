import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WorkSection } from "@/components/sections/work-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { SEOPipelineSection } from "@/components/sections/seo-pipeline-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      
      <div id="services">
        <ServicesSection />
      </div>

      <SEOPipelineSection />
      
      <div id="work">
        <WorkSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <TechStackSection />
    </main>
  );
}
