import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word of Mouth - India's Real Job Portal: Your neighbor's WhatsApp, Not LinkedIn | Mayank Singhal",
  description: "LinkedIn isn't India's job portal. Most jobs here start with chai, not a CV. This thread breaks down how trust, not tech, fills 400 million jobs and why your watchman's WhatsApp matters.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/word-of-mouth",
  },
  openGraph: {
    title: "Word of Mouth - India's Real Job Portal",
    description: "LinkedIn isn't India's job portal. Most jobs here start with chai, not a CV. This thread breaks down how trust, not tech, fills 400 million jobs.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/word-of-mouth",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Word of Mouth - India's Job Portal"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word of Mouth - India's Real Job Portal",
    description: "LinkedIn isn't India's job portal. Most jobs here start with chai, not a CV.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "India Jobs",
    "WhatsApp Hiring",
    "Referral Economy",
    "Informal Sector",
    "Trust Network",
    "Indian Employment",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 LinkedIn isn't India's job portal.

Most jobs here start with chai, not a CV.

This thread breaks down how trust, not tech, fills 400 million jobs and why your watchman's WhatsApp matters.

(1/n)

👀 Think LinkedIn is the game?

In India, 85-93% of jobs never touch it.

Hiring happens in living rooms, panwaadi shops, and WhatsApp groups.

If you're not in the loop, you're invisible.

(2/n)

🔄 "Referral beats résumé. Every. Single. Time."

A cook brings a cleaner. The watchman's cousin becomes the new guard.

It's not informal, it's the original Indian hiring app.

(3/n)

💥 400 million+ Indians work outside the "system."
 
Their only interview? "Kaam kaisa karta hai?" over chai.

No job boards, no ATS. Just trust and stories.

(4/n)

💬 WhatsApp groups are India's true HR.
 
"Need maid? Ping the group."

Referrals move faster than any app.

A living, breathing, trust-powered network - no login required.

(5/n)

👩 Women run this economy.

SEWA's 3.2M members, 18 states, zero résumés.

Domestic work is built on society whispers, not job fairs.

Referral isn't just hiring, it's the safety net.

(6/n)

💥 Why do apps fail?

Trust isn't built on ratings.

Speed matters when you need a job tomorrow, not next week.
 
"Kaam dekha hai?" > "degree kya hai?"

The watchman's word is the only background check.

(7/n)

🍔 Formalization is coming: e-Shram, ONDC, new labour codes.

But the hiring style? Still chai, still WhatsApp, still "kaam dekha hai?"

India's future of work is digital, but the soul stays human.

(8/n)`;

export default function WordOfMouthThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="word-of-mouth"
      title="Word of Mouth - India's Real Job Portal: Your neighbor's WhatsApp, Not LinkedIn"
      description="LinkedIn isn't India's job portal. Most jobs here start with chai, not a CV. This thread breaks down how trust, not tech, fills 400 million jobs."
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