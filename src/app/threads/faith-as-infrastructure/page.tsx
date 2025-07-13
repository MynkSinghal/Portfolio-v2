import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith as Infrastructure - How Religious Institutions Power India | Mayank Singhal",
  description: "Temples don't just serve God. They serve 100 million Indians — daily. From langars to ₹10 sabjis, India's real welfare isn't run by the state. It's run by faith.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/faith-as-infrastructure",
  },
  openGraph: {
    title: "Faith as Infrastructure - How Religious Institutions Power India",
    description: "Temples don't just serve God. They serve 100 million Indians — daily. From langars to ₹10 sabjis, India's real welfare isn't run by the state. It's run by faith.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/faith-as-infrastructure",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Faith as Infrastructure - Religious Institutions in India"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith as Infrastructure - How Religious Institutions Power India",
    description: "Temples don't just serve God. They serve 100 million Indians — daily. From langars to ₹10 sabjis, India's real welfare isn't run by the state. It's run by faith.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Religious Institutions",
    "Social Welfare",
    "Indian Temples",
    "Community Service",
    "Faith Infrastructure",
    "Public Service",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🛕 Temples don't just serve God.

They serve 100 million Indians — daily.

From langars to ₹10 sabjis, India's real welfare isn't run by the state.

It's run by faith.

(1/n)

The Golden Temple in Amritsar feeds 100,000 people every single day.

No ticket.
No income proof.
No subsidy.

Just stainless steel plates and pure operations.

(2/n)

Gurudwaras became India's emergency kitchens during COVID.

Police, migrant workers, slum dwellers — all fed without a form.

No OTP. No app. Just roti and warmth.

(3/n)

Temples offer water.
Shelter.
Shade.

Sometimes even free medical camps.

They don't call it "service delivery."
They just call it "seva."

(4/n)

Chennai's Amma Canteens serve full meals for ₹10.

Inspired by temple kitchens.

No margin. No upsell. No branding.

Just the belief that food = dignity.

(5/n)

India has no universal meal scheme for adults.

But temples, mosques, churches, and gurudwaras?

They've been running one for centuries.

Decentralized. Local. Human.

(6/n)

Faith institutions don't just preach.

They:
– Feed cities
– Employ workers
– Host relief camps
– Provide mental and social safety

In India, faith is infrastructure.

(7/n)

We always ask: "Why isn't the government doing more?"

But here's the real question:

If a gurudwara can serve 100,000 daily —
what's stopping the state?

(8/n)`;

export default function FaithAsInfrastructureThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="faith-as-infrastructure"
      title="Faith as Infrastructure - How Religious Institutions Power India"
      description="Temples don't just serve God. They serve 100 million Indians — daily. From langars to ₹10 sabjis, India's real welfare isn't run by the state. It's run by faith."
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