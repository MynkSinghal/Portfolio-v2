"use client";

import { getAllTweets } from "@/data/tweets";
import { parseText } from "@/lib/text-parser";
import { useEffect, useRef, useState } from "react";
import TweetCard from "./TweetCard";

export default function TweetsSection() {
  const tweets = getAllTweets();
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
        setTotalPages(Math.ceil(tweets.length / items));
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [tweets.length]);

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
      id="tweets"
      className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12"
      data-section="tweets"
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
              My Tweets
            </h2>
            <p className="text-base text-foreground/60 italic">
              {parseText(
                "(raw thoughts, <italic>unfiltered takes</italic>, and brain dumps)",
              )}
            </p>
          </div>
        </div>

        {tweets.length > 0 ? (
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
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
              {tweets.map((tweet, index) => (
                <div
                  key={tweet.id}
                  className={`flex-none w-[85%] md:w-[48%] lg:w-[32%] snap-start transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <TweetCard tweet={tweet} />
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
                  transitionDelay: `${tweets.length * 150 + 200}ms`,
                }}
              >
                {Array.from({ length: totalPages }, (_, pageIndex) => {
                  const pageNumber = pageIndex + 1;
                  return (
                    <button
                      key={`pagination-page-${pageNumber}`}
                      onClick={() => scrollToIndex(pageIndex)}
                      className={`h-2 rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                        pageIndex === currentIndex
                          ? "bg-foreground/80 w-6 shadow-sm"
                          : "bg-foreground/20 hover:bg-foreground/40 w-2"
                      }`}
                      aria-label={`Go to page ${pageNumber}`}
                    />
                  );
                })}
              </div>
            )}

            {/* Mobile scroll indicators */}
            <div className="md:hidden flex justify-center mt-6 gap-2">
              <div className="text-xs text-foreground/50 bg-foreground/5 px-3 py-1 rounded-full">
                Swipe to see more →
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
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-foreground/60 mb-2">
              No tweets yet
            </h3>
            <p className="text-sm text-foreground/50">
              Check back soon for my latest thoughts and insights.
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 