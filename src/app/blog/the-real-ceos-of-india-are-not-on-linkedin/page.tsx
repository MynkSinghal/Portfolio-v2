import BlogFeedback from "@/components/blog-feedback";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "👑 The Real CEOs of India Don't Post | Mayank Singhal",
  description:
    "Think India's business titans are all on LinkedIn, dropping wisdom and sharing wins? Here's a reality check: the real empire builders—the ones moving crores, hiring millions, and shaping the economy—are invisible online. Their companies are household names, but their faces? You'll never see them on your feed.",
  openGraph: {
    title: "👑 The Real CEOs of India Don't Post",
    description:
      "Think India's business titans are all on LinkedIn, dropping wisdom and sharing wins? Here's a reality check: the real empire builders—the ones moving crores, hiring millions, and shaping the economy—are invisible online. Their companies are household names, but their faces? You'll never see them on your feed.",
    type: "article",
    publishedTime: "2025-09-03",
    authors: ["Mayank Singhal"],
    images: ["/blog-covers/ceo-of-india.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "👑 The Real CEOs of India Don't Post",
    description:
      "Think India's business titans are all on LinkedIn, dropping wisdom and sharing wins? Here's a reality check: the real empire builders are invisible online.",
    images: ["/blog-covers/ceo-of-india.jpg"],
  },
  keywords: [
    "CEOs",
    "Indian Business",
    "Leadership",
    "Family Business",
    "MSME",
    "Kirana",
    "Entrepreneurship",
    "India",
    "Silent Success",
    "blog",
    "Mayank Singhal",
  ],
};

