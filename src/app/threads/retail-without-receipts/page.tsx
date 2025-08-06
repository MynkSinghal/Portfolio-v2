import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Without Receipts: The Weekly Bazaar Magic | Mayank Singhal",
  description: "It's more than just shopping; it's the chaotic, vibrant, and essential social ritual of every Sunday.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/retail-without-receipts",
  },
  openGraph: {
    title: "Retail Without Receipts: The Weekly Bazaar Magic",
    description: "It's more than just shopping; it's the chaotic, vibrant, and essential social ritual of every Sunday.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/retail-without-receipts",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Retail Without Receipts - Weekly Bazaar Culture"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Without Receipts: The Weekly Bazaar Magic",
    description: "It's more than just shopping; it's the chaotic, vibrant, and essential social ritual of every Sunday.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Street Markets",
    "Indian Retail",
    "Weekly Bazaar",
    "Urban Culture",
    "Social Commerce",
    "Community Trade",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🚨 Your 10-min delivery app can't compete with this.

India's most powerful retail engine isn't driven by tech. It runs on eye contact, habit, and yelling "bhaiya theek lagao!"

A thread on the genius of the weekly street bazaar.
(1/n)

What you call chaos is actually a brilliant system.

The Mangal Bazaar or Shani Bazaar isn't just a market. It's a pop-up franchise that rotates through the city.

Maximum reach, zero rent.
Your Q-commerce dark store could never.
(2/n)

In these markets, trust is the only currency.

There's no logo. No receipt. No UX designer.

Your landmark is "thela near the corner." Your brand is the seller's reputation.

This is an economy built on memory and handshakes, not data.
(3/n)

We think bargaining is about saving ₹10.

Wrong. It's social theatre.

A quick dance of power, pride, and connection. You don't just "Add to Cart." You earn the price.

It's a relationship, not just a transaction.
(4/n)

The street market is the great Indian equalizer.

The startup bro buying organic kale stands next to the aunty buying bhindi for the family.

Malls and cafes create class bubbles. Bazaars pop them.
Everyone needs tomatoes.
(5/n)

A key metric urban planners miss:

The safety of a public space in India can be measured by its female footfall.

Weekly bazaars aren't just markets; they are domains where women are the primary actors. They own the space.
(6/n)

To a city planner, a bazaar is an "encroachment."
To us, it's community.

Choosing the bazaar over an app isn't just about price. It's a vote.

A vote for connection over convenience. For human chaos over sterile algorithms.
(7/n)`;

export default function RetailWithoutReceiptsThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="retail-without-receipts"
      title="Retail Without Receipts: The Weekly Bazaar Magic"
      description="It's more than just shopping; it's the chaotic, vibrant, and essential social ritual of every Sunday."
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