import { getAllBlogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import Header from "@/components/header";

export default function AllBlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              href="/#blogs"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              All Blog Posts
            </h1>
            <p className="text-foreground/60 text-lg">
              Thoughts, experiments, and occasional wisdom on technology, business, and life.
            </p>
          </header>

          {/* Grid of Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 