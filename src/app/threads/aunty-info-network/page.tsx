import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aunty Info Network - India's Most Powerful Surveillance System | Mayank Singhal",
  description: "They know rishtas, real estate deals, politics, even police movements - all from chai-time whispers.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/aunty-info-network",
  },
  openGraph: {
    title: "Aunty Info Network - India's Most Powerful Surveillance System",
    description: "They know rishtas, real estate deals, politics, even police movements - all from chai-time whispers.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/aunty-info-network",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Aunty Info Network - India's Social Intelligence System"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aunty Info Network - India's Most Powerful Surveillance System",
    description: "They know rishtas, real estate deals, politics, even police movements - all from chai-time whispers.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Indian Society",
    "Social Networks",
    "Community Gossip",
    "Urban Life",
    "Social Commentary",
    "Indian Culture",
    "Neighborhood Watch",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 The most powerful surveillance system in India? Not tech. Not cops.

It's your neighborhood aunty.

She knows your salary, syllabus, rishta, and secrets - before you do.

Here's how India's OG Intelligence Agency really works

(1/n)

👀 Forget CCTV. She saw you.

You think no one saw you skip the temple?
Wear ripped jeans?
Come home at 10:32pm?

The aunty on the third floor did.

And she already told your mom.

(2/n)

🗣️ Data travels faster than 5G.

Her chai circle is a newsroom.
One "bas suna hai…"
Becomes society-wide news in 30 minutes flat.

No Wi-Fi.
No delay.

Just whispers with 100% delivery rate.

(3/n)

📊 She's your family's social credit score.

Woke up late? Strike 1.
No MBA plan? Strike 2.
Dating someone? Finish.

Aunties don't just collect data,
They shape your entire reputation.

(4/n)

🏠 She moonlights as a real estate analyst.

Buying a flat?
She knows which builder is a scam.
Which floor has drainage issues.
And who fought with the society last week.

No lawyer, no broker, just her memory and mandir gossip.

(5/n)

📈 Her feedback is your KPI.

"How's your son doing?"
is not a question. It's a test.

Her smile = passive aggression.

Her compliments = analytics.

Aunty-verse measures everything: rank, salary, weight, even complexion.

(6/n)

💔 Even heartbreaks get leaked.

Breakup? She knew before your best friend.

Job rejection? She knew before HR.

Rebound? She's watching.

There's no secrets in her zip code.

Only unsent friend requests and collected clues.

(7/n)

⚠️ And still - she's underrated.

We ignore her power, dismiss her talk.

But she's the keeper of legacy, lore, and local intel.

The question isn't whether she's watching.

It's: what's she going to do with what she knows?

(8/n)`;

export default function AuntyInfoNetworkThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="aunty-info-network"
      title="Aunty Info Network - India's Most Powerful Surveillance System"
      description="They know rishtas, real estate deals, politics, even police movements - all from chai-time whispers."
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