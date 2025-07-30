import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "When India Watched: The Lost Art of Collective TV Viewing | Mayank Singhal",
  description: "Rewind: The Shows, Ads & Emotions That Once United Indian Living Room",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/when-india-watched",
  },
  openGraph: {
    title: "When India Watched: The Lost Art of Collective TV Viewing",
    description: "Rewind: The Shows, Ads & Emotions That Once United Indian Living Room",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/when-india-watched",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "When India Watched: The Lost Art of Collective TV Viewing"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "When India Watched: The Lost Art of Collective TV Viewing",
    description: "Rewind: The Shows, Ads & Emotions That Once United Indian Living Room",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Television",
    "TV Culture",
    "Nostalgia",
    "Social Commentary",
    "Media Evolution",
    "Cultural Shift",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Before Netflix, India didn't binge-watch.
It waited.
Every Sunday morning, the whole nation paused for a show.

Here's how India's watching habits changed — and what we lost in the process.

(1/n)

📺 The TV wasn't a screen.
It was a shrine.

Families gathered. Neighbours brought stools.
One show = one colony watching together.
Ramayan on Sundays felt like a national festival.

Now? You watch in bed. Alone.

(2/n)

🧒 Cartoons weren't "content."
They were imagination, morality, and magic.

Shaktimaan taught right from wrong.
Shaka Laka Boom Boom made dreams tangible.
Every show felt like a message with meaning.

(3/n)

🎵 Even ads were events.
Washing Powder Nirma. Dhara's jalebi boy. Fevicol. Dairy Milk.

You didn't skip them.
You sang them. You felt them.

Today's 5-sec skippables can't match that emotional grip.

(4/n)

🎤 Reality shows = real emotions.
Indian Idol. KBC. DID.

You didn't just watch.
You voted. You cried. You felt like family.

"SMS karo apne sapne jeetne ke liye"
Now it's: "Next episode in 5 seconds."

(5/n)

📡 Cable killed collectiveness.
DTH gave every room its own remote.

Dad = sports.
Mom = serials.
Kids = cartoons.

And just like that — shared TV time fragmented into solo screen time.

(6/n)

📲 Then came Jio. And OTT.

Suddenly, 1 screen turned into 1B phones.
TV left the living room.
Now it lives in your pocket.

Binge. Alone.
No waiting. No family. No ritual.

(7/n)

👀 TV used to be about togetherness.
Today, it's just convenience.

From "Sab saath baith ke dekhenge"
To "Tu dekh le, mujhe mat bataana spoiler"

We gained access.
But lost connection.

(8/n)

🧠 Content changed.
But so did how we consume.

From:
— Scheduled shows → Infinite scroll
— Joint watching → Solo streams
— Shared emotion → Personalized algorithm

This wasn't just media evolution.
It was a cultural shift.

(9/n)

📚 What we lost:
— The joy of waiting
— The power of ritual
— The warmth of shared emotion
— A generation raised by one story at a time

Now?
We're alone.
Scrolling. Drowning in choice.

(10/n)`;

export default function WhenIndiaWatchedThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="when-india-watched"
      title="When India Watched: The Lost Art of Collective TV Viewing"
      description="Rewind: The Shows, Ads & Emotions That Once United Indian Living Room"
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