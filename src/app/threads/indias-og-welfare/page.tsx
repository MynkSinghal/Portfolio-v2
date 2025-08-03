import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's OG Welfare: The Hidden Social Support System | Mayank Singhal",
  description: "Before NGOs and UPI, India had bhandaras. No Aadhaar, no agenda, just garam khana and quiet dignity.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/indias-og-welfare",
  },
  openGraph: {
    title: "India's OG Welfare: The Hidden Social Support System",
    description: "Before NGOs and UPI, India had bhandaras. No Aadhaar, no agenda, just garam khana and quiet dignity.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/indias-og-welfare",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "India's OG Welfare - Bhandaras and Community Support"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "India's OG Welfare: The Hidden Social Support System",
    description: "Before NGOs and UPI, India had bhandaras. No Aadhaar, no agenda, just garam khana and quiet dignity.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Culture",
    "Social Welfare",
    "Community Support",
    "Bhandara",
    "Food Security",
    "Social Commentary",
    "Indian Society",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Before welfare schemes, before UPI, before NGOs…
India had the bhandara.
No paperwork. No ID. No judgment.
Just sit. Eat. Breathe.

The OG social support system hidden in plain sight.
Let's break it down 👇
(1/n)

🍛 A bhandara isn't just free food.
It's a pop-up welfare system - run on faith, not funds.

It feeds the migrant, the pilgrim, the broke student, the daily wager.
No one asks why you're hungry.
(2/n)

🛕 In India, feeding others is worship.
It's not "charity," it's punya (virtue).
Religions institutionalized it:

Langars in Gurudwaras
Annadan in temples
Dargahs serving hot meals for centuries

This is seva, not saviorism.
(3/n)

🛠️ No startup, no ops deck - yet bhandaras feed thousands overnight.
Volunteers cook, serve, clean.
No salary. No KPI.
Just belief, trust, rhythm.

They scale without logistics apps or pitch decks.
(4/n)

🪑 You eat on the floor, next to strangers.
No VIP zone.
No class badge.
For a few minutes, India's hierarchy disappears.
Bhandaras quietly do what laws still struggle with: equality.
(5/n)

📜 There's no form to fill.
No Aadhaar.
No QR code.
Just the assumption that everyone deserves to eat.

Compare that to modern welfare systems.
One is built on trust, the other on suspicion.
(6/n)

⚙️ Think of bhandaras as India's offline OS of care.
They emerge after funerals, during yatras, or on birthdays.
Crowd-funded. Crowd-run. Crowd-fed.

No campaign. No press release.
Just laddoos, puri, and dignity.
(7/n)

😮 The most overlooked fact?
For many, a bhandara might be the only hot meal they get that week.
No one talks about it - but it keeps cities going.
Faith fills the gap where the state doesn't reach.
(8/n)

👁️ Bhandaras show us something rare:
Decentralized, deeply human infrastructure.
No user onboarding.
No growth hacks.
Just food, shared at scale.

And somehow, it still works.
(9/n)`;

export default function IndiasOGWelfareThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="indias-og-welfare"
      title="India's OG Welfare: The Hidden Social Support System"
      description="Before NGOs and UPI, India had bhandaras. No Aadhaar, no agenda, just garam khana and quiet dignity."
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