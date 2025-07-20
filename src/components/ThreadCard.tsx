"use client";

import { Thread } from "@/data/threads";
import Link from "next/link";
import { useState } from "react";

interface ThreadCardProps {
  thread: Thread;
}

export default function ThreadCard({ thread }: ThreadCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={thread.href} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-[#f8f8f8] dark:bg-[#1a1a1a] p-6 rounded-xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-[200px] border border-foreground/5 overflow-hidden group">
        {/* Accent line that animates on hover */}
        <div 
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/30 via-foreground/20 to-transparent transform origin-left transition-transform duration-500 ease-out ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* Content Container */}
        <div className="space-y-4">
          {/* Title with animated underline effect */}
          <div className="relative">
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-200 line-clamp-2">
              {thread.title}
            </h3>
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-foreground/20 transform origin-left transition-transform duration-500 ease-out ${
              isHovered ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </div>

          {/* Tagline with style enhancement */}
          <p className="text-base text-foreground/70 group-hover:text-foreground/80 transition-colors duration-200 leading-relaxed italic line-clamp-3">
            {thread.tagline}
          </p>

          {/* Right side arrow that animates on hover */}
          <div className="absolute bottom-6 right-6">
            <svg
              className={`w-5 h-5 text-foreground/40 group-hover:text-foreground transform transition-all duration-300 ${
                isHovered ? 'translate-x-1 -translate-y-1' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 