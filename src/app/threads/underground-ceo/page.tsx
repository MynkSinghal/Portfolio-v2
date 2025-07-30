import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Underground CEO: India's Silent Business Giants | Mayank Singhal",
  description: "India's biggest business moves happen off your feed. Here's why the true empire builders stay invisible.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/underground-ceo",
  },
  openGraph: {
    title: "The Underground CEO: India's Silent Business Giants",
    description: "India's biggest business moves happen off your feed. Here's why the true empire builders stay invisible.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/underground-ceo",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "The Underground CEO: India's Silent Business Giants"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Underground CEO: India's Silent Business Giants",
    description: "India's biggest business moves happen off your feed. Here's why the true empire builders stay invisible.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Business",
    "MSME",
    "Family Business",
    "Entrepreneurship",
    "Business Leadership",
    "Indian Economy",
    "Traditional Business",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 The most powerful CEOs in India?

You've never seen them on LinkedIn.

No posts. No panels. No podcasts.

But they move crores, hire millions & shape the real economy.

Here's why India's real operators stay silent, and win.

(1/n)

💼 They don't go viral.
They go generational.

While tech bros chase likes, India's MSMEs employ 20+ crore people, drive exports, and run 6 crore+ units, all without a tweet.

Real impact doesn't trend. It pays salaries.

(2/n)

🛍️ Your sabzi, shampoo & salary, all powered by people you'll never see post.

Kirana shops = 95% of food & grocery sales.
12 million stores, 10% of GDP - no branding, no fluff.

Just trust, delivery, and "bhaiya kal de dena."

(3/n)

🧾 No CAC, no CRM.
Just "likh do bhaiya."

These stores offer credit to 500 million+ Indians.
No paperwork. No swipe. Just memory and trust.

Faith-tech > Fintech.

(4/n)

👨‍👩‍👧‍👦 Family-run firms = India's industrial skeleton.

75% of GDP today.
Projected to hit 85% by 2047.

Board meetings? Mostly dinner tables.
Growth plan? Next generation.
Playbook? Product + people > PR.

(5/n)

🛠️ While unicorns chase burn & buzz, invisible startups chase cash flow.

No PR agencies.
No valuation peaks.
Just profit, focus, and real demand.

They dominate niches VCs ignore, and quietly scale past them.

(6/n)

🏗️ Legacy isn't loud.
It's layered.

From Marwaris in metals to Sindhis in retail, these communities built billion-dollar empires with zero digital footprint.

No influencers. Just influence.

(7/n)

🤫 Not every builder wants to trend.
Some want to last.

India's silent giants aren't on your feed.
Because they're too busy running the country's economic heart.

Look beyond the noise - that's where power lives.

(8/n)`;

export default function UndergroundCEOThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="underground-ceo"
      title="The Underground CEO: India's Silent Business Giants"
      description="India's biggest business moves happen off your feed. Here's why the true empire builders stay invisible."
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