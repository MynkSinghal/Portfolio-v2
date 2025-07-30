import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "₹10 Note Life: The Silent Engine of India's Informal Economy | Mayank Singhal",
  description: "Ignored by banks, loved by vendors - this is the silent engine of the offline economy.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/ten-rupee-note-life",
  },
  openGraph: {
    title: "₹10 Note Life: The Silent Engine of India's Informal Economy",
    description: "Ignored by banks, loved by vendors - this is the silent engine of the offline economy.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/ten-rupee-note-life",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "₹10 Note Life: The Silent Engine of India's Informal Economy"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "₹10 Note Life: The Silent Engine of India's Informal Economy",
    description: "Ignored by banks, loved by vendors - this is the silent engine of the offline economy.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Currency",
    "Informal Economy",
    "Cash Economy",
    "Digital Payments",
    "Small Business",
    "Social Commentary",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `💸 A ₹10 note is poor man's UPI.
Ignored by banks, worshipped by sabziwalas, folded 1000 times — never replaced.
This is the secret life of India's most hardworking note.

(1/n)

🛠️ ₹10 is born in RBI's printing presses — not plastic, but cotton-soaked cloth.
It's printed with care…
Only to end up crushed in someone's blouse or autorickshaw dashboard.

(2/n)

🏦 It enters circulation through banks — but here's the twist:
ATMs hate ₹10 notes.
They jam machines, take too much space, and aren't "cost-effective."

So guess where they go?
Your local chai tapri.

(3/n)

🍵 From mandis to metro trains, this note is everywhere.
Chai stalls, paan shops, school canteens.
It flows where QR codes don't.
Not flashy — but functional.

(4/n)

🔁 Vendors prefer ₹10 notes.
Digital is great, but what if signal's gone? Or the uncle doesn't know how to "scan"?
₹10 is instant. Tangible. Trustable.

It makes small biz run without any app update.

(5/n)

📉 Everyone talks about UPI.
But ₹10 cash demand is RISING.
India is short by 500+ crore notes.
Even RBI brought back ₹10 coins — people still don't like them.

They want the note. Not the metal.

(6/n)

🖊️ ₹10 isn't just money.
It's a notepad. A bookmark. A message board.
People scribble grocery lists, phone numbers, even mantras on it.

No other object carries such casual intimacy.

(7/n)

♻️ After 3–5 years, the note dies.
Banks sort them. RBI shreds them.
No recycling. Just quiet disappearance.

No one thanks it.
But for years, it held India's informal economy together.

(8/n)

💥 In the battle between code and cash, ₹10 survives not because it's smart —
But because it's understood.
It's not "legacy."
It's infrastructure.

A living, breathing node in India's daily trade.

(9/n)`;

export default function TenRupeeNoteLifeThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="ten-rupee-note-life"
      title="₹10 Note Life: The Silent Engine of India's Informal Economy"
      description="Ignored by banks, loved by vendors - this is the silent engine of the offline economy."
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