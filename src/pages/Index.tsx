import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProfileSection } from "@/components/portfolio/ProfileSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navigation } from "@/components/portfolio/Navigation";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <ProfileSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;