import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tired by Design - How Indian Cities Exhaust Their People | Mayank Singhal",
  description: "From traffic to toilets - Indian cities are designed to drain you. Here's how poor urban planning quietly exhausts 1.4 billion people.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/tired-by-design",
  },
  openGraph: {
    title: "Tired by Design - How Indian Cities Exhaust Their People",
    description: "From traffic to toilets - Indian cities are designed to drain you. Here's how poor urban planning quietly exhausts 1.4 billion people.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/tired-by-design",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Tired by Design - Urban Planning in India"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tired by Design - How Indian Cities Exhaust Their People",
    description: "From traffic to toilets - Indian cities are designed to drain you. Here's how poor urban planning quietly exhausts 1.4 billion people.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Urban Planning",
    "Indian Cities",
    "City Design",
    "Public Infrastructure",
    "Urban Fatigue",
    "City Life",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Tired all the time?

It's not just your job.

It's your city.

From traffic to toilets - Indian cities are designed to drain you.

Here's how poor urban planning quietly exhausts 1.4 billion people.

(1/n)

Our cities weren't built for people.

They were built for vehicles.

Try walking in most Indian towns - it's cracked footpaths, honking chaos, and zero safety.

Speed won. Safety lost.

(2/n)

Your 2-hour daily commute?

That's not just time lost.

It's health lost, joy lost, peace lost.

And if you're a woman?
Every ride = risk.

Indian commuting isn't movement. It's mental taxation.

(3/n)

Need a break?
Too bad.

Benches? Rare.

Public toilets? Scarce.

Shade? Only if a tree escaped the axe.

Our cities are built for motion, not pause.

Stillness is punished.

(4/n)

Disabled? Elderly? Pregnant?
Good luck.

No ramps. No rails. No access.

Cities assume strength and youth.

Forget inclusion - they're barely functional.

(5/n)

Poor design isn't cheap.

It costs us:
– More hospital visits
– Fewer work hours
– Lost mobility for women, elders, kids

The real price of planning is what we lose daily.

(6/n)

Look closer.
Some neighborhoods have footbridges, footpaths, flyovers.

Others don't even have drains.

Cities don't serve people equally.

They serve power.

(7/n)

So ask yourself:

What would our cities look like…
if we built them for humans, not traffic?

(8/n)`;

export default function TiredByDesignThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="tired-by-design"
      title="Tired by Design - How Indian Cities Exhaust Their People"
      description="From traffic to toilets - Indian cities are designed to drain you. Here's how poor urban planning quietly exhausts 1.4 billion people."
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