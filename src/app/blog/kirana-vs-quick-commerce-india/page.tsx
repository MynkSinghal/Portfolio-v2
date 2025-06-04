import { Metadata } from 'next';
import Link from 'next/link';
import BlogFeedback from '@/components/blog-feedback';

export const metadata: Metadata = {
  title: '🏪 Kirana vs Quick Commerce: The Battle for India\'s Retail Soul | Mayank Singhal',
  description: "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR. This isn't just competition—it's a transformation of how India shops.",
  openGraph: {
    title: '🏪 Kirana vs Quick Commerce: The Battle for India\'s Retail Soul',
    description: "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR. This isn't just competition—it's a transformation of how India shops.",
    type: 'article',
    publishedTime: '2025-06-11',
    authors: ['Mayank Singhal'],
    images: ['/blog-covers/kirana-quick-commerce.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🏪 Kirana vs Quick Commerce: The Battle for India\'s Retail Soul',
    description: "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR.",
    images: ['/blog-covers/kirana-quick-commerce.jpg'],
  },
  keywords: ['Kirana Stores', 'Quick Commerce', 'Indian Retail', 'ONDC', 'Digital Transformation', 'blog', 'Mayank Singhal'],
};

export default function BlogPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul",
    "description": "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR. This isn't just competition—it's a transformation of how India shops.",
    "author": {
      "@type": "Person",
      "name": "Mayank Singhal"
    },
    "datePublished": "2025-06-11",
    "dateModified": "2025-06-11",
    "image": "/blog-covers/kirana-quick-commerce.jpg",
    "publisher": {
      "@type": "Person",
      "name": "Mayank Singhal"
    }
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          {/* Cover Image */}
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-foreground/5">
            <img 
              src="/blog-covers/kirana-quick-commerce.jpg" 
              alt="🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
              <span className="font-medium">Mayank Singhal</span>
              <span>•</span>
              <span>4 min read</span>
              <span>•</span>
              <span>Jun 11, 2025</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul
            </h1>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-sm font-medium text-foreground/80 mb-6">
              Indian Retail & Commerce
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-base md:text-lg leading-relaxed space-y-6">
              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>"Quick commerce... not merely a temporary trend but a structural transformation of India's retail ecosystem."</p>
              </blockquote>

              <p>
                In one year, approximately <strong>200,000 kirana stores</strong> shut down across India. Meanwhile, quick commerce is exploding with a <strong>48% CAGR growth rate</strong> and <em>74% growth expected in 2024 alone</em>.
              </p>

              <p>
                This isn't just about convenience vs tradition. It's about the future of how 1.4 billion Indians shop, work, and live. By the end of this post, you'll understand what's really happening beneath the surface of India's retail revolution.
              </p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">📊 The Numbers Don't Lie: A Retail Earthquake</h2>

              <p>Let's start with the reality check:</p>

              <p><strong>Kirana Store Market Share:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>2018: <strong>95%</strong> market share</li>
                <li>2023: <strong>92.6%</strong> market share</li>
                <li>2028 projection: <strong>88.9%</strong> market share</li>
              </ul>

              <p><strong>Quick Commerce Growth:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Growing at <strong>48% CAGR (2023–2028)</strong></li>
                <li><strong>74% growth expected in 2024</strong></li>
                <li>Expected to hit <strong>$40 billion by 2030</strong></li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>This indicates a clear consumer preference shift toward digital-first, convenience-based retailing.</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🗺️ The Geography of Disruption</h2>

              <p>The <em>All India Consumer Products Distributors Federation (AICPDF)</em> reports massive displacement:</p>

              <p><strong>Store Closures by Region:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Metros:</strong> 45% of closures</li>
                <li><strong>Tier 1 cities:</strong> 30% of closures</li>
                <li><strong>Tier 2/3 towns:</strong> 25% of closures</li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>"This isn't just competition—it's an existential threat for kirana retailers."</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">💸 The Customer Exodus: Following the Money</h2>

              <p>The numbers reveal a behavioral shift that's hard to ignore:</p>

              <p><strong>Customer Migration Patterns:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>46%</strong> of quick commerce users reduced kirana purchases</li>
                <li><strong>82%</strong> shifted at least <strong>25% of their kirana shopping</strong> online</li>
                <li><strong>5%</strong> completely abandoned kiranas</li>
              </ul>

              <p><strong>Financial Impact:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>~$1.28 billion</strong> in kirana sales expected to shift to quick commerce in 2024</li>
                <li>Kirana foot traffic dropped by <strong>20–25%</strong> in many regions</li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">📉 The Margin Squeeze: Why Kiranas Can't Compete on Price</h2>

              <p>Here's where the math gets brutal:</p>

              <p><strong>Kirana Profit Margins:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Independent stores: <strong>1–4%</strong> margins</li>
                <li>Larger kirana chains: <strong>~5%</strong> margins</li>
                <li>Industry average: <strong>1–3%</strong></li>
              </ul>

              <p><strong>Quick Commerce Discount Power:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Platforms like Zepto and Instamart offer <strong>20–42% discounts</strong></li>
                <li>Example: ₹850 shampoo sold for ₹530</li>
                <li>Kiranas simply can't match this without bleeding money</li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">⚡ What Consumers Actually Gain</h2>

              <p>Let's be fair—quick commerce isn't just hype. Here's what's driving adoption:</p>

              <p><strong>Speed Revolution:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Delivery in <strong>10–20 minutes</strong> has redefined "essential shopping"</li>
                <li><strong>24/7 service</strong> availability</li>
                <li>Pandemic-induced digital trust has made this the new standard</li>
              </ul>

              <p><strong>Selection & Value:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Most platforms offer <strong>~10,000 curated SKUs</strong></li>
                <li><strong>66%</strong> of users see better value due to exclusive deals</li>
                <li><strong>53%</strong> of users place <strong>5+ orders/month</strong></li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🏥 The Human Cost: More Than Just Numbers</h2>

              <p>Behind every closure statistic is a human story:</p>

              <p><strong>Employment Impact:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>India has <strong>13 million kirana stores</strong>—a crucial employment source</li>
                <li>Closures impact owners, employees, and local micro-economies</li>
                <li>Loss of informal credit systems and personalized service</li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>Kiranas often provide cultural familiarity and community trust—intangibles that platforms can't replicate.</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🛠️ The Kirana Survival Blueprint</h2>

              <p>But this isn't a death sentence. Smart kiranas are fighting back:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">💡 Going Digital with ONDC</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>The <strong>Open Network for Digital Commerce</strong> helps kiranas reach customers directly</li>
                <li>Government-backed initiative projecting <strong>$340B in digital consumption by 2030</strong></li>
                <li>Platforms like <strong>KiranaPro</strong> enable digital transformation</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">🧍‍♂️ Personalization at Scale</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Tools like <strong>Kiko Live</strong> for real-time customer chats and video calls</li>
                <li>Emphasizing face-to-face trust and community relationships</li>
                <li>Custom ordering and recipe help services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">🔄 Hybrid "Phygital" Models</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Multi-channel retail:</strong> WhatsApp orders + home delivery + storefronts</li>
                <li>Acting as <strong>micro-warehouses</strong> while staying community-anchored</li>
                <li>Supplier pooling with nearby kiranas for better margins</li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">⚖️ Policy Response: Leveling the Playing Field</h2>

              <p>The government is taking notice:</p>

              <p><strong>CCI Investigation:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Competition Commission of India</strong> probing platforms for:</li>
                <li>Predatory pricing and below-cost selling</li>
                <li>Exclusive FMCG tie-ups that hurt competition</li>
              </ul>

              <p><strong>Policy Proposals:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>AICPDF pushing for a <strong>Digital Competition Bill</strong></li>
                <li>Simplified tax rules for kiranas</li>
                <li>Financial aid for digital transformation</li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🌐 ONDC: The Democratic Digital Revolution</h2>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>"The future lies in open, interoperable, inclusive platforms." — T. Koshy, ONDC CEO</p>
              </blockquote>

              <p>ONDC represents a fundamental shift:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Eliminates monopolistic gatekeepers</li>
                <li>Any kirana can join, sell, and thrive online</li>
                <li>Aligns with PM Modi's vision of <strong>"tech for all, not tech for the few"</strong></li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🤝 The Path Forward: Coexistence, Not Conquest</h2>

              <p>The future isn't about choosing sides—it's about building bridges:</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Yes,</strong> kirana closures are real and concerning</li>
                <li><strong>Yes,</strong> digital adoption is essential for survival</li>
                <li><strong>But</strong> the answer isn't either-or—it's both-and</li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>"India's future retail model should combine tech's efficiency with kiranas' humanity."</p>
              </blockquote>

              <p>The real challenge? Balancing speed, tech, and pricing with <strong>community, jobs, and trust</strong>.</p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">💬 What's Your Take?</h2>

              <p>
                This transformation affects all of us—as consumers, as community members, as Indians building the future of commerce.
              </p>

              <p>
                Do you think kiranas and quick commerce can coexist? Or is one bound to replace the other? Share your thoughts below—your perspective shapes how we understand this retail revolution.
              </p>
            </div>
          </article>

          {/* Blog Feedback Section */}
          <div className="mt-12">
            <BlogFeedback 
              blogSlug="kirana-vs-quick-commerce-india"
              blogTitle="🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul"
            />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </Link>
              
              <div className="text-sm text-foreground/50">
                Published on Jun 11, 2025
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
} 