import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching Over Classrooms - Let's unpack India's real education engine | Mayank Singhal",
  description: "Lakhs migrate to Kota. Families spend more on tutors than school fees. Let's unpack India's real education engine.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/coaching-over-classrooms",
  },
  openGraph: {
    title: "Coaching Over Classrooms - India's real education engine",
    description: "Lakhs migrate to Kota. Families spend more on tutors than school fees. Let's unpack India's real education engine.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/coaching-over-classrooms",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Coaching Over Classrooms - India's Education System"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Over Classrooms - India's real education engine",
    description: "Lakhs migrate to Kota. Families spend more on tutors than school fees. Let's unpack India's real education engine.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Indian Education",
    "Coaching Centers",
    "Kota",
    "IIT JEE",
    "NEET",
    "Education System",
    "Tutoring",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Indian schools give you marks.

Coaching centers? They give you a chance.

This is why India's parallel education economy — led by Kota & coaching — is bigger than school itself.

(1/n)

India has 1.5 million+ coaching centers.

From IIT to NEET to UPSC to SSC to spoken English.

This isn't "extra help."

This is the main syllabus.

School = attendance.
Coaching = survival.

(2/n)

Each year, over 2.5 lakh students move to Kota, Rajasthan.

They stay in PGs, eat dabbas, and chase AIR ranks.

Study 14 hours a day.

One dream: Crack JEE or NEET.

But also?
Anxiety. Isolation. Even suicides.

(3/n)

Families spend ₹1–4 lakh/year just on coaching.

Some mortgage land, sell gold, or borrow from relatives.

All for one shot at an "entry ticket" — IIT, AIIMS, a future.

This isn't fees.
It's faith.

(4/n)

Ask a Class 11 student:
"Will your school help you crack NEET?"

They'll laugh.

Because even schoolteachers moonlight at coaching classes.

Schools give marks.
Coaching gives results.

(5/n)

In India, clearing JEE or NEET = Status + Security + Escape.

It's not just an exam.
It's an entire family's social elevator.

A 17-year-old carries that weight.

That's why it's not a test.
It's a life gamble.

(6/n)

This isn't a coaching problem.
It's a system problem.

We normalized:
🎯 Rank over knowledge
💯 Tests over curiosity
📈 Fear over growth

The machine works — but for what?

(7/n)

The question isn't "Can kids do it?"

It's:
Why does a ₹6 trillion coaching economy exist on top of schools?

And what does that say about the real education system?

(8/n)`;

export default function CoachingOverClassroomsThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="coaching-over-classrooms"
      title="Coaching Over Classrooms - Let's unpack India's real education engine"
      description="Lakhs migrate to Kota. Families spend more on tutors than school fees. Let's unpack India's real education engine."
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