import BlogsSection from "@/components/blogs-section";
import ContactSection from "@/components/contact-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import JourneySection from "@/components/journey-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import QuickNavSection from "@/components/quick-nav-section";
import QuotesSection from "@/components/quotes-section";
import SocialLinksSection from "@/components/social-links-section";
import TimelineSection from "@/components/timeline-section";
import ThreadsSection from "@/components/threads-section";
import WorkspaceSection from "@/components/workspace-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <QuickNavSection />
        <ExperienceSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <BlogsSection />
        <ThreadsSection />
        <QuotesSection />
        <SocialLinksSection />
        <ContactSection />
      </main>
    </div>
  );
}
