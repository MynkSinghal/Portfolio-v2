"use client";

import { parseText } from "@/lib/text-parser";
import { useEffect, useRef, useState } from "react";

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "PromptPolish",
      description: "Chrome extension that transforms messy text into clean AI prompts. Select, right-click, polish.",
      tags: ["Chrome Extension", "JavaScript", "Gemini API"],
      screenshot: "/images/projects/promptpolish.png", // Placeholder for screenshot
      link: "https://extension.mayanksinghal.tech",
      published: true,
    },
    {
      id: 2,
      title: "Trylo - Virtual Try-On",
      description: "AI-powered virtual try-on platform for realistic garment visualization on different body poses.",
      tags: ["React", "TensorFlow.js", "AI"],
      screenshot: "/images/projects/trylo.png", // Placeholder for screenshot
      link: "https://tryon.mayanksinghal.tech",
      published: true,
    },
    {
      id: 3,
      title: "Vibrant Hues",
      description: "Modern color palette management tool for designers with light/dark mode previews.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      screenshot: "/images/projects/vibranthues.png", // Placeholder for screenshot
      link: "https://vibranthues.mayanksinghal.tech",
      published: true,
    },
    {
      id: 4,
      title: "DocBook",
      description: "Streamlined appointment booking system for doctors and patients with automated reminders.",
      tags: ["React", "TypeScript", "Supabase"],
      screenshot: "/images/projects/docbook.png", // Placeholder for screenshot
      link: "https://docbook.mayanksinghal.tech",
      published: true,
    },
    {
      id: 5,
      title: "Flow-write",
      description: "MacOS app for creative flow writing with 3 random words and no backspace allowed.",
      tags: ["Swift", "MacOS", "Creative Tools"],
      screenshot: "/images/projects/flowwrite.png", // Placeholder for screenshot
      link: "https://github.com/MynkSinghal/IdeaDice/releases/download/v1.0.0/IdeaDice.app.zip",
      published: true,
    },
    {
      id: 6,
      title: "OMDB Movie Database",
      description: "Movie search application with detailed film information and real-time search functionality.",
      tags: ["JavaScript", "Node.js", "OMDB API"],
      screenshot: "/images/projects/omdb.png", // Placeholder for screenshot
      link: "https://movie.mayanksinghal.tech/",
      published: true,
    },
    {
      id: 7,
      title: "Heart Risk Detection",
      description: "ML-powered web application that predicts heart disease risk using health parameters.",
      tags: ["Python", "TensorFlow", "Machine Learning"],
      screenshot: "/images/projects/heart.png", // Placeholder for screenshot
      link: "https://heart.mayanksinghal.tech",
      published: true,
    },
  ];

  // Filter projects to only show published ones
  const publishedProjects = projects.filter(project => project.published);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = scrollRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Calculate items per view and total pages based on screen size
  useEffect(() => {
    const calculateLayout = () => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;

      let itemsVisible: number;
      if (containerWidth >= 1024) {
        itemsVisible = 3;
      } else if (containerWidth >= 768) {
        itemsVisible = 2;
      } else {
        itemsVisible = 1;
      }

      const pages = Math.ceil(publishedProjects.length / itemsVisible);

      setItemsPerView(itemsVisible);
      setTotalPages(pages);
    };

    calculateLayout();

    const handleResize = () => {
      calculateLayout();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [publishedProjects.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isScrolling) return;

      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;

      let itemWidth: number;
      if (containerWidth >= 1024) {
        itemWidth = containerWidth * 0.3 + 24;
      } else if (containerWidth >= 768) {
        itemWidth = containerWidth * 0.45 + 24;
      } else {
        itemWidth = containerWidth * 0.8 + 24;
      }

      let pageIndex: number;
      if (containerWidth >= 1024) {
        pageIndex = Math.round(scrollLeft / (itemWidth * 3));
      } else if (containerWidth >= 768) {
        pageIndex = Math.round(scrollLeft / (itemWidth * 2));
      } else {
        pageIndex = Math.round(scrollLeft / itemWidth);
      }

      if (pageIndex !== currentIndex) {
        setCurrentIndex(Math.min(Math.max(pageIndex, 0), totalPages - 1));
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex, isScrolling, totalPages]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    setIsScrolling(true);
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;

    let itemWidth: number;
    if (containerWidth >= 1024) {
      itemWidth = containerWidth * 0.3 + 24;
    } else if (containerWidth >= 768) {
      itemWidth = containerWidth * 0.45 + 24;
    } else {
      itemWidth = containerWidth * 0.8 + 24;
    }

    let scrollDistance: number;
    if (containerWidth >= 1024) {
      scrollDistance = index * itemWidth * 3;
    } else if (containerWidth >= 768) {
      scrollDistance = index * itemWidth * 2;
    } else {
      scrollDistance = index * itemWidth;
    }

    container.scrollTo({
      left: scrollDistance,
      behavior: "smooth",
    });

    setCurrentIndex(index);

    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-24 pb-6 md:pb-8 lg:pb-10"
      data-section="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Animated Header */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight uppercase">
              Things I&apos;ve Built
            </h2>
            <p className="text-base text-foreground/60 italic">
              (and somehow didn't break)
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {publishedProjects
              .sort((a, b) => a.id - b.id)
              .map((project, index) => (
              <div
                key={project.id}
                className={`flex-none w-[80%] md:w-[45%] lg:w-[30%] snap-start transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-full group">
                  {/* Screenshot Container */}
                  <div className="h-48 w-full mb-6 bg-[#f5f5f5] rounded-md overflow-hidden border">
                    <img
                      src={project.screenshot}
                      alt={`${project.title} Screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-foreground/40 text-sm hidden">
                      Screenshot coming soon
                    </div>
                  </div>

                  <div className="flex flex-col h-[calc(100%-14rem)]">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/90 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-sm text-foreground/70 mb-4 group-hover:text-foreground/80 transition-colors duration-200 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={`${project.id}-tag-${tag}`}
                          className="text-xs bg-foreground/10 text-foreground/60 px-2 py-1 rounded-md group-hover:bg-foreground/15 transition-all duration-200"
                          style={{
                            transitionDelay: `${tagIndex * 50}ms`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-foreground/80 hover:bg-foreground text-white text-sm py-3 px-4 rounded-md transition-all duration-200 hover:scale-105 font-medium text-center block"
                      >
                        🚀 Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Dot Indicators */}
          {totalPages > 1 && (
            <div
              className={`flex justify-center mt-8 gap-2 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${publishedProjects.length * 150 + 200}ms`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={`page-${pageNumber}`}
                    onClick={() => scrollToIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                      index === currentIndex
                        ? "bg-foreground/80 w-6 shadow-sm"
                        : "bg-foreground/20 hover:bg-foreground/40 w-2"
                    }`}
                    aria-label={`Go to page ${pageNumber}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
