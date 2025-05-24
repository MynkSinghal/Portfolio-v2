'use client';

import { useState, useEffect } from 'react';
import { parseText } from '@/lib/text-parser';

export default function WorkspaceSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Workspace images with personality-driven captions
  const workspaceImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      alt: "Modern workspace with laptop and coffee",
      caption: "☕ <bold>Morning vibes</bold> — Coffee #3, idea #47, still in pajamas",
      chaosLevel: "Organized Chaos"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center",
      alt: "Cluttered desk with multiple monitors",
      caption: "🖥️ <bold>Peak productivity</bold> — When 3 monitors still isn't enough",
      chaosLevel: "Beautiful Mess"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center",
      alt: "Creative workspace with sketches and tools",
      caption: "✏️ <bold>Analog thinking</bold> — Sometimes the best ideas start on paper",
      chaosLevel: "Creative Storm"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&h=400&fit=crop&crop=center",
      alt: "Late night coding session",
      caption: "🌙 <bold>3 AM energy</bold> — When the bugs become features",
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
    <section id="workspace-section" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Simplified Header */}
        <div className={`transition-all duration-1000 ease-out mb-16 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            My Workspace
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl">
            Where ideas come to life.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 