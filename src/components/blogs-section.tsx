'use client';

import { useState, useRef, useEffect } from 'react';
import { getAllBlogs } from '@/data/blogs';
import BlogCard from './BlogCard';
import { parseText } from '@/lib/text-parser';

export default function BlogsSection() {
  const blogs = getAllBlogs();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  // Calculate items per view and total pages
  useEffect(() => {
    const calculateLayout = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        let items;
        if (width >= 1024) items = 3; // lg: w-[30%]
        else if (width >= 768) items = 2; // md: w-[45%]
        else items = 1; // w-[80%]
        
        setItemsPerView(items);
        setTotalPages(Math.ceil(blogs.length / items));
      }
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, [blogs.length]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      if (scrollContainerRef.current && !isScrolling && !showAllBlogs) {
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth / itemsPerView;
        const newIndex = Math.round(scrollLeft / cardWidth / itemsPerView);
        setCurrentIndex(Math.min(newIndex, totalPages - 1));
      }
    };

    const container = scrollContainerRef.current;
    if (container && !showAllBlogs) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [itemsPerView, totalPages, isScrolling, showAllBlogs]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && !showAllBlogs) {
      setIsScrolling(true);
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / itemsPerView;
      const scrollLeft = index * cardWidth * itemsPerView;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
        setCurrentIndex(index);
      }, 500);
    }
  };

  const toggleShowAllBlogs = () => {
    setShowAllBlogs(!showAllBlogs);
  };

  return (
    <section id="blogs" className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12" data-section="blogs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Animated Header */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight uppercase">
                My Blogs
              </h2>
              <p className="text-base text-foreground/60 italic">
                {parseText("(thoughts, experiments, and <italic>occasional wisdom</italic>)")}
              </p>
            </div>
            
            {/* Toggle Button */}
            {blogs.length > 3 && (
              <div className={`transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: '400ms'
              }}>
                <button
                  onClick={toggleShowAllBlogs}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 ease-out group text-sm font-medium"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${showAllBlogs ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={showAllBlogs ? "M19 14l-7-7m0 0l-7 7m7-7v18" : "M4 6h16M4 10h16M4 14h16M4 18h16"} 
                    />
                  </svg>
                  {showAllBlogs ? 'Show Carousel' : 'Show All Blogs'}
                </button>
              </div>
            )}
          </div>
        </div>

        {blogs.length > 0 ? (
          <div className="relative">
            {showAllBlogs ? (
              /* Grid Layout - Show All Blogs */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                  <div 
                    key={blog.id}
                    className={`transition-all duration-700 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-12'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>
            ) : (
              /* Horizontal Scroll Layout - Original Carousel */
              <>
                <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  } as React.CSSProperties & { WebkitScrollbar?: { display: string } }}
                >
                  {blogs.map((blog, index) => (
                    <div 
                      key={blog.id} 
                      className={`flex-none w-[80%] md:w-[45%] lg:w-[30%] snap-start transition-all duration-700 ease-out ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-12'
                      }`}
                      style={{
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      <BlogCard blog={blog} />
                    </div>
                  ))}
                </div>
                
                {/* Animated Dot Indicators */}
                {totalPages > 1 && (
                  <div className={`flex justify-center mt-8 gap-2 transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${blogs.length * 150 + 200}ms`
                  }}>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                          index === currentIndex 
                            ? 'bg-foreground/80 w-6 shadow-sm' 
                            : 'bg-foreground/20 hover:bg-foreground/40 w-2'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile scroll indicators */}
                <div className="md:hidden flex justify-center mt-6 gap-2">
                  <div className="text-xs text-foreground/50 bg-foreground/5 px-3 py-1 rounded-full">
                    Swipe to see more →
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className={`text-center py-12 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-foreground/5 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-foreground/30" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">No blogs yet</h3>
            <p className="text-foreground/60">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </section>
  );
} 