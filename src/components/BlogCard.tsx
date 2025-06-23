import { BlogPost } from "@/data/blogs";
import Link from "next/link";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={blog.href} className="group block">
      <div className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-full group">
        {/* Cover Image - Fixed Height */}
        <div className="h-48 w-full flex items-center justify-center mb-6 bg-[#f5f5f5] rounded-md overflow-hidden">
          {blog.coverImage ? (
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-24 h-24 rounded-lg bg-[#FFFFF0] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
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

        {/* Content - Fixed Height Structure */}
        <div className="h-44 flex flex-col">
          {/* Author and Read Time - Fixed Height */}
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3 h-6">
            <span className="font-medium">{blog.author}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Title with External Link Arrow - Fixed Height */}
          <div className="flex items-start justify-between gap-3 mb-4 h-12">
            <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-200 flex-grow line-clamp-2">
              {blog.title}
            </h3>
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
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

          {/* Description - Fixed Height */}
          <div className="mb-6 h-12">
            <p className="text-xs text-foreground/70 group-hover:text-foreground/80 transition-colors duration-200 leading-relaxed line-clamp-3">
              {blog.description}
            </p>
          </div>

          {/* Category and Date - Fixed Height */}
          <div className="flex items-center justify-between h-8 mt-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-xs font-medium text-foreground/80">
              {blog.category}
            </div>
            <span className="text-xs text-foreground/50">{blog.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
