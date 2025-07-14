import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Unpaid Economy - The most efficient, overlooked engine of the Indian economy | Mayank Singhal",
  description: "She doesn't earn. But without her, nothing runs. India's economy depends on an invisible workforce — housewives. Here's how unpaid labor keeps the country moving.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/the-unpaid-economy",
  },
  openGraph: {
    title: "The Unpaid Economy - The most efficient, overlooked engine of the Indian economy",
    description: "She doesn't earn. But without her, nothing runs. India's economy depends on an invisible workforce — housewives.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/the-unpaid-economy",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "The Unpaid Economy - India's Invisible Workforce"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Unpaid Economy - The most efficient, overlooked engine of the Indian economy",
    description: "She doesn't earn. But without her, nothing runs. India's economy depends on an invisible workforce — housewives.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Unpaid Labor",
    "Gender Economy",
    "Women In India",
    "Housewives",
    "Invisible Work",
    "Indian Economy",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 She doesn't earn. But without her, nothing runs.

India's economy depends on an invisible workforce — housewives.

Here's how unpaid labor keeps the country moving, and why it's time we see it for what it is.

#UnpaidLabor #GenderEconomy #WomenInIndia  #WomensWork

(🧵1/n)

She wakes before everyone. Sleeps after.

She cooks, cleans, plans, heals, negotiates, teaches.

Her job has no salary, no title, no off days.

And yet, society says: "She doesn't work."

(2/n)

Only 20% of working-age Indian women are part of the official workforce.

But over 280 million women work every single day - unpaid.

Their contribution? Ignored. Their labor? Uncounted.

(3/n)

GDP doesn't count what isn't paid.

But economists say if unpaid labor were counted, 

India's GDP would rise by 35–40%.

India isn't unproductive — it's underreported.

(4/n)

That 9-to-5 job your dad/husband/son goes to?

It's possible because someone else runs the home 24/7.

Behind every "productive man" is an unpaid woman who makes it possible.

(5/n)

The Indian housewife isn't just a caregiver.

She fills the gap left by the state:
– No public daycare
– No eldercare
– No kitchen canteens

She is the social safety net.

(6/n)

She's not "just a housewife."

She's unpaid HR.

Unrecognized logistics.

Uncredited finance.

And without her, millions of paid jobs would collapse overnight.

(7/n)

Western feminism asks: "Why don't Indian women work?"

But the better question is:

"Why doesn't the system value the work they already do?"

Because if she stopped tomorrow, who would keep the country fed, bathed, schooled, and sane?

(8/n)

We don't need performative praise.

We need better visibility, respect, and support for the women who do invisible labor.

India's real economy doesn't just run on code and capital.

It runs on her.

(9/n)`;

export default function TheUnpaidEconomyThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="the-unpaid-economy"
      title="The Unpaid Economy - The most efficient, overlooked engine of the Indian economy"
      description="She doesn't earn. But without her, nothing runs. India's economy depends on an invisible workforce — housewives. Here's how unpaid labor keeps the country moving."
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