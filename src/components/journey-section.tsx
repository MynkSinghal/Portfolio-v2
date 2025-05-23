'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll progress for image reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleBottom = Math.min(windowHeight, windowHeight - (rect.bottom - windowHeight));
      const visibleHeight = Math.min(visibleTop, sectionHeight);
      
      // Convert to progress (0 to 1)
      const progress = Math.max(0, Math.min(1, visibleHeight / (windowHeight * 0.8)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for initial visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate blur amount based on scroll progress
  const blurAmount = Math.max(0, 20 - (scrollProgress * 20));
  const pixelSize = Math.max(1, 8 - (scrollProgress * 7));

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-32 min-h-screen font-dm-mono"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Life Story */}
          <div className={`space-y-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
                style={{ 
                  fontWeight: 500,
                  color: '#33373A'
                }}
              >
                My Real Journey
              </h2>
              
              <div 
                className="w-16 h-0.5 bg-current opacity-30"
                style={{ color: '#51565A' }}
              ></div>
            </div>

            {/* Story Sections */}
            <div className="space-y-16">
              
              {/* Section 1 */}
              <div className={`space-y-6 transition-all duration-800 ease-out ${
                scrollProgress > 0.1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h3 
                  className="text-2xl md:text-3xl font-medium leading-relaxed"
                  style={{ 
                    fontWeight: 500,
                    color: '#33373A'
                  }}
                >
                  I'm just a guy that loves creating things for others.
                </h3>
                <div 
                  className="space-y-4 text-lg md:text-xl leading-relaxed"
                  style={{ 
                    fontWeight: 400,
                    color: '#51565A'
                  }}
                >
                  <p>
                    I started my first company at 13 when I sold dragon ball z tenkaichi budokai 2 in 2009 on ebay.
                  </p>
                  <p>
                    Selling stuff online turned into my high school obsession and I grew that company to $100K in revenue per year by expanding to products like these and these.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className={`space-y-6 transition-all duration-800 ease-out ${
                scrollProgress > 0.3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h3 
                  className="text-2xl md:text-3xl font-medium leading-relaxed"
                  style={{ 
                    fontWeight: 500,
                    color: '#33373A'
                  }}
                >
                  Been making stuff ever since.
                </h3>
                <div 
                  className="space-y-4 text-lg md:text-xl leading-relaxed"
                  style={{ 
                    fontWeight: 400,
                    color: '#51565A'
                  }}
                >
                  <p>
                    Most recently, I was the founder of buildspace — it was the largest school in the world for people working on their own ideas from youtube videos to edm music to companies.
                  </p>
                  <p>
                    During the company we scaled nights & weekends online to over 100,000 students, raised from a16z/yc, constructed a physical campus in sf for those that wanted to go full-time on their ideas, grew content to millions, and built an ai social product to help people find others like themselves trying to build stuff.
                  </p>
                  <p>
                    Worked on the co for five years. But, I ended up closing it down. Here's a{' '}
                    <a 
                      href="#" 
                      className="underline hover:no-underline transition-all duration-200"
                      style={{ color: '#33373A' }}
                    >
                      letter I wrote about it
                    </a>.
                  </p>
                  <p>
                    Buildspace was special. Really special. If you were a fan. Thank you. You changed our lives.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className={`space-y-6 transition-all duration-800 ease-out ${
                scrollProgress > 0.6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h3 
                  className="text-2xl md:text-3xl font-medium leading-relaxed"
                  style={{ 
                    fontWeight: 500,
                    color: '#33373A'
                  }}
                >
                  Did a bunch of stuff before.
                </h3>
                <div 
                  className="space-y-4 text-lg md:text-xl leading-relaxed"
                  style={{ 
                    fontWeight: 400,
                    color: '#51565A'
                  }}
                >
                  <p>
                    Founded an online elementary school called zipschool focused on homeschoolers and grew it to 150,000 kiddos, trained a real time cv model that would coach you in overwatch named visor (we got really big actually, then, blizzard banned us oops), was cto at kanga where we built our own models to recommend gamers content they'd enjoy.
                  </p>
                  <p>
                    Trained my own open-source deep learning models for esports analytics, built random products for league of legends that got to 1m+ users, built a dumb ar menu app that got no where, and built a bunch of other random stupid shit that was meaningless but fun (lol).
                  </p>
                  <p>
                    Some stuff above worked out. Most of it didn't.
                  </p>
                  <p>
                    But, I learned a lot.
                  </p>
                  <p>
                    Sometimes I write about my fuck ups building stuff or of when things went really right! If you want me to hyu when I write. Drop your email below.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Portrait Image */}
          <div className={`lg:sticky lg:top-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Portrait"
                  fill
                  className="object-cover transition-all duration-300 ease-out"
                  style={{
                    filter: `blur(${blurAmount}px)`,
                    imageRendering: pixelSize > 2 ? 'pixelated' : 'auto',
                    transform: `scale(${1 + pixelSize * 0.01})`
                  }}
                  priority
                />
                
                {/* Overlay for additional pixelation effect */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: Math.max(0, 1 - scrollProgress),
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent ${pixelSize}px,
                        rgba(255,255,255,0.1) ${pixelSize}px,
                        rgba(255,255,255,0.1) ${pixelSize * 2}px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent ${pixelSize}px,
                        rgba(255,255,255,0.1) ${pixelSize}px,
                        rgba(255,255,255,0.1) ${pixelSize * 2}px
                      )
                    `
                  }}
                />
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/20 rounded-full h-1 overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
