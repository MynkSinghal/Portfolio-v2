import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures | Mayank Singhal",
  description: "93% of Indian students can't name more than 7 career options. Not because they're lazy-because nobody ever showed them the map. At 15, you pick Science, Arts, or Commerce blindfolded. India needs 1.4 million career counselors. We have maybe 1 lakh. The system creates 'qualified confusion'-kids know facts, not futures.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/marks-or-misdirection",
  },
  openGraph: {
    title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures",
    description: "93% of Indian students can't name more than 7 career options. India needs 1.4 million career counselors, but we have maybe 1 lakh. The system creates 'qualified confusion'-kids know facts, not futures.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/marks-or-misdirection",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Marks or Misdirection - India's Education System"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures",
    description: "93% of Indian students can't name more than 7 career options. The system creates 'qualified confusion'-kids know facts, not futures.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "India Education",
    "Career Guidance",
    "Student Counseling",
    "Career Options",
    "Indian Schools",
    "Education System",
    "Career Clarity",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Indian schools teach you how to score marks.

But never how to make choices.

This is why so many students are brilliant… and still confused.

Let's unpack the real education gap nobody talks about.

#IndianEducation #CareerGuidance #EducationMatters  #IndiaUntold

(🧵1/n)

🎯 You're 15. You pick Science, Commerce, or Arts.

It feels like a big decision.

But no one tells you what that choice actually unlocks.

You're picking from a menu, without seeing the food.

(2/n)

🧪 Science = Engineering.

That's the default.

Not because every kid loves tech  but because no one shows them options.

Design, biotech, research, policy? Never mentioned.

It's not a stream. It's a funnel.

(3/n)

📊 Commerce = BBA, BCA, MBA.

Ask around and you'll see the pattern.

Because nobody talks about finance, economics, VC, journalism, analytics…

So students follow the crowd.
Not curiosity.

(4/n)

🧭 Career counseling?

Mostly one seminar a year.

400 students. One speaker.

No maps. No mentors. Just marks.

We teach chemistry.

But not the chemistry of choosing.

(5/n)

🧠 Students do ask the right questions:

"What can I do with this subject?"

"Is there a creative option for commerce?"

But schools reward performance, not exploration.

(6/n)

👩‍🏫 What if education meant exposure?

Bring real professionals to school.

Let students shadow careers.

Let them explore options before they're locked into them.

That's how you build clarity, not confusion.

(7/n)

💡 Scoring 95% is great.

But if students graduate without knowing what excites them, what's the point?

Ambition isn't just about marks.

It's about direction.

(8/n)`;

export default function MarksOrMisdirectionTweetPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="marks-or-misdirection"
      title="Marks or Misdirection - When Schools Teach Facts, But Hide The Futures"
      description="93% of Indian students can't name more than 7 career options. Not because they're lazy-because nobody ever showed them the map."
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