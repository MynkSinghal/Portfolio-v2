import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chai Beats Starbucks - How authenticity is crushing premium, one cup at a time | Mayank Singhal",
  description: "Starbucks is losing in India — not to another global brand, but to the humble ₹10 chai on every street corner. This thread breaks down how authenticity is crushing premium, one cup at a time.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/chai-beats-starbucks",
  },
  openGraph: {
    title: "Chai Beats Starbucks - How authenticity is crushing premium",
    description: "Starbucks is losing in India — not to another global brand, but to the humble ₹10 chai on every street corner.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/chai-beats-starbucks",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Chai Beats Starbucks - India's Tea Culture"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chai Beats Starbucks - How authenticity is crushing premium",
    description: "Starbucks is losing in India — not to another global brand, but to the humble ₹10 chai on every street corner.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Chai Culture",
    "Starbucks India",
    "Street Food",
    "Local vs Global",
    "Indian Business",
    "Authentic Brands",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Starbucks is losing in India — not to another global brand, but to the humble ₹10 chai on every street corner.

This thread breaks down how authenticity is crushing premium, one cup at a time.

(1/n)

💥 India drinks 1.2 billion kg of tea a year — 13x more than coffee.

2 million+ chai stalls vs 479 Starbucks.

99.9% of the market is unorganized, hyper-profitable, and VC-free.

Try scaling that with a pitch deck.

(2/n)

🛠️ Price hack: Tapri chai at ₹10 vs Starbucks latte at ₹300+.

That's a 30x markup for some foam and WiFi.

The chaiwala's real edge?

Zero rent, no menu engineering, and margins that laugh at recessions.

(3/n)

🧠 Trust > Trendy.

Your chai wale bhaiya knows your order, your mood, your story.

67% of Indians trust local businesses more than chains.

Starbucks has loyalty points. Tapris have actual loyalty.

(4/n)

🎭 Gen Z was supposed to be Starbucks' golden ticket.
 
But brand fatigue is real.
"Nukkad chai is cool again."

₹15 chai = better convos, real connections, zero filters.
 
Instagrammable is out, authenticity is in.

(5/n)

🔍 Global chains can't hack ritual.

Chai is India's social glue — a handshake, a pause button, a daily habit.

Starbucks is still fighting for market share (and losing money).

The chaiwala? Profitable since before your dad was born.

(6/n)

💥 Real estate hack:
 
Footpath stalls pay a tiny municipal fee.

Starbucks? Try ₹6 lakh/month in rent at a fancy mall.

Sometimes the best business address is a street corner.

(7/n)

🍔 Even "premium" chai brands like Chaayos and Chai Sutta Bar win by selling nostalgia, not just new blends.

You can package chai, but you still have to sell the feeling.

Authenticity > aesthetics, every single day.

(8/n)`;

export default function ChaiBeatsStarbucksThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="chai-beats-starbucks"
      title="Chai Beats Starbucks - How authenticity is crushing premium, one cup at a time"
      description="Starbucks is losing in India — not to another global brand, but to the humble ₹10 chai on every street corner."
    >
      {threads.map((thread, index) => (
        <ThreadCard
          key={thread.threadNumber}
          content={thread.content}
          threadNumber={thread.threadNumber}
          isLast={index === threads.length - 1}
        />
      ))}
    </ThreadLayout>
  );
} 