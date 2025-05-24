'use client';

import { useState, useEffect } from 'react';
import { parseText } from '@/lib/text-parser';

export default function WorkspaceSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Workspace images with personality-driven captions
  const workspaceImages = [
    {
      id: 1,
      url: "/images/workspace/setup-1.png",
      alt: "My workspace setup",
      
      subcaption: "Dual monitors, mechanical keyboard, and enough RGB"
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
    <section id="workspace-section" className="py-16 md:py-20 lg:py-28 pt-8 md:pt-10 lg:pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Simplified Header */}
        <div className={`transition-all duration-1000 ease-out mb-16 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight">
              My Setup
            </h2>
            <p className="text-base text-foreground/60 italic">
              (Pixels, passion, and lots of Ctrl+Z)
            </p>
          </div>

          
        </div>

        {/* Image Grid */}
        <div className="flex justify-center">
          {workspaceImages.map((image, index) => (
            <div 
              key={image.id}
              className={`transition-all duration-700 ease-out max-w-3xl w-full ${
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out filter grayscale"
                    loading="lazy"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-6 text-center">
                  
                  
                  <p className="text-sm text-foreground/60 italic">
                    {image.subcaption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 