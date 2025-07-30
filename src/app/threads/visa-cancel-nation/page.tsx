import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Cancel Nation - Why Innocent Indians Are Getting Kicked Out of America | Mayank Singhal",
  description: "A visa. A dream. And a speeding ticket that ruins your life. In Trump's America, even that's enough. Here's how the game changed. And how it's rigged.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/visa-cancel-nation",
  },
  openGraph: {
    title: "Visa Cancel Nation - Why Innocent Indians Are Getting Kicked Out of America",
    description: "A visa. A dream. And a speeding ticket that ruins your life. In Trump's America, even that's enough.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/visa-cancel-nation",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Visa Cancel Nation - Immigration Reality"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Cancel Nation - Why Innocent Indians Are Getting Kicked Out of America",
    description: "A visa. A dream. And a speeding ticket that ruins your life. In Trump's America, even that's enough.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Immigration",
    "H1B Visa",
    "Indian Diaspora",
    "Visa Issues",
    "Immigration Crisis",
    "Student Visa",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🧵Why Innocent Indians Are Getting Kicked Out of America (What Nobody's Telling You)

A visa. A dream.
And a speeding ticket that ruins your life.
In Trump's America, even that's enough.
Here's how the game changed.
And how it's rigged.👇

#Immigration #H1B #IndianDiaspora

(1/n)

America's new rule:
Deport first, ask questions never.

Legal visa holders are being kicked out for old parking fines.

Visa ≠ Safety net anymore.

It's a tightrope.

#ImmigrationCrisis #IndianStudents

(2/n)

Welcome to the "Catch & Revoke" era.

1 traffic stop = ICE attention.

1 police interaction = red flag.

Even if charges are dropped.

You're not safe - you're scanned.

#F1Visa #H1BVisa #USimmigration 

(3/n)

AI is now your immigration officer.

The US govt is using AI to monitor social media, likes, and posts.

Liked a protest post? You're flagged.

Your Instagram = background check.

#SurveillanceState #ImmigrationNews

(4/n)

The mastermind? Stephen Miller.

ICE now has daily arrest quotas:
3,000 people/day.

Legal? Illegal? Doesn't matter.

If you're brown and unlucky, you're a number.

#StephenMiller #ICE #Deportation

(5/n)

Indians are the biggest target:

🇮🇳 33% of foreign students
🇮🇳 72% of H-1B holders
🇮🇳 50% of recent student visa revokes

Translation: You're not invisible. You're the bullseye.

#IndianDiaspora #F1Visa #H1B

(6/n)

Scammers know this.

Fake "immigration officers" are extorting lakhs from Indian students.

Because the fear is real.

And the system makes it easy to exploit.

#StudentVisa #ImmigrationFraud

(7/n)

🎓 The official path:
→ F-1 visa
→ OPT
→ H-1B lottery
→ Green card
But now?

Lost your job? = pack your bags.

Post a tweet? = flagged.

Got pulled over? = deported.

#OPT #H1BLottery #IndianTechies

(8/n)

America's irony: deporting the people who build its future.

• H-1Bs create 2-3 US jobs each
• Indian founders created 1M+ jobs
• Indian immigrants add $300B+ to US GDP

When you Deport builders, You Import decline.

#TechLayoffs #SiliconValley

(9/n)

Survival guide for immigrants:

• Keep ALL documents
• Get a lawyer early
• Don't tie wealth to US real estate
• Build global skills, not just "US skills"
• Backup: 🇨🇦 🇬🇧 🇦🇺 🇮🇳

#ImmigrationTips #SurvivalTactics

(10/n)

So, your move?

Still betting on the American Dream?

Because now it comes with an asterisk:
"Terms and conditions apply"

Knowledge is power.
Community is armor.
Resilience is your visa.

#AmericaDream #VisaReality #IndianStudents

(11/n)`;

export default function VisaCancelNationThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="visa-cancel-nation"
      title="Visa Cancel Nation - Why Innocent Indians Are Getting Kicked Out of America"
      description="A visa. A dream. And a speeding ticket that ruins your life. In Trump's America, even that's enough. Here's how the game changed."
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