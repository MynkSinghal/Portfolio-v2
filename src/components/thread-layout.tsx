import Footer from "./footer";
import Link from "next/link";

interface ThreadLayoutProps {
  threadSlug: string;
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ThreadLayout({
  threadSlug,
  children,
  title,
  description,
}: ThreadLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: "Mayank Singhal",
    },
    datePublished: "2024-01-01",
    "@id": `https://www.mayanksinghal.tech/threads/${threadSlug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mayanksinghal.tech/threads/${threadSlug}`,
    },
    url: `https://www.mayanksinghal.tech/threads/${threadSlug}`,
    publisher: {
      "@type": "Person",
      name: "Mayank Singhal",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              href="/#threads"
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
              Back to My Threads
            </Link>
          </div>

          {/* Thread Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <span className="font-medium">Mayank Singhal</span>
            </div>
          </header>

          {/* Thread Content */}
          <div className="space-y-8">
            {children}
          </div>

          {/* Bottom navigation */}
          <div className="mt-16 pt-8 border-t border-foreground/10">
            <Link
              href="/#threads"
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
              Back to My Threads
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 