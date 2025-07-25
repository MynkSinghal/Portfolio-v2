import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Queue Logic: Why We Never Really Stand in Line | Mayank Singhal",
  description: "What looks like chaos is actually choreography. Let's decode the hidden logic behind every Indian queue.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/indian-queue-logic",
  },
  openGraph: {
    title: "Indian Queue Logic: Why We Never Really Stand in Line",
    description: "What looks like chaos is actually choreography. Let's decode the hidden logic behind every Indian queue.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/indian-queue-logic",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Indian Queue Logic: The Hidden System Behind India's Lines"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Queue Logic: Why We Never Really Stand in Line",
    description: "What looks like chaos is actually choreography. Let's decode the hidden logic behind every Indian queue.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Indian Culture",
    "Social Behavior",
    "Queue Psychology",
    "Urban Life",
    "Social Commentary",
    "Indian Society",
    "Cultural Analysis",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🧵 Indian Queue Logic: Why We Never Really "Stand in Line"

It's not disorder. It's dynamic optimization.

A live-action puzzle where space, urgency, and hierarchy collide.

Let's decode the hidden system behind India's "lines."

(1/n)

🔄 In India, queues aren't lines.

They're flows - constantly shifting based on urgency, awareness, and instinct.

You don't stand still.

You calculate.
You adjust.
You survive.

(2/n)

⚡ When things feel scarce-

- Train tickets
- Temple darshan
- Sale at Big Bazaar

Patience feels dangerous.

So the elbow economy takes over.

You don't wait. You edge in.

(3/n)

🗣️ What the West calls "line-cutting"…

We call:
"Bas poochhne aaya tha"
"Uncle mujhe pehle jana hai"
"Just two minutes, bhaiya!"

It's not rude.

It's tactical.

You're negotiating access in real time.

(4/n)

👥 Queues in India are governed by entitlement, not order.

Age. Authority. Locality.

Someone always knows someone.

There's no system stronger than:

"Mere bhai ka dost hai andar."

(5/n)

🎭 This isn't chaos.
It's choreographed crowdwork.

Each person is calculating:
🧠 Who's distracted?
👀 Can I slip through?
👣 How close is too close?

It's human Tetris and everyone's playing.

(6/n)

↔️ Not all queues are vertical.

Some are horizontal surges.

Boarding a bus?
Grabbing prasad?

It's not "next", it's "nearest."

Claim your space.
Or lose your chance.

(7/n)

💻 Even tech didn't fix it.

IRCTC? Mash refresh.
Passport Seva? Book at 2 AM.
WhatsApp deliveries? "Bhaiya bas ek dal dena."

Digital India still queues like Analog India,
just with faster fingers.

(8/n)

🎯 So no, we don't "stand in line."

We improvise.
We adapt.
We optimize.

Our queues don't follow rules.

They reflect realities.

(9/n)`;

export default function IndianQueueLogicThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="indian-queue-logic"
      title="Indian Queue Logic: Why We Never Really Stand in Line"
      description="What looks like chaos is actually choreography. Let's decode the hidden logic behind every Indian queue."
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