import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import QuickNavSection from "@/components/quick-nav-section";
import JourneySection from "@/components/journey-section";
import WorkspaceSection from "@/components/workspace-section";
import ProjectsSection from "@/components/projects-section";
import QuotesSection from "@/components/quotes-section";
import TimelineSection from "@/components/timeline-section";
import SocialLinksSection from "@/components/social-links-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <QuickNavSection />
        <JourneySection />
        <WorkspaceSection />
        <ProjectsSection />
        <QuotesSection />
        <TimelineSection />
        <SocialLinksSection />
        <ContactSection />
      </main>
    </div>
  );
}
