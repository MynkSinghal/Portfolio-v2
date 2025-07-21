"use client";

import { getAllBlogs } from "@/data/blogs";
import Link from "next/link";

export default function NotFound() {
  // Get a random blog
  const getRandomBlog = () => {
    const blogs = getAllBlogs();
    if (blogs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * blogs.length);
    return blogs[randomIndex];
  };

  const randomBlog = getRandomBlog();

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Header */}
        <div className="mb-12">
          <div className="text-8xl md:text-9xl font-bold text-foreground/10 mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-foreground/60 mb-2">
            Looks like this page decided to play hide and seek...
          </p>
          
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/"
            className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-200 hover:scale-105 group inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Take me home
          </Link>

          <Link
            href="/threads"
            className="bg-foreground/10 text-foreground/80 px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Go to threads
          </Link>

          {randomBlog && (
            <Link
              href={randomBlog.href}
              className="bg-foreground/10 text-foreground/80 px-6 py-3 rounded-lg font-medium hover:bg-foreground/20 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Read my blogs
            </Link>
          )}
        </div>

        {/* Footer Text */}
        
      </div>
    </main>
  );
}