export default function BlogPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "👑 The Real CEOs of India Don't Post",
    description:
      "Think India's business titans are all on LinkedIn, dropping wisdom and sharing wins? Here's a reality check: the real empire builders—the ones moving crores, hiring millions, and shaping the economy—are invisible online. Their companies are household names, but their faces? You'll never see them on your feed.",
    author: {
      "@type": "Person",
      name: "Mayank Singhal",
    },
    datePublished: "2025-09-03",
    dateModified: "2025-09-03",
    image: "/blog-covers/ceo-of-india.jpg",
    publisher: {
      "@type": "Person",
      name: "Mayank Singhal",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-foreground/5">
            <img
              src="/blog-covers/ceo-of-india.jpg"
              alt="👑 The Real CEOs of India Don't Post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
              <span className="font-medium">Mayank Singhal</span>
              <span>•</span>
              <span>3 min read</span>
              <span>•</span>
              <span>Sep 3, 2025</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              👑 The Real CEOs of India Don't Post
            </h1>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-sm font-medium text-foreground/80 mb-6">
              Leadership & Success
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-base md:text-lg leading-relaxed space-y-6">
              <p>
                Think India's business titans are all on LinkedIn, dropping
                wisdom and sharing wins? <strong>Here's a reality check</strong>
                : the real empire builders—the ones moving crores, hiring
                millions, and shaping the economy—are invisible online.
              </p>

              <p>
                Their companies are household names, but their faces? You'll
                never see them on your feed.
              </p>

              <p>
                If you've ever wondered who's actually running the show (and why
                you've never heard of them), this post is your backstage pass.
              </p>

              <p>
                While the world obsesses over social media clout, India's silent
                operators are building generational wealth in the shadows. By
                the end, you'll know why the country's true business powerhouses
                value substance over status—and how that mindset could change
                your own approach to building, scaling, and sustaining success.
              </p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                💡 Silent Giants: The Hidden Empire
              </h2>

              <p>
                India's business backbone isn't built on viral posts—it's built
                by operators who stay off the grid.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>MSMEs (Micro, Small, and Medium Enterprises):</strong>{" "}
                  Over 6.3 crore strong, employing 20 crore people, and powering
                  nearly half of India's exports.
                </li>
                <li>
                  <strong>Kirana stores:</strong> 12 million+ shops, 10% of GDP,
                  and still 95% of food and grocery sales—run by local legends
                  who'd rather serve than self-promote.
                </li>
                <li>
                  <strong>Family businesses:</strong> 75% of India's GDP comes
                  from family-run firms, projected to hit 85% by 2047.
                </li>
              </ul>

              <p>
                These aren't just small shops—they're neighborhood empires and
                industrial titans, quietly scaling without the noise.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    The loudest voices rarely run the deepest businesses.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                🧠 The Philosophy: Substance Over Status
              </h2>

              <p>
                Why do these operators avoid the limelight? Because{" "}
                <strong>real power doesn't need a platform</strong>.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Relationships &gt; Reach:</strong> In India, trust and
                  reputation are built face-to-face, not through "likes."
                </li>
                <li>
                  <strong>Profits &gt; Publicity:</strong> The focus is on
                  operational excellence, not personal branding.
                </li>
                <li>
                  <strong>Legacy &gt; Hype:</strong> Generational wealth is
                  passed down quietly, not flaunted online.
                </li>
              </ul>

              <p>
                Communities like the Marwaris, Gujaratis, and Sindhis have
                controlled vast swathes of Indian industry for decades—without
                ever chasing followers.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    True influence is measured in impact, not impressions.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                📈 The Kirana Kings: Local, Loyal, Lucrative
              </h2>

              <p>
                Step into any Indian neighborhood and you'll find a kirana store
                that outsells most startups.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Scale:</strong> Some earn ₹2–5 lakh+ monthly, with
                  networks spanning generations.
                </li>
                <li>
                  <strong>Adaptability:</strong> Embracing digital payments and
                  WhatsApp orders—without losing the personal touch.
                </li>
                <li>
                  <strong>Resilience:</strong> Customer spending at kiranas
                  jumped 40% during COVID, while big-box retailers scrambled.
                </li>
              </ul>

              <p>
                These stores thrive because they know their customers, not
                because they know the algorithm.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    The best business model is the one that survives every
                    storm.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                🏗️ Family Fortresses: Generational Wealth, Zero Hype
              </h2>

              <p>
                Think Haldiram's, Bikaji, or any textile giant—multi-crore
                empires run like family kitchens.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>In-house everything:</strong> From manufacturing to
                  decision-making, it's all kept close.
                </li>
                <li>
                  <strong>Speed:</strong> Family meetings replace boardroom
                  bureaucracy.
                </li>
                <li>
                  <strong>Professionalization:</strong> Quietly hiring COOs and
                  experts, but without a PR parade.
                </li>
              </ul>

              <p>
                These businesses scale by focusing on the fundamentals—product,
                people, and process—not by posting updates.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    Lasting success is built in silence, not in status updates.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                🔥 The Invisible Startup Revolution
              </h2>

              <p>
                While unicorns chase headlines, a new breed of "invisible
                startups" is quietly building sustainable, profitable
                businesses.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Revenue-first:</strong> Focused on profits, not just
                  valuations.
                </li>
                <li>
                  <strong>Niche dominance:</strong> Winning in underexplored
                  sectors, away from the VC spotlight.
                </li>
                <li>
                  <strong>Digital minimalism:</strong> Using tech to enhance
                  operations, not to chase clout.
                </li>
              </ul>

              <p>
                As VC funding tightens, founders are rediscovering the power of
                staying under the radar—and thriving.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    When everyone else is shouting, the smartest founders are
                    building.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                🎯 The Real Success Formula: Quiet, Consistent, Relentless
              </h2>

              <p>Here's what India's silent operators have mastered:</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  <strong>Start small, scale smart:</strong> Most major family
                  businesses began as local shops.
                </li>
                <li>
                  <strong>Manage for the long term:</strong> Decisions are made
                  for decades, not quarters.
                </li>
                <li>
                  <strong>Blend tradition and tech:</strong> WhatsApp, digital
                  payments, and e-commerce—adopted only when it actually helps.
                </li>
              </ul>

              <p>
                Their secret? Focus on real customers, real profits, and real
                relationships—everything else is just a distraction.
              </p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>
                  <strong>
                    The most powerful business move is knowing when to stay
                    silent.
                  </strong>
                </p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
                💭 Your Turn: Silent Success Stories
              </h2>

              <p>Who's the most impressive "offline operator" you know?</p>

              <p>
                In a world obsessed with personal brands and viral content,
                India's true business leaders are quietly proving that the most
                sustainable success happens away from the spotlight. They're
                building for generations, not for likes. They're optimizing for
                impact, not impressions.
              </p>

              <p>
                The next time you see a headline about another unicorn CEO's
                latest post, remember: somewhere in India, there's a quiet
                operator moving more money, employing more people, and creating
                more value—and you'll never see them trending.
              </p>

              <hr className="border-foreground/20 my-8" />

              <div className="mt-12">
                <BlogFeedback
                  blogTitle="The Real CEOs of India Don't Post"
                  blogSlug="the-real-ceos-of-india-are-not-on-linkedin"
                />
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
