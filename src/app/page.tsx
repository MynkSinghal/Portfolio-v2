import BlogsSection from "@/components/blogs-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import JourneySection from "@/components/journey-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import QuotesSection from "@/components/quotes-section";
import SocialLinksSection from "@/components/social-links-section";
import TimelineSection from "@/components/timeline-section";
import ThreadsSection from "@/components/threads-section";
import WorkspaceSection from "@/components/workspace-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <BlogsSection />
        <ThreadsSection />
        <QuotesSection />
        {/* <SocialLinksSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
