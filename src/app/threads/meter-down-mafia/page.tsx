import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meter Down Mafia - Why the Meter Down Mafia still owns Mumbai's nostalgia | Mayank Singhal",
  description: "Mumbai's Kaali Peeli taxis didn't need GPS, apps, or a startup pitch deck. They ran the city with pure memory, street hacks, and swagger. Here's why the Meter Down Mafia still owns Mumbai's nostalgia.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/meter-down-mafia",
  },
  openGraph: {
    title: "Meter Down Mafia - Why the Meter Down Mafia still owns Mumbai's nostalgia",
    description: "Mumbai's Kaali Peeli taxis didn't need GPS, apps, or a startup pitch deck. They ran the city with pure memory, street hacks, and swagger.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/meter-down-mafia",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Meter Down Mafia - Mumbai Taxi Culture"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meter Down Mafia - Why the Meter Down Mafia still owns Mumbai's nostalgia",
    description: "Mumbai's Kaali Peeli taxis didn't need GPS, apps, or a startup pitch deck. They ran the city with pure memory, street hacks, and swagger.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Mumbai Taxis",
    "Kaali Peeli",
    "Mumbai Culture",
    "Transport",
    "Nostalgia",
    "Street Smart",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `Mumbai's Kaali Peeli taxis didn't need GPS, apps, or a startup pitch deck.

They ran the city with pure memory, street hacks, and swagger.

Here's why the Meter Down Mafia still owns Mumbai's nostalgia.

(1/n)

"There's an app for that" is cute - until you're stuck in a Mumbai jam.

Kaali Peeli drivers were Google Maps before Google was a thing.

Real wisdom > algorithm.

(2/n)

The Premier Padmini wasn't just a car.

It was Mumbai's unofficial mascot - tough, compact, and everywhere.

Sixty-three thousand strong.

Yellow up top for visibility, black below for battle scars.

(3/n)

Step into a Kaali Peeli: dashboard gods, ceiling art, and rear-window philosophy.

Each cab was a rolling confession box - part shrine, part microblog.

"Love is poison." "Don't touch me."

Mumbai's original Twitter.

(4/n)

These drivers weren't just hustlers-they were legends.

Abdul Kareem, the last Padmini king.

Sarika, Mumbai's first woman cabbie.

Mohammad, who graduated college with his son - while still driving.

(5/n)

But, The fall was brutal.

Rules, CNG mandates, 20-year bans.

Then came Uber and Ola - offering AC and cashless rides.

But you can't code street wisdom.

(6/n)

Even now, at airports and stations, old-school taxis still win when it matters.

No app will ever play your favorite Kishore Kumar song at 2AM or know the shortcut past the chaos.

(7/n)

Could you survive Mumbai without a map?

What's your wildest taxi story or shortcut Google can't find?

Drop it below-let's see which hustler hacks still live on.

(8/n)`;

export default function MeterDownMafiaThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="meter-down-mafia"
      title="Meter Down Mafia - Why the Meter Down Mafia still owns Mumbai's nostalgia"
      description="Mumbai's Kaali Peeli taxis didn't need GPS, apps, or a startup pitch deck. They ran the city with pure memory, street hacks, and swagger."
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