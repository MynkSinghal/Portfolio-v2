'use client';

import { useRef, useState, useEffect } from 'react';

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isScrolling) return;
      
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth * 0.8; // 80% width per item
      const newIndex = Math.round(scrollLeft / itemWidth);
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(Math.min(Math.max(newIndex, 0), projects.length - 1));
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, isScrolling]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    setIsScrolling(true);
    const container = scrollRef.current;
    const itemWidth = container.offsetWidth * 0.8;
    const scrollLeft = index * itemWidth;
    
    container.scrollTo({
      left: scrollLeft,
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
                      <div className="w-24 h-24 bg-white rounded-md shadow-sm"></div>
                    )}
                    {project.icon === "circle" && (
                      <div className="w-24 h-24 bg-white rounded-full shadow-sm"></div>
                    )}
                    {project.icon === "triangle" && (
                      <div className="w-0 h-0 border-l-[45px] border-r-[45px] border-b-[80px] border-white shadow-sm"></div>
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

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-foreground/80 w-6' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
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
