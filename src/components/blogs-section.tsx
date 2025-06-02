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
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
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
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
        setCurrentIndex(index);
      }, 500);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12" data-section="blogs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Animated Header */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight uppercase">
              My Blogs
            </h2>
            <p className="text-base text-foreground/60 italic">
              {parseText("(thoughts, experiments, and <italic>occasional wisdom</italic>)")}
            </p>
          </div>
        </div>

        {blogs.length > 0 ? (
          <div className="relative">
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
                  strokeWidth={1.5} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground/80 mb-2">Coming Soon</h3>
            <p className="text-foreground/60">
              I'm working on some interesting posts. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 