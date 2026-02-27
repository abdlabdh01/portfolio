import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Footer } from "@/components/site/footer";

import { HeroSection } from "@/sections/hero-section";
import { ProfessionalSummarySection } from "@/sections/professional-summary-section";
import { EducationSection } from "@/sections/education-section";
import { TechnicalSkillsSection } from "@/sections/technical-skills-section";
import { ExperienceSection } from "@/sections/experience-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ResearchSection } from "@/sections/research-section";
import { PhotoGallerySection } from "@/sections/photo-gallery-section";
import { CertificationsSection } from "@/sections/certifications-section";
import { ContactSection } from "@/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <ProfessionalSummarySection />
        <EducationSection />
        <TechnicalSkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <PhotoGallerySection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
