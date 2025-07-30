import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghar Ka Khana: The Emotional Currency of Indian Food | Mayank Singhal",
  description: "Swiggy, dabbawalas, tiffins, maa ke haath - India's food story isn't just hunger. It's homesickness.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/ghar-ka-khana",
  },
  openGraph: {
    title: "Ghar Ka Khana: The Emotional Currency of Indian Food",
    description: "Swiggy, dabbawalas, tiffins, maa ke haath - India's food story isn't just hunger. It's homesickness.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/ghar-ka-khana",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Ghar Ka Khana: The Emotional Currency of Indian Food"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghar Ka Khana: The Emotional Currency of Indian Food",
    description: "Swiggy, dabbawalas, tiffins, maa ke haath - India's food story isn't just hunger. It's homesickness.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Food",
    "Home Cooking",
    "Food Culture",
    "Family Traditions",
    "Cultural Identity",
    "Social Commentary",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Ghar ka khana isn't food.

It's the softest form of Indian love wrapped in steel boxes, shared at desks, cooked in silence.

Here's why home food still rules India's heart, habits & hunger.

(1/n)

💔 Moving out doesn't hurt because of rent.

It hurts when lunch stops tasting like home.

You realize:
It wasn't just aloo sabzi.

It was routine, memory, care delivered warm every day.

(2/n)

😵 Mess food isn't just bad.

It's emotionally blank.

No spice memory. No maa logic.

Just a plate full of compromise.

No wonder college kids send food wishlists, not shopping lists, when visiting home.

(3/n)

🚴 Mumbai's dabbawalas = love logistics.
200K dabbas a day.

No tech. No GPS. No mistakes.

What are they really moving?

Not food. But emotional bandwidth.

(4/n)

👥 Indian offices don't bond in breakout rooms.

They bond at the lunch table.

Tiffin swaps. "Yaar, tu le le."

Trust is built one rajma chawal at a time.

Forget team outings. Just bring achaar.

(5/n)

🧂"Maa ke haath ka khana" is love.

But it's also labor.

Only 6% of Indian men cook.

Women do 29x more unpaid food prep.

We glorify the output. But ignore the cost.

(6/n)

📱 Startups are now bottling nostalgia.

Swiggy ads, home-chef apps, and cloud kitchens are selling what homes gave for free: emotional nourishment.

But here's the twist:
Ghar ka khana isn't dying. It's evolving.

(7/n)

🍱 "Home food" isn't about taste.

It's about memory.

Food is the last thing that keeps your hometown alive inside your head.

Every bite = a stored version of love, warmth, and how things used to be.

(8/n)`;

export default function GharKaKhanaThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="ghar-ka-khana"
      title="Ghar Ka Khana: The Emotional Currency of Indian Food"
      description="Swiggy, dabbawalas, tiffins, maa ke haath - India's food story isn't just hunger. It's homesickness."
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