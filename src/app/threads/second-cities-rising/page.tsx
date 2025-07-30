import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Second Cities Rising - India's Real Growth Story | Mayank Singhal",
  description: "India's real growth story is quietly unfolding in cities like Indore, Surat, and Bhubaneswar, where success means building local and thriving without leaving your hometown.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/second-cities-rising",
  },
  openGraph: {
    title: "Second Cities Rising - India's Real Growth Story",
    description: "India's real growth story is quietly unfolding in cities like Indore, Surat, and Bhubaneswar.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/second-cities-rising",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Second Cities Rising - India's Real Growth Story"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Cities Rising - India's Real Growth Story",
    description: "India's real growth story is quietly unfolding in cities like Indore, Surat, and Bhubaneswar.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Second Cities",
    "Tier 2 Cities",
    "India Growth",
    "Indore",
    "Surat",
    "Bhubaneswar",
    "Urban Development",
    "Indian Economy",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Not every Indian dream is chasing a Mumbai flat or Bangalore startup.

Some are building empires in Indore, Surat, and Bhubaneswar.

This is the silent rise of India's second cities  and it's changing everything.

(1/n)

🏙️ Success used to mean leaving your hometown.

Now, it's about staying back and building local.

Why pay ₹60k rent in a metro when you can build, live, and thrive in Tier 2 cities?

(2/n)

🚚 Surat powers 90% of India's diamond exports.
Indore leads in clean city rankings.
Jaipur is a D2C goldmine.

Second cities are no longer "small towns"  they're India's quiet engines.

(3/n)

📱 Instagram, UPI, Amazon, and Jio = tools of aspirational rebellion.

Second-city creators, shoppers, and founders now have reach without relocation.

No funding? No English? No problem.

(4/n)

💼 Startups are moving in.
Real estate is cheaper.
Talent is homegrown.
And VCs are finally noticing.

You don't need to live in HSR Layout to raise a round anymore.

(5/n)

💬 "What's your native?"
In metros, it's an awkward question.
In second cities, it's an identity flex.

They're building futures without losing their roots.

(6/n)

👩‍💼 Bridal demands have changed:
"Good job, but doesn't have to live in Delhi."

Success = Stability + Proximity to family + Wifi.

The India 2.0 dream is different  and more grounded.

(7/n)

🧹 Swiggy delivers.
IKEA is opening stores.
Co-working spaces buzz.
English coaching centers run ads on local FM.

Second cities don't want hand-me-downs. They want version upgrades.

(8/n)

😮 But it's not all utopia.

Jobs are still unequal.
Women face stricter social ceilings.
Modernity often stops at café menus.

It's growth, but with guardrails.

(9/n)

💡 Second cities aren't just catching up.

They're building a new template of Indian modernity  part tradition, part ambition, full force.

Ignore them, and you're missing India's next big shift.

(10/n)`;

export default function SecondCitiesRisingThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="second-cities-rising"
      title="Second Cities Rising - India's Real Growth Story"
      description="India's real growth story is quietly unfolding in cities like Indore, Surat, and Bhubaneswar, where success means building local and thriving without leaving your hometown."
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