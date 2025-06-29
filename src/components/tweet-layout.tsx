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
  // Structured data for SEO - SocialMediaPosting Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SocialMediaPosting",
    headline: tweetTitle,
    text: tweetTitle, // The tweet content
    author: {
      "@type": "Person",
      name: author,
      url: "https://www.mayanksinghal.tech",
      sameAs: [
        "https://x.com/_Mynkkkk_",
        "https://www.linkedin.com/in/mynkkkk/",
        "https://github.com/MynkSinghal"
      ]
    },
    datePublished: new Date(publishDate).toISOString(),
    dateModified: new Date(publishDate).toISOString(),
    image: "https://www.mayanksinghal.tech/banner.png",
    publisher: {
      "@type": "Person",
      name: "Mayank Singhal",
      url: "https://www.mayanksinghal.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mayanksinghal.tech/images/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mayanksinghal.tech/tweets/${tweetSlug}`
    },
    url: `https://www.mayanksinghal.tech/tweets/${tweetSlug}`,
    keywords: ["tech", "startup", "india", "business", "thoughts"],
    inLanguage: "en-US",
    isAccessibleForFree: true,
    genre: "Social Media",
    audience: {
      "@type": "Audience",
      audienceType: "Developers, Entrepreneurs, Tech Enthusiasts"
    },
    sharedContent: {
      "@type": "CreativeWork",
      name: tweetTitle,
      author: {
        "@type": "Person",
        name: author
      }
    }
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
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
          Back to My Tweets
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
              Back to My Tweets
            </Link>
          </div>
        </footer>
      </div>
    </main>
    </>
  );
} 