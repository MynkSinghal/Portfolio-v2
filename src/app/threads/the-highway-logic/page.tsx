import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Highway Logic: India's Living, Breathing Roadside Economy | Mayank Singhal",
  description: "India's highways are the country's real lanes. What powers this roadside economy",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/the-highway-logic",
  },
  openGraph: {
    title: "The Highway Logic: India's Living, Breathing Roadside Economy",
    description: "India's highways are the country's real lanes. What powers this roadside economy",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/the-highway-logic",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "The Highway Logic: India's Living, Breathing Roadside Economy"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Highway Logic: India's Living, Breathing Roadside Economy",
    description: "India's highways are the country's real lanes. What powers this roadside economy",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Highways",
    "Dhaba Culture",
    "Trucking Industry",
    "Highway Economy",
    "Infrastructure Development",
    "Social Commentary",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🚚 India's highways aren't just roads they're living, breathing economies.

From dhabas to digital dreams, this is the untold story of how India's highways power its culture, commerce, and chaos.

Buckle up.

(1/n)

🥘 Dhabas are more than pit stops.

They're OG co-working spaces for truckers, serving parathas, gossip, and survival tips since the Mauryan era.

Amrik Sukhdev went from 20 charpoys to ₹100 crore+ a year.

Legacy, but make it scale.

(2/n)

🛠️ India's highways = informal startup incubators.

Kirana stores, tire repair stalls, and local artisans hustle 24/7, serving millions.

No VC funding, just grit and chai.

This is entrepreneurship unfiltered.

(3/n)

🚛 Trucking culture is India's invisible backbone.

3.6 million drivers, 20+ days/month on the road, 99% men.

Low pay, tough lives, zero glam.

Yet, they move 64% of India's freight.

No truckers = no economy.

(4/n)

🇮🇳 vs 🇺🇸:
US highways = shiny, corporate rest stops with WiFi and chain food.

India? Family-run dhabas, social hubs, and deals over chai.

One's formal, one's soulful.

Guess which feels more human?

(5/n)

🚧 Bharatmala Pariyojana: ₹6.92 lakh crore to build 24,800 km of highways.

Each rupee spent = 3x GDP boost.

But the real flex?

Highway "villages" and "nests" that fuse local flavor with modern amenities.

(6/n)

💸 Toll revenues are exploding: ₹64,810 crore in 2024, up 35%.

Some plazas rake in ₹1 crore daily.

Highways are now cash cows, not just concrete.

Where there's traffic, there's money.

(7/n)

📦 India's logistics market = $228B in 2024, 22M+ jobs, 14% of GDP.

But the real magic?

Highways stitch together farmers, artisans, truckers, lifting local economies as much as big business.

(8/n)

⚠️ Modernization = double-edged sword.

Formal plazas threaten to erase dhaba culture, displace small vendors, and sterilize the soul of the highway.

Progress or loss?
Depends who you ask.

(9/n)

🌏 Highways = more than transport.

They're India's open-air marketplaces, community centers, and survival networks.

If we lose the human touch, we lose what makes the journey worth it.

(10/n)`;

export default function HighwayLogicThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="the-highway-logic"
      title="The Highway Logic: India's Living, Breathing Roadside Economy"
      description="India's highways are the country's real lanes. What powers this roadside economy"
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