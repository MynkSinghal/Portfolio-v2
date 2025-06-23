import BlogFeedback from "@/components/blog-feedback";
import Link from "next/link";

interface BlogLayoutProps {
  children: React.ReactNode;
  blogSlug: string;
  blogTitle: string;
  publishDate: string;
  coverImage?: string;
  author?: string;
  readTime?: string;
  category?: string;
}

export default function BlogLayout({
  children,
  blogSlug,
  blogTitle,
  publishDate,
  coverImage,
  author = "Mayank Singhal",
  readTime = "8 min read",
  category,
}: BlogLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16 lg:py-20">
        {/* Back Navigation */}
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 group"
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
              d="M19 12H5M12 19l-7-7 7-7"
            />
          </svg>
          Back to Blogs
        </Link>

        {/* Cover Image */}
        {coverImage && (
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-foreground/5">
            <img
              src={coverImage}
              alt={blogTitle}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
            <span className="font-medium">{author}</span>
            <span>•</span>
            <span>{readTime}</span>
            <span>•</span>
            <span>{publishDate}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {blogTitle}
          </h1>

          {category && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-sm font-medium text-foreground/80 mb-6">
              {category}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">{children}</article>

        {/* Blog Feedback Section */}
        <div className="mt-12">
          <BlogFeedback blogSlug={blogSlug} blogTitle={blogTitle} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex items-center justify-between">
            <Link
              href="/#blogs"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
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
                  d="M19 12H5M12 19l-7-7 7-7"
                />
              </svg>
              Back to Blogs
            </Link>

            <div className="text-sm text-foreground/50">
              Published on {publishDate}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
