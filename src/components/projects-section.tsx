'use client';

import { useRef, useState, useEffect } from 'react';
import { parseText } from '@/lib/text-parser';

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Vibrant Hues",
      description: "🎨 Modern color palette management that hits different. Like having a personal stylist for your designs — fast, pretty, always in theme.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      icon: "square",
      link: "#", // Add your project link here
      details: {
        fullDescription: "A modern colour palette management application that helps designers and developers discover, create, and preview color palettes in both light and dark modes. Features include palette downloads, real-time previews, and an intuitive user interface.",
        whyExists: "Because finding the perfect color palette shouldn't feel like searching for a needle in a haystack. Designers needed a tool that actually understood their workflow.",
        howStarted: "Started as a weekend project when I got frustrated with existing color tools. Spent way too much time tweaking gradients instead of building features.",
        whatBroke: "The color picker broke on Safari (classic). Spent 3 days debugging CSS color spaces. Also, the database kept timing out when generating palettes."
      }
    },
    {
      id: 2,
      title: "Trylo - Virtual Try-On",
      description: "👗 AI-powered virtual try-on that actually works. Like having a magic mirror, but for your phone. No more guessing if that shirt fits.",
      tags: ["React", "TensorFlow.js", "Node.js", "Express"],
      icon: "circle",
      link: "#", // Add your project link here
      details: {
        fullDescription: "An innovative AI-powered virtual try-on platform enabling realistic garment visualization on various pose or body stances. This technology bridges the gap between online shopping and the physical fitting room experience.",
        whyExists: "Online shopping is broken. 30% return rates because clothes don't fit. Someone had to fix this mess.",
        howStarted: "Saw my sister return 5 dresses in one week. Thought 'there has to be a better way.' Turns out, computer vision is hard.",
        whatBroke: "The pose detection kept thinking arms were legs. Also, the AI occasionally made people look like abstract art. Fun times."
      }
    },
    {
      id: 3,
      title: "DocBook",
      description: "📅 Appointment booking that doesn't make you want to scream. Doctors love it, patients love it, even the receptionist loves it.",
      tags: ["React", "TypeScript", "Node.js", "Supabase"],
      icon: "triangle",
      link: "#", // Add your project link here
      details: {
        fullDescription: "DocBook: Effortlessly manage doctor appointments with automated booking, reminders, and seamless calendar for patients and healthcare providers.",
        whyExists: "Healthcare booking is stuck in 1995. Patients deserve better than calling and waiting on hold for 20 minutes.",
        howStarted: "Built this after my mom spent 2 hours trying to book a simple checkup. Healthcare tech needed a serious upgrade.",
        whatBroke: "Time zones. Oh god, the time zones. Also, doctors kept double-booking themselves because they didn't trust the system initially."
      }
    },
    {
      id: 4,
      title: "Flow-write",
      description: "✍️ MacOS app for flow writing. 3 random words, no backspace, pure creative chaos. Writers either love it or hate it.",
      tags: ["Swift", "MacOS", "Creative Tools"],
      icon: "square",
      link: "#", // Add your project link here
      details: {
        fullDescription: "A MacOS App, which helps in flow-writing by giving you 3 random words, and makes you wander your mind, write freely! No backspaces allowed, just free writing.",
        whyExists: "Writer's block is real. Sometimes you need to trick your brain into being creative. Constraints breed creativity.",
        howStarted: "Inspired by Julia Cameron's morning pages. Wanted to gamify the writing process and remove the perfectionist paralysis.",
        whatBroke: "The random word generator kept giving inappropriate combinations. Had to build a filter. Also, users kept trying to hack the 'no backspace' rule."
      }
    },
    {
      id: 5,
      title: "OMDB Movie Database",
      description: "🎬 Movie search that actually finds what you're looking for. No more scrolling through Netflix for 2 hours just to watch The Office again.",
      tags: ["JavaScript", "Node.js", "Express", "OMDB API"],
      icon: "circle",
      link: "#", // Add your project link here
      details: {
        fullDescription: "A dynamic movie search application integrated with the OMDB API, allowing users to explore a vast database of films. Features include detailed movie information, responsive design, and real-time search functionality.",
        whyExists: "Movie discovery is broken. You know that feeling when you can't remember that movie with 'that guy from that thing'? This fixes that.",
        howStarted: "Built during a movie night when we spent more time searching than watching. The OMDB API was free, so why not?",
        whatBroke: "Rate limiting. Turns out, free APIs don't like it when you hammer them with requests. Had to implement caching and request throttling."
      }
    },
    {
      id: 6,
      title: "Heart Risk Detection",
      description: "❤️ ML model that predicts heart disease risk. Because your heart is important, and early detection saves lives. Science is cool.",
      tags: ["Python", "TensorFlow", "React", "Scikit-learn"],
      icon: "triangle",
      link: "#", // Add your project link here
      details: {
        fullDescription: "A machine learning-powered web application that predicts heart disease risk using the Kaggle dataset. The model analyzes various health parameters providing risk assessment and further helping in early detection and prevention.",
        whyExists: "Heart disease is the #1 killer globally. If ML can help catch it early, why aren't we using it everywhere?",
        howStarted: "Started as a college project, got obsessed with the accuracy metrics. Turns out, healthcare data is messy but fascinating.",
        whatBroke: "The model kept overfitting. Spent weeks tuning hyperparameters. Also, medical disclaimers are harder to write than the actual code."
      }
    }
  ];

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
    <section className="py-12 md:py-16 lg:py-24 pb-6 md:pb-8 lg:pb-10" data-section="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Animated Header */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
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
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex-none w-[80%] md:w-[45%] lg:w-[30%] snap-start transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-full group">
                  <div className="h-48 w-full flex items-center justify-center mb-8 bg-[#f5f5f5] rounded-md overflow-hidden">
                    {project.icon === "square" && (
                      <div className="w-24 h-24 bg-[#FFFFF0] rounded-md shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out"></div>
                    )}
                    {project.icon === "circle" && (
                      <div className="w-24 h-24 bg-[#FFFFF0] rounded-full shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out"></div>
                    )}
                    {project.icon === "triangle" && (
                      <div className="w-0 h-0 border-l-[45px] border-r-[45px] border-b-[80px] border-[#FFFFF0] shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out"></div>
                    )}
                  </div>

                  <div className="flex flex-col h-[calc(100%-14rem)]">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/90 transition-colors duration-200">{project.title}</h3>

                    <p className="text-xs text-foreground/70 mb-4 group-hover:text-foreground/80 transition-colors duration-200 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs text-foreground/50 group-hover:text-foreground/60 transition-all duration-200"
                          style={{
                            transitionDelay: `${tagIndex * 50}ms`
                          }}
                        >
                          {tagIndex !== 0 && "• "}{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => setExpandedProject(project.id)}
                        className="flex-1 bg-foreground/10 hover:bg-foreground/20 text-foreground/80 text-xs py-2 px-3 rounded-md transition-all duration-200 hover:scale-105"
                      >
                        🔍 Deep Dive
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-foreground/80 hover:bg-foreground text-white text-xs py-2 px-3 rounded-md transition-all duration-200 hover:scale-105"
                      >
                        🚀 Visit
                      </a>
                    </div>
                  </div>
                </div>
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
              transitionDelay: `${projects.length * 150 + 200}ms`
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
        </div>
      </div>

      {/* Expanded Project Modal */}
      {expandedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === expandedProject);
              if (!project) return null;
              
              return (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                      <p className="text-foreground/70">{project.description}</p>
                    </div>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="text-foreground/50 hover:text-foreground/80 text-2xl p-2 hover:bg-foreground/10 rounded-full transition-all duration-200"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">Built With</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-8">
                    {/* Full Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">What It Is</h3>
                      <p className="text-foreground/80 leading-relaxed">{project.details.fullDescription}</p>
                    </div>

                    {/* Why It Exists */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">🤔 Why It Exists</h3>
                      <p className="text-foreground/80 leading-relaxed">{project.details.whyExists}</p>
                    </div>

                    {/* How It Started */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">🚀 How It Started</h3>
                      <p className="text-foreground/80 leading-relaxed">{project.details.howStarted}</p>
                    </div>

                    {/* What Broke */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">💥 What Broke</h3>
                      <p className="text-foreground/80 leading-relaxed">{project.details.whatBroke}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-foreground/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-foreground text-white px-6 py-3 rounded-lg hover:bg-foreground/90 transition-all duration-200 hover:scale-105 font-medium"
                    >
                      🚀 Visit Project
                    </a>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="bg-foreground/10 text-foreground/80 px-6 py-3 rounded-lg hover:bg-foreground/20 transition-all duration-200 font-medium"
                    >
                      ← Back to Projects
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

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
