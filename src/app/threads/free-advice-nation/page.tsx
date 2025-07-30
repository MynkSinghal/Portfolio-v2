import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Advice Nation: India's Culture of Unsolicited Wisdom | Mayank Singhal",
  description: "You didn't ask. They'll still tell you what to do. Here's why India runs on unsolicited gyaan.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/free-advice-nation",
  },
  openGraph: {
    title: "Free Advice Nation: India's Culture of Unsolicited Wisdom",
    description: "You didn't ask. They'll still tell you what to do. Here's why India runs on unsolicited gyaan.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/free-advice-nation",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Free Advice Nation: India's Culture of Unsolicited Wisdom"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Advice Nation: India's Culture of Unsolicited Wisdom",
    description: "You didn't ask. They'll still tell you what to do. Here's why India runs on unsolicited gyaan.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Culture",
    "Social Commentary",
    "Life Advice",
    "Cultural Insights",
    "Social Behavior",
    "Community Wisdom",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🎯 In India, you don't need a therapist, mentor, or consultant.

You just need to exist.

Because here, everyone's an expert - and they'll advise you whether you want it or not.

Here's why India runs on free advice👇

(1/n)

🎙️ Your barber isn't just cutting your hair.

He's fixing your love life, career, and cholesterol levels.

In India, every service comes with life gyaan, No extra charge.

(2/n)

🫖 Uncle at the tea stall?
Career counselor.

Auto driver?
Stock market analyst.

Local chemist?
Marriage therapist with free paracetamol.

This isn't randomness. It's a social system.

(3/n)

🤔 Why so much advice?

Because here, privacy is optional, but care is mandatory.

People give advice because they feel responsible for you.

Even if you're just buying shampoo.

(4/n)

📚 India's education isn't just textbooks.

It's oral wisdom, passed over cutting chai and paan shops.

Stories, lectures, and thoda unsolicited opinion, that's how we learn.

(5/n)

🤝 We confuse advice with connection.

In small towns, advice is currency.

A way to say:
"I see you."
"I've been there."
"Let me help, even if you didn't ask."

(6/n)

⚖️ But not all advice is equal.

The system has biases.

Older > younger.
Men > women.
Louder > quieter.

Unasked guidance can quickly become unearned authority.

(7/n)

🌟 Still, it fills a gap.

In a country where formal mentorship is rare, informal consultants step in.

Sometimes annoying.
Sometimes useful.

But always - always - present.

(8/n)

🔍 We don't Google "How to fix this."

We ask our barber, our chemist, our cabbie.

And somewhere between the chai and the traffic,
a real insight does land.

That's India's "advice economy."

(9/n)

💫 It's not CRM.
It's not LinkedIn.
It's real human bandwidth, running on nosiness, experience, and emotional impulse.
Chaotic. Kind. Unfiltered.
That's our default mode.

(10/n)`;

export default function FreeAdviceNationThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="free-advice-nation"
      title="Free Advice Nation: India's Culture of Unsolicited Wisdom"
      description="You didn't ask. They'll still tell you what to do. Here's why India runs on unsolicited gyaan."
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