'use client';

import { useRef, useState, useEffect } from 'react';

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Palette Party",
      description: "Color tool for designers. Fast, pretty, always in theme.",
      tags: ["react", "tailwind", "supabase"],
      icon: "square"
    },
    {
      id: 2,
      title: "Glitch Menu",
      description: "AR menu app. Learned more from bugs than launches.",
      tags: ["ai", "ar", "mobile"],
      icon: "circle"
    },
    {
      id: 3,
      title: "Hunter AI",
      description: "AI tools for creators. Broke prod, fixed quick, launched wild.",
      tags: ["ai", "ml", "realtime"],
      icon: "triangle"
    },
    {
      id: 4,
      title: "Vibe Tools",
      description: "Creator toolkit. Built for speed, shipped with love.",
      tags: ["tools", "creators", "productivity"],
      icon: "square"
    },
    {
      id: 5,
      title: "Buildspace Campus",
      description: "Physical space for builders. Community, chaos, creation.",
      tags: ["community", "physical", "education"],
      icon: "circle"
    },
    {
      id: 6,
      title: "Esports Analytics",
      description: "Deep learning models for gaming. Data-driven insights.",
      tags: ["ml", "gaming", "analytics"],
      icon: "triangle"
    }
  ];

  // Calculate items per view and total pages based on screen size
  useEffect(() => {
    const calculateLayout = () => {
      if (!scrollRef.current) return;
      
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      
      // Calculate how many items are visible based on responsive widths
      let itemsVisible: number;
      if (containerWidth >= 1024) { // lg breakpoint - 30% width items
        itemsVisible = 3; // Show 3 items per page on large screens
      } else if (containerWidth >= 768) { // md breakpoint - 45% width items  
        itemsVisible = 2; // Show 2 items per page on medium screens
      } else { // mobile - 80% width items
        itemsVisible = 1; // Show 1 item per page on mobile
      }
      
      // Calculate total pages based on items per page
      const pages = Math.ceil(projects.length / itemsVisible);
      
      setItemsPerView(itemsVisible);
      setTotalPages(pages);
    };

    calculateLayout();
    
    const handleResize = () => {
      calculateLayout();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projects.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isScrolling) return;
      
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      
      // Calculate item width based on screen size (including gap)
      let itemWidth: number;
      if (containerWidth >= 1024) {
        itemWidth = containerWidth * 0.3 + 24; // 30% + gap
      } else if (containerWidth >= 768) {
        itemWidth = containerWidth * 0.45 + 24; // 45% + gap
      } else {
        itemWidth = containerWidth * 0.8 + 24; // 80% + gap
      }
      
      // Calculate which page we're on based on items per view
      let pageIndex: number;
      if (containerWidth >= 1024) {
        pageIndex = Math.round(scrollLeft / (itemWidth * 3)); // 3 items per page
      } else if (containerWidth >= 768) {
        pageIndex = Math.round(scrollLeft / (itemWidth * 2)); // 2 items per page
      } else {
        pageIndex = Math.round(scrollLeft / itemWidth); // 1 item per page
      }
      
      if (pageIndex !== currentIndex) {
        setCurrentIndex(Math.min(Math.max(pageIndex, 0), totalPages - 1));
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, isScrolling, totalPages]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    setIsScrolling(true);
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;
    
    // Calculate item width based on screen size (including gap)
    let itemWidth: number;
    if (containerWidth >= 1024) {
      itemWidth = containerWidth * 0.3 + 24; // 30% + gap
    } else if (containerWidth >= 768) {
      itemWidth = containerWidth * 0.45 + 24; // 45% + gap
    } else {
      itemWidth = containerWidth * 0.8 + 24; // 80% + gap
    }
    
    // Calculate scroll distance based on items per page
    let scrollDistance: number;
    if (containerWidth >= 1024) {
      scrollDistance = index * itemWidth * 3; // 3 items per page
    } else if (containerWidth >= 768) {
      scrollDistance = index * itemWidth * 2; // 2 items per page
    } else {
      scrollDistance = index * itemWidth; // 1 item per page
    }
    
    container.scrollTo({
      left: scrollDistance,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    
    // Reset scrolling flag after animation
    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight uppercase">
          Things I&apos;ve Built
        </h2>

        <p className="text-lg mb-12 text-foreground/80">
          A few of my best experiments — shipped for energy, lessons, and fun.
        </p>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-none w-[80%] md:w-[45%] lg:w-[30%] snap-start"
              >
                <div className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-sm transition-shadow duration-300 h-full">
                  <div className="h-48 w-full flex items-center justify-center mb-8 bg-[#f5f5f5] rounded-md">
                    {project.icon === "square" && (
                      <div className="w-24 h-24 bg-[#FFFFF0] rounded-md shadow-sm"></div>
                    )}
                    {project.icon === "circle" && (
                      <div className="w-24 h-24 bg-[#FFFFF0] rounded-full shadow-sm"></div>
                    )}
                    {project.icon === "triangle" && (
                      <div className="w-0 h-0 border-l-[45px] border-r-[45px] border-b-[80px] border-[#FFFFF0] shadow-sm"></div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  <p className="text-sm text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-foreground/50">
                        {index !== 0 && "• "}{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators - Only show if there are multiple pages */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-foreground/80 w-6' 
                      : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
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
