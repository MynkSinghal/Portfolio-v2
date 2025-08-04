"use client";

import TimelineItem from './TimelineItem';

export default function ExperienceSection() {
  return (
    <section 
      className="py-12 md:py-16 bg-[#fafafa] rounded-2xl" 
      id="experience"
      aria-label="Work Experience"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#1a1a1a]">Work Experience</h2>
        
        <div className="max-w-3xl">
          <ul className="space-y-16">
            <TimelineItem 
              company="Publicis Sapient"
              logo="/images/publicis-sapient-logo.webp"
              role="Software Engineering Intern"
              duration="May 2025 – July 2025"
              location="India"
              type="Internship"
              highlights={[
                "Co-developed ARIA, an AI voice-interview pre-screening tool using FastAPI, LangChain, and MongoDB",
                "Optimized FastAPI endpoints and MongoDB schemas, improving data throughput by 40%",
                "Created comprehensive API documentation using Swagger"
              ]}
            />

            <TimelineItem 
              company="LaVisuals"
              logo="/images/lavisuals-logo.webp"
              role="Technical Lead & Community Manager"
              duration="Feb 2021 – Jul 2023"
              location="Remote"
              type="Full-Time"
              highlights={[
                "Developed Discord bot backend in Node.js to automate order/support flows",
                "Implemented load balancing and caching, driving 30% revenue growth",
                "Led 5+ design workshops, onboarding 250+ community members"
              ]}
            />

            <TimelineItem 
              company="ACM MUJ"
              logo="/images/acm-logo.webp"
              role="Head of Graphic Design & Deputy Head of Events"
              duration="Aug 2023 – Apr 2024"
              location="Manipal University Jaipur"
              type="Leadership"
              highlights={[
                "Led design efforts for 15 chapter events, increasing social media engagement by 30%",
                "Managed speaker outreach, logistics, and marketing to boost workshop attendance by 25%"
              ]}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}