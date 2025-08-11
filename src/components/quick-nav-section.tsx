"use client";

import { useEffect, useState } from "react";

export default function QuickNavSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <section className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Subtle Quick Navigation */}
        <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-md p-3 opacity-70 hover:opacity-100 transition-opacity duration-300 animate-in fade-in duration-1000">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" />
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const projectsSection = document.querySelector(
                    '[data-section="projects"]',
                  );
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs text-foreground/60 hover:text-foreground/90 underline underline-offset-2 transition-colors"
              >
                Skip to Projects
              </button>

              <button
                onClick={() => {
                  const blogsSection = document.querySelector(
                    '[data-section="blogs"]',
                  );
                  if (blogsSection) {
                    blogsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs text-foreground/60 hover:text-foreground/90 underline underline-offset-2 transition-colors"
              >
                Blogs
              </button>

              <button
                onClick={() => {
                  const threadsSection = document.querySelector(
                    '[data-section="threads"]',
                  ) as HTMLElement;
                  if (threadsSection) {
                    threadsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs text-foreground/60 hover:text-foreground/90 underline underline-offset-2 transition-colors"
              >
                Threads
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
