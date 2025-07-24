import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Silent Suffering: India's Culture of Adjustment | Mayank Singhal",
  description: "From trains to marriages, India survives by adjusting. But what's the cost of this 'skill'?",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/the-silent-suffering",
  },
  openGraph: {
    title: "The Silent Suffering: India's Culture of Adjustment",
    description: "From trains to marriages, India survives by adjusting. But what's the cost of this 'skill'?",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/the-silent-suffering",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "The Silent Suffering: India's Culture of Adjustment"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Silent Suffering: India's Culture of Adjustment",
    description: "From trains to marriages, India survives by adjusting. But what's the cost of this 'skill'?",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Indian Culture",
    "Social Commentary",
    "Mental Health",
    "Cultural Adjustment",
    "Personal Boundaries",
    "Social Norms",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 "Thoda adjust kar lo."
India's most used phrase — and most ignored red flag.
From trains to marriages, jobs to dreams…
We bend till we break.

Here's why India glorifies adjustment — and what it's costing us.

(1/n)

🚂 Overcrowded train?
"Shift thoda."
Stuck in an auto with 8 people?
"Bhaiya, adjust kar lo."

In India, adjustment is a survival skill.
But it's also how discomfort becomes culture.

(2/n)

👨‍👩‍👧‍👦 At home, it's:
"Compromise for the family."
"Don't speak too much."
"Let the elders decide."

We teach kids early:
*Boundaries break harmony.*
*Speaking up = being selfish.*

(3/n)

💼 At work:
Unpaid internship? "Good experience, adjust kar lo."
Toxic boss? "Naukri chhodoge kya?"

Adjustment masks exploitation.
We're sold struggle as a virtue — not a red flag.

(4/n)

💍 In marriages:
Red flags become wedding colors.
"Shaadi ke baad sab adjust ho jaata hai."

But adjust karte-karte, log khud hi kho jaate hain.

(5/n)

🧠 Why do we adjust so much?

• Scarcity mindset
• Fear of conflict
• Desire to please
• Shame around saying *"No"*

Saying "I need space" feels wrong.
Because we weren't taught we deserve it.

(6/n)

⚠️ The real cost?

• Blurry boundaries
• Burnout disguised as responsibility
• Resentment hidden behind smiles
• A culture where comfort feels selfish

We call it flexibility.
But it's often *silent surrender.*

(7/n)

🙅 Not all adjustment is noble.
Sometimes it's just endurance in disguise.
And endurance without choice isn't strength. It's survival.

Saying "no" isn't ego.
It's healing.

(8/n)

🔄 Maybe the real rebellion in India isn't noise.
It's refusal.
Refusing to adjust to broken systems, bad behavior, and thankless sacrifice.

Not because we're rude.
Because we're *done breaking to fit in.*

(9/n)`;

export default function SilentSufferingThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="the-silent-suffering"
      title="The Silent Suffering: India's Culture of Adjustment"
      description="From trains to marriages, India survives by adjusting. But what's the cost of this 'skill'?"
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