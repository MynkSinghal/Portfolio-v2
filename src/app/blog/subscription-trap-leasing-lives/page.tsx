import { Metadata } from 'next';
import Link from 'next/link';
import BlogFeedback from '@/components/blog-feedback';

export const metadata: Metadata = {
  title: '🎟️ The Subscription Trap: Are We Leasing Our Lives Away? | Mayank Singhal',
  description: "You don't own it — you just access it… until you stop paying. Discover the hidden costs of the subscription economy and how to make smarter choices.",
  openGraph: {
    title: '🎟️ The Subscription Trap: Are We Leasing Our Lives Away?',
    description: "You don't own it — you just access it… until you stop paying. Discover the hidden costs of the subscription economy and how to make smarter choices.",
    type: 'article',
    publishedTime: '2025-06-04',
    authors: ['Mayank Singhal'],
    images: ['/blog-covers/subscription-trap.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🎟️ The Subscription Trap: Are We Leasing Our Lives Away?',
    description: "You don't own it — you just access it… until you stop paying.",
    images: ['/blog-covers/subscription-trap.jpg'],
  },
  keywords: ['Subscription Economy', 'Digital Life', 'Finance', 'Consumer Psychology', 'Technology', 'blog', 'Mayank Singhal'],
};

export default function BlogPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "🎟️ The Subscription Trap: Are We Leasing Our Lives Away?",
    "description": "You don't own it — you just access it… until you stop paying. Discover the hidden costs of the subscription economy and how to make smarter choices.",
    "author": {
      "@type": "Person",
      "name": "Mayank Singhal"
    },
    "datePublished": "2025-06-04",
    "dateModified": "2025-06-04",
    "image": "/blog-covers/subscription-trap.jpg",
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
              src="/blog-covers/subscription-trap.jpg" 
              alt="🎟️ The Subscription Trap: Are We Leasing Our Lives Away?"
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
              <span>Jun 4, 2025</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              🎟️ The Subscription Trap: Are We Leasing Our Lives Away?
            </h1>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-sm font-medium text-foreground/80 mb-6">
              Finance & Digital Life
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-base md:text-lg leading-relaxed space-y-6">
              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>"You don't own it — you just <em>access</em> it… until you stop paying."</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🪝 What's Happening (And Why You Should Care)</h2>

              <p>From movies to meals to motor vehicles — everything's on a subscription now.<br />
              Sounds convenient, right?</p>

              <p>But here's the catch: what looks like flexibility might just be a slow financial leak.<br />
              This post unpacks the rise of the <em>subscription economy</em> — the good, the bad, and the quietly dangerous.</p>

              <p>By the end, you'll know how to make smarter choices about the services you keep, ditch, or <em>never sign up for in the first place</em>.</p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🔄 From Ownership to Access: A Global Shift</h2>

              <p><strong>Subscriptions are the new standard.</strong><br />
              Instead of buying products outright, we now "rent" them on a monthly loop.</p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>Netflix, Spotify, Amazon Prime — the pioneers of this model didn't just offer content. They changed behavior.</p>
              </blockquote>

              <p>And now?<br />
              It's everywhere: car leases, household items, even printer ink.</p>

              <p><strong>Welcome to life on lease.</strong></p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">💸 What We're Gaining — and Losing</h2>

              <p>Let's break down what's really going on beneath the surface of this shiny new model.</p>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">💰 1. The Illusion of Affordability</h3>

              <p>Subscriptions seem manageable.<br />
              A few hundred rupees here and there don't <em>feel</em> like much.</p>

              <p>But stack them up, and you'll start seeing:</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Liabilities &gt; Assets</strong> — You're paying, but never <em>owning</em>.</li>
                <li><em>Mental accounting</em> tricks your brain into underestimating real costs.</li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>It's not about one subscription. It's about 10 of them silently draining your wallet.</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">💳 2. The Cost of Convenience</h3>

              <p>Forget to pay?<br />
              You don't just lose a movie night — you lose access to <strong>essentials</strong>.</p>

              <p>Even worse? Many companies use <strong>dark patterns</strong> to make cancellations nearly impossible.</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Amazon Prime</strong> makes you click through a maze.</li>
                <li><strong>HP printer ink plans</strong> auto-lock you into monthly purchases — even if you don't need them.</li>
              </ul>

              <p>It's convenience… until it's control.</p>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">🏠 3. The Physical "Rent Trap"</h3>

              <p>Subscriptions have crossed into the real world.</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Water purifier filters</strong> need monthly replacements.</li>
                <li><strong>Car brands</strong> offer rentals with mandatory services attached.</li>
              </ul>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>You're not just paying for the product. You're paying to <em>keep it working</em>.</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">😵 4. Subscription Fatigue Is Real</h3>

              <p>When everything's on a monthly model:</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>You forget what you're subscribed to.</li>
                <li>You feel overwhelmed and digitally cluttered.</li>
                <li>You feel guilty about things you don't use — but still pay for.</li>
              </ul>

              <p>There's even a word for it: <strong>"Subscription Fatigue."</strong></p>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">📉 5. Enshittification: When Services Decline Over Time</h3>

              <p>The more users a digital service gains, the worse the experience gets.</p>

              <p>Why?</p>

              <p>Because companies start <strong>optimizing for revenue</strong> — not users.</p>

              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>Think: more ads, fewer features, higher prices.</p>
              </blockquote>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">🌈 It's Not All Bad (But It <em>Is</em> All Strategic)</h2>

              <p>Let's be fair — not everything about subscriptions is evil.</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>More accessibility:</strong> Cars, software, and services are easier to try.</li>
                <li><strong>Support for creators:</strong> Monthly models give indie writers, musicians, and media companies sustainable income.</li>
                <li><strong>Flexibility:</strong> You don't have to commit forever — you can test and cancel (if they let you).</li>
              </ul>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">💡 So… What Should You Do?</h2>

              <p>It all boils down to <em>awareness</em>.</p>

              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Audit your subscriptions — list them out.</li>
                <li>Cancel what you don't use.</li>
                <li>Be mindful of how much control you're giving away in the name of "convenience."</li>
              </ul>

              <p>Because in the end, the subscription economy reflects a deeper human desire:<br />
              To <em>access</em> more, <em>own</em> less — and avoid the feeling of missing out.</p>

              <hr className="border-foreground/20 my-8" />

              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">✅ Your Turn</h2>

              <p>Pause for a minute.<br />
              Open your phone.<br />
              Check your subscriptions.</p>

              <p>Now ask yourself: <em>Do I really need this one?</em></p>

              <hr className="border-foreground/20 my-8" />

              <h3 className="text-xl font-semibold mb-3 mt-6">💬 I'd love your feedback!</h3>

              <p>Found this breakdown useful? Confused about something?<br />
              Drop your thoughts or suggestions in the comments — your input helps shape better posts ahead.</p>
            </div>
          </article>

          {/* Blog Feedback Section */}
          <div className="mt-12">
            <BlogFeedback 
              blogSlug="subscription-trap-leasing-lives"
              blogTitle="🎟️ The Subscription Trap: Are We Leasing Our Lives Away?"
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
                Published on Jun 4, 2025
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
} 