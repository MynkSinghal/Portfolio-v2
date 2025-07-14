import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dabbawalas Don't Miss - How they outsmart Silicon Valley's best | Mayank Singhal",
  description: "Think your food app is efficient? Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years - zero tech, zero excuses, zero errors. Here's how they outsmart Silicon Valley's best.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/dabbawalas-dont-miss",
  },
  openGraph: {
    title: "Dabbawalas Don't Miss - How they outsmart Silicon Valley's best",
    description: "Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years - zero tech, zero excuses, zero errors.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/dabbawalas-dont-miss",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Dabbawalas Don't Miss - Mumbai's Efficiency Marvel"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dabbawalas Don't Miss - How they outsmart Silicon Valley's best",
    description: "Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years - zero tech, zero excuses, zero errors.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Mumbai Dabbawalas",
    "Food Delivery",
    "System Efficiency",
    "Trust Network",
    "Operations Excellence",
    "Indian Innovation",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🚨 Think your food app is efficient? Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years - zero tech, zero excuses, zero errors. 

Here's how they outsmart Silicon Valley's best.

(1/n)

💥 While your app is "finding a rider" 

Dabbawalas are halfway across Mumbai, dodging monsoons and traffic.

with a Six Sigma Error rate

(2/n)

🧃 Forget QR codes. Dabbawalas use handwritten codes like "B 5 W 6N2" 

A mental postcode system that beats Google Maps and never crashes. 200,000 tiffins delivered daily

(3/n)

🧠 Harvard and FedEx flew in to study them. Why? 

99.999999% accuracy, ₹500/month flat fee, and most dabbawalas are semi-literate. 

Their "algorithm" is trust, not tech.

(4/n)

🧵 These aren't just lunchboxes - they're love letters, salaries, apology notes. 

Dabbawalas carry food, cash, and secrets and have never lost a customer's trust.

(5/n)

🌊 Floods, riots, terror, COVID —-nothing stopped them. 

Zero strikes in 135 years. 

When the city shut down, they pivoted: restaurant meals, digital delivery, even Flipkart gigs.

(6/n)

🔄 Swiggy and Zomato promise 30-min delivery (with surge fees and scam calls). 

Dabbawalas? Flat subscription, no hidden fees, no "rider is late" - just 200,000 promises kept, every day.

(7/n)

🍔 5,000 men, 400,000 handoffs, 3 hours, zero tech. 

Their "operating system" is human 

and it never crashed.

(8/n)`;

export default function DabbawalasThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="dabbawalas-dont-miss"
      title="Dabbawalas Don't Miss - How they outsmart Silicon Valley's best"
      description="Think your food app is efficient? Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years - zero tech, zero excuses, zero errors."
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