'use client';

import { useState, useEffect } from 'react';

export default function WorkspaceSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Workspace images with personality-driven captions
  const workspaceImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      alt: "Modern workspace with laptop and coffee",
      caption: "☕ **Morning vibes** — Coffee #3, idea #47, still in pajamas",
      chaosLevel: "Organized Chaos"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center",
      alt: "Cluttered desk with multiple monitors",
      caption: "🖥️ **Peak productivity** — When 3 monitors still isn't enough",
      chaosLevel: "Beautiful Mess"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center",
      alt: "Creative workspace with sketches and tools",
      caption: "✏️ **Analog thinking** — Sometimes the best ideas start on paper",
      chaosLevel: "Creative Storm"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&h=400&fit=crop&crop=center",
      alt: "Late night coding session",
      caption: "🌙 **3 AM energy** — When the bugs become features",
      chaosLevel: "Midnight Magic"
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

    const section = document.getElementById('workspace-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="workspace-section" className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Animated Header */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight uppercase">
            🎯 My Workspace Chaos
          </h2>

          <p className="text-lg mb-12 text-foreground/80">
            Where the magic happens — **coffee stains**, **late nights**, and **beautiful chaos**. Every great idea starts somewhere, mine usually start in this organized mess.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workspaceImages.map((image, index) => (
            <div 
              key={image.id}
              className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="bg-[#f2f2f2] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out group">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Chaos Level Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {image.chaosLevel}
                  </div>
                </div>
                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className={`mt-12 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: `${workspaceImages.length * 200 + 300}ms`
        }}>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 text-center">
            *Current status: Building something new, probably with too much coffee and not enough sleep* ☕
          </p>
        </div>
      </div>
    </section>
  );
} 