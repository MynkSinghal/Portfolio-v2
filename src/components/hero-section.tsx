"use client";

import { parseText } from "@/lib/text-parser";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - 200 });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative py-12 md:py-16 lg:py-24 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-12 overflow-hidden">
      {/* Parallax auras */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute left-1/2 top-10 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.25] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(25,182,243,0.25), rgba(25,182,243,0)_70%)",
            transform: `translate(-50%, ${Math.min(scrollY * 0.15, 80)}px)`
          }}
        />
        <div
          className="absolute right-[-200px] top-[120px] w-[520px] h-[520px] rounded-full opacity-[0.18] blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(144,97,249,0.25), rgba(144,97,249,0)_70%)",
            transform: `translate(${mouse.x * 0.03}px, ${mouse.y * 0.03}px)`
          }}
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Top-right Resume CTA */}
        <div className="flex justify-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors bg-white/60 backdrop-blur-md border border-foreground/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <span className="absolute -inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0)_40%),linear-gradient(120deg,rgba(0,0,0,0.08),rgba(0,0,0,0)_30%)] opacity-70" aria-hidden />
            <span className="relative">Resume</span>
          </a>
        </div>
        {/* Main Hook - Big and Bold */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-tight flex items-center gap-3 font-libre-caslon">
            Hey, I'm {parseText("<bold>Mayank</bold>")}
            <img
              src="/hi.gif"
              alt="Waving hand"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline-block"
            />
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 font-light italic">
            (yes, another developer who thinks they're different)
          </p>
        </div>

        {/* Punchy Statement */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {parseText("I turn <bold>chaos into cool stuff</bold>")}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl">
            — and somehow make it work
          </p>
        </div>

        {/* Inline primary actions */}
        

        {/* Status Updates */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">
              Currently:
            </span>
            <span className="text-base md:text-lg">
              Chasing the same curiosity I had at 15.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">
              Previously:
            </span>
            <span className="text-base md:text-lg">
              Flipping game coins & Pokémon cards on Discord
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">
              Always:
            </span>
            <span className="text-base md:text-lg">
              Caffeinated and curious
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-8">
          <div className="border-l-2 border-foreground/20 pl-6">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-3">
              {parseText(
                'Computer Science student with hands-on experience in <bold>AI/ML</bold> and <bold>full-stack development</bold>. Building impactful systems using ML, cloud infrastructure, and modern web technologies.',
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
