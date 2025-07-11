import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pop Up Megacity - Kumbh Mela's High-Tech Urban Miracle | Mayank Singhal",
  description: "India builds a megacity... then deletes it. Kumbh Mela isn't just a religious event — it's the world's largest pop-up city. From AI surveillance to zero discharge sanitation — here's a masterclass in temporary urbanism.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/pop-up-megacity",
  },
  openGraph: {
    title: "Pop Up Megacity - Kumbh Mela's High-Tech Urban Miracle",
    description: "India builds a megacity... then deletes it. Kumbh Mela isn't just a religious event — it's the world's largest pop-up city.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/pop-up-megacity",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Pop Up Megacity - Kumbh Mela 2025"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pop Up Megacity - Kumbh Mela's High-Tech Urban Miracle",
    description: "India builds a megacity... then deletes it. Kumbh Mela isn't just a religious event — it's the world's largest pop-up city.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Kumbh Mela",
    "Urban Planning",
    "Smart Cities",
    "Temporary Cities",
    "Indian Infrastructure",
    "Religious Events",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 India builds a megacity... then deletes it.
Kumbh Mela isn't just a religious event — it's the world's largest pop-up city.
From AI surveillance to zero discharge sanitation — here's a masterclass in temporary urbanism.
(1/n)

💥 400 million people. 45 days. 40 sq. km.
The 2025 Maha Kumbh in Prayagraj builds a city larger than most countries.
Divided into 25 sectors with water, power, roads, hospitals — all temporary.
(2/n)

🏕️ 160,000+ tents.
From dorm beds to luxury suites.
Built on modular design.
Add 400 km of roads, 30 pontoon bridges, 56,000 taps, and 1,270 km of water pipelines.
All built — and removed — in months.
(3/n)

🚽 150,000 toilets.
650 metric tonnes of waste/day.
Zero waste into the river.
6 sewage treatment plants using ISRO + BARC tech.
This is one of the cleanest mass gatherings in history.
(4/n)

📸 2,750 CCTV cameras.
250 with AI: face recognition, heat maps, predictive alerts.
20+ surveillance drones.
Crowd control runs on real-time AI dashboards.
India is quietly innovating public tech at scale.
(5/n)

🚆 17,152 trains ran for Kumbh.
Including 7,667 special trains.
9 upgraded railway stations.
Info in 12–23 languages.
Kumbh moves people like a nation mobilizing for war — except it's peaceful faith.
(6/n)

🧼 233 Water ATMs give free RO water 24/7.
Digital UPI payments accepted by vendors selling neem twigs, food, and Ganga jal.
It's not low-tech spirituality.
It's hybrid faith-tech capitalism.
(7/n)

💰 ₹2.8 trillion in economic impact.
1.2 million jobs.
150% revenue boost for local shops.
From ride operators to food stalls — this pop-up city powers a micro-economy overnight.
(8/n)

📜 Rituals run on precision.
13 Akharas.
12 km of ghats.
Holy dips on astrologically calculated days.
The Kumbh is a live OS of religion, tradition, and time-tested human logistics.
(9/n)

🏗️ The world is watching.
UNESCO calls it a cultural marvel.
Urban planners see it as a masterclass in "ephemeral urbanism."
Kumbh teaches us: Cities don't need to be permanent to be powerful.
(10/n)`;

export default function PopUpMegacityThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="pop-up-megacity"
      title="Pop Up Megacity - Kumbh Mela's High-Tech Urban Miracle"
      description="India builds a megacity... then deletes it. Kumbh Mela isn't just a religious event — it's the world's largest pop-up city. From AI surveillance to zero discharge sanitation — here's a masterclass in temporary urbanism."
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