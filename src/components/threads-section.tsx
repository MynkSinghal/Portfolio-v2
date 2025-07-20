"use client";

import { getAllThreads } from "@/data/threads";
import { parseText } from "@/lib/text-parser";
import { useEffect, useRef, useState } from "react";
import ThreadCard from "./ThreadCard";
import Link from "next/link";

export default function ThreadsSection() {
  const threads = getAllThreads();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate items per view and total pages
  useEffect(() => {
    const calculateLayout = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        let items: number;
        if (width >= 1024)
          items = 3; // lg: w-[32%]
        else if (width >= 768)
          items = 2; // md: w-[48%]
        else items = 1; // w-[85%]

        setItemsPerView(items);
        setTotalPages(Math.ceil(threads.length / items));
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [threads.length]);

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

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Handle scroll to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && !isScrolling) {
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth / itemsPerView;
        const newIndex = Math.round(scrollLeft / cardWidth / itemsPerView);
        setCurrentIndex(Math.min(newIndex, totalPages - 1));
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [itemsPerView, totalPages, isScrolling]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      setIsScrolling(true);
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / itemsPerView;
      const scrollLeft = index * cardWidth * itemsPerView;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
        setCurrentIndex(index);
      }, 500);
    }
  };

  return (
    <section
      id="threads"
      className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12"
      data-section="threads"
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
              My Threads
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-base text-foreground/60 italic">
                {parseText(
                  "(raw thoughts, <italic>unfiltered takes</italic>, and brain dumps)",
                )}
              </p>
              <Link
                href="/threads"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center gap-1"
              >
                View All
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {threads.length > 0 ? (
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-8"
              style={
                {
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                } as React.CSSProperties & {
                  WebkitScrollbar?: { display: string };
                }
              }
            >
              {threads.map((thread, index) => (
                <div
                  key={thread.id}
                  className={`flex-none w-[90%] md:w-[45%] lg:w-[32%] snap-start transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <ThreadCard thread={thread} />
                </div>
              ))}
            </div>

            {/* Enhanced Dot Indicators */}
            {totalPages > 1 && (
              <div
                className={`flex justify-center mt-8 gap-3 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${threads.length * 150 + 200}ms`,
                }}
              >
                {Array.from({ length: totalPages }, (_, pageIndex) => {
                  const pageNumber = pageIndex + 1;
                  const isActive = pageIndex === currentIndex;
                  return (
                    <button
                      key={`pagination-page-${pageNumber}`}
                      onClick={() => scrollToIndex(pageIndex)}
                      className={`group relative transition-all duration-500 ease-out ${
                        isActive ? "scale-110" : "hover:scale-105"
                      }`}
                      aria-label={`Go to page ${pageNumber}`}
                    >
                      <div className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        isActive
                          ? "bg-foreground/80 w-8"
                          : "bg-foreground/20 w-2 group-hover:bg-foreground/40"
                      }`} />
                      {/* Animated dot label */}
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground/60 transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}>
                        {pageNumber}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Enhanced Mobile Scroll Indicator */}
            <div className="md:hidden flex justify-center mt-6">
              <div className="text-xs bg-foreground/5 px-4 py-2 rounded-full text-foreground/50 flex items-center gap-2 animate-pulse">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Swipe to explore
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-foreground/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-6h-2M6 7h2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">No threads yet</h3>
            <p className="text-foreground/60">Check back soon for my latest thoughts!</p>
          </div>
        )}
      </div>
    </section>
  );
} 