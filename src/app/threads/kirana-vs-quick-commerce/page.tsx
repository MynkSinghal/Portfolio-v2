import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kirana vs Q-Commerce: The Hidden War of Retail | Mayank Singhal",
  description: "Your local shop is being crushed by pricing tricks and packaging lies. Let's decode what's really going on.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/kirana-vs-quick-commerce",
  },
  openGraph: {
    title: "Kirana vs Q-Commerce: The Hidden War of Retail",
    description: "Your local shop is being crushed by pricing tricks and packaging lies. Let's decode what's really going on.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/kirana-vs-quick-commerce",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Kirana vs Q-Commerce: The Hidden War of Retail"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirana vs Q-Commerce: The Hidden War of Retail",
    description: "Your local shop is being crushed by pricing tricks and packaging lies. Let's decode what's really going on.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Retail",
    "Quick Commerce",
    "Kirana Stores",
    "E-commerce",
    "Local Business",
    "Retail Innovation",
    "Business Strategy",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 You think you're saving ₹60 on Blinkit?

But the peanut butter was never worth ₹300 to begin with.

This thread breaks down how Q-commerce is killing kiranas using psychology, packaging, and power plays.

(1/n)

📊 The Game Has Flipped

Two decades ago, kirana shops were default.

Now, we bulk-buy rice and rakhis on apps not just for speed, but "savings."

But those discounts? Often illusions.

Q-commerce has 1% market share but is eating kiranas alive.

(2/n)

💰 The MRP Scam

You buy a jar for ₹240, thinking you saved ₹60.

But the real MRP was ₹300, Q-commerce relabels it as ₹400, then offers a "deal."

A pricing trick that feels like a win.

But the shopkeeper loses. Every. Single. Time.

(3/n)

🌾 Your kirana lets you smell rice, feel flour, even taste before buying.

Q-commerce gives you "premium" staples but they're often polished, mixed, or repackaged.

Low traceability. Short shelf life.

But wrapped in speed.

(4/n)

🏷️ See a "brand" on your app you've never heard of?

It's not a brand.

It's a white-label owned by the platform.

They set the MRP. Set the margin. Own the supply.

No wholesaler. No kirana.
Just profit.

(5/n)

🤝 Your local shop sources from:
– LOTS Wholesale
– METRO Cash and Carry
– Chandni Chowk
– Anaaj Mandi

These aren't just vendors, they're relationships.

The kirana economy is a web of trust, not just logistics.

(6/n)

🏪 Even supermarkets are hurting.

Delivery fees are real. Expired stock is rising.

And still, Q-commerce thrives, not from better products, but better psychology.

You're being sold an experience, not essentials.

(7/n)

⚖️ Can They Coexist?
Only if the game becomes fair.

Kirana stores are digitizing, joining ONDC, doing home delivery.

But they need more than pity.

They need parity.

(8/n)`;

export default function KiranaVsQuickCommerceThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="kirana-vs-quick-commerce"
      title="Kirana vs Q-Commerce: The Hidden War of Retail"
      description="Your local shop is being crushed by pricing tricks and packaging lies. Let's decode what's really going on."
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