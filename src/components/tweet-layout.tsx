import Link from "next/link";

interface TweetLayoutProps {
  children: React.ReactNode;
  tweetSlug: string;
  tweetTitle: string;
  publishDate: string;
  author?: string;
}

export default function TweetLayout({
  children,
  tweetSlug,
  tweetTitle,
  publishDate,
  author = "Mayank Singhal",
}: TweetLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16 lg:py-20">
        {/* Back Navigation */}
        <Link
          href="/#tweets"
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
          Back to What I'm Saying
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
            <span className="font-medium">{author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {tweetTitle}
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">{children}</article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex items-center justify-center">
            <Link
              href="/#tweets"
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
              Back to What I'm Saying
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
} 