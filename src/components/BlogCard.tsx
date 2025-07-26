"use client";

import { BlogPost } from "@/data/blogs";
import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={blog.href} 
      className="group block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-[#f8f8f8] dark:bg-[#1a1a1a] rounded-xl hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-full border border-foreground/5 overflow-hidden group flex flex-col">
        {/* Accent line that animates on hover */}
        <div 
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/30 via-foreground/20 to-transparent transform origin-left transition-transform duration-500 ease-out ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* Cover Image - Fixed Height */}
        <div className="h-48 w-full overflow-hidden">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-[#FFFFF0] flex items-center justify-center">
              <svg
                className="w-10 h-10 text-foreground/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/10 text-foreground/80">
              {blog.category}
            </span>
            <span className="text-xs text-foreground/50">{blog.date}</span>
          </div>

          {/* Title */}
          <div className="relative mb-3">
            <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-200 line-clamp-2">
              {blog.title}
            </h3>
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-foreground/20 transform origin-left transition-transform duration-500 ease-out ${
              isHovered ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors duration-200 leading-relaxed line-clamp-3 mb-6">
            {blog.description}
          </p>

          {/* Bottom row with read time and arrow */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs text-foreground/50 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
              </svg>
              {blog.readTime}
            </span>
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
