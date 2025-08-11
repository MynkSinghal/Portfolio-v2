"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      const xp = Math.min(Math.max(x / rect.width, 0), 1);
      const yp = Math.min(Math.max(y / rect.height, 0), 1);
      el.style.setProperty("--xp", `${xp}`);
      el.style.setProperty("--yp", `${yp}`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div
          ref={navRef}
          className={[
            "liquid-nav mt-3 transition-all duration-500",
            isScrolled ? "shadow-lg border-foreground/10 translate-y-0" : "shadow-none",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="relative h-7 w-7 rounded-xl bg-gradient-to-br from-foreground/90 to-foreground/70 text-white grid place-items-center overflow-hidden">
                <span className="font-bold text-sm tracking-wider">M</span>
                <span className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(80%_60%_at_20%_0%,#fff,transparent)]" />
              </div>
              <span className="text-sm sm:text-base font-semibold tracking-tight">Mayank</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2 rounded-full p-1.5 relative">
              <NavItem href="/" label="Home" />
              <NavItem href="/blog" label="Blogs" />
              <NavItem href="/threads" label="Threads" />
              <NavItem href="/#contact" label="Contact" />
            </nav>

            <div className="flex items-center gap-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
              >
                <span className="absolute -inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0)_40%),linear-gradient(120deg,rgba(0,0,0,0.08),rgba(0,0,0,0)_30%)] opacity-70" aria-hidden />
                <span className="relative">Resume</span>
              </a>
            </div>
          </div>
          {/* Specular lens highlight following cursor */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120px 90px at calc(var(--xp, .5) * 100%) calc(var(--yp, .5) * 100%), rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)",
            }}
          />

          {/* Subtle inner shadow for depth */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[22px]"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.06)",
            }}
          />

          {/* Liquid caustics overlay using SVG filter (distorts highlight for realism) */}
          <svg className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-70" aria-hidden>
            <defs>
              <filter id="liquidGlassFilter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
                <feTurbulence type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="2">
                  <animate attributeName="baseFrequency" dur="18s" values="0.006 0.015;0.012 0.02;0.006 0.015" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="6" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#lgGradient)" filter="url(#liquidGlassFilter)" opacity="0.12" />
            <defs>
              <radialGradient id="lgGradient" cx="50%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/5" />
      <span className="relative">{label}</span>
    </Link>
  );
}
