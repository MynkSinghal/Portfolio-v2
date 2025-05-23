import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import JourneySection from "@/components/journey-section";
import ProjectsSection from "@/components/projects-section";
import TimelineSection from "@/components/timeline-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </div>
  );
}
