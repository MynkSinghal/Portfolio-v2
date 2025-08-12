import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Hospitality Script",
  description:
    "Why we overfeed, insist, gift, and refuse before accepting. The social contract behind warmth.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/indian-hospitality-script",
  },
  openGraph: {
    title: "Indian Hospitality Script",
    description:
      "Why we overfeed, insist, gift, and refuse before accepting. The social contract behind warmth.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/indian-hospitality-script",
    authors: ["Mayank Singhal"],
    images: [
      {
        url: "https://www.mayanksinghal.tech/banner.webp",
        width: 1200,
        height: 630,
        alt: "Indian Hospitality Script",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Hospitality Script",
    description:
      "Why we overfeed, insist, gift, and refuse before accepting. The social contract behind warmth.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Indian Hospitality",
    "Atithi Devo Bhava",
    "Social Scripts",
    "Reciprocity",
    "Indian Culture",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 Indian hospitality is not just being nice
It is a social contract of status, reciprocity, and scripts
Why we overfeed, why guests refuse before accepting, why no one leaves empty handed
This is the psychology behind Atithi Devo Bhava
(🧵1/n)

🍛 Overfeeding is a costly signal
Offer more than you can eat to prove abundance and care
It preempts any hint of stinginess and says you matter here
Refusing a second helping is part of the dance, not an insult
(2/n)

🙅 The insist and refusal ritual
Guest: no thank you
Host: please, have some more
Guest: ok, a little
This protects dignity on both sides and restores balance before the meal truly begins
(3/n)

🎁 No one leaves empty handed
A mithai box, fruits, or leftovers extend the relationship beyond the visit
The gift carries the host’s warmth into the guest’s home and keeps the door symbolically open
(4/n)

⏳ Please stay longer
Both know it is time to leave
The scripted insist is not a lie, it is respect
A final signal that your company was valued, even as the goodbye starts at the door
(5/n)

🛍 Guests arrive with something
Small gifts balance the ledger and acknowledge the host’s labor
It says I came to enjoy, not to extract
Even fruit converts thanks into a tangible token of reciprocity
(6/n)

🧹 Do not be a burden
Guests self regulate: offer to help, time the exit, tidy the plate
This protects the host’s face and labor and shows you understand the costs behind warmth
(7/n)

🎭 Hosting is a family’s front stage
Great hospitality builds social capital
A bad story can stain reputation for years
Food, seating, and attention are cues that neighbors read closely
(8/n)

🤝 Roles blur
You may be invited to chop veggies, taste the dal, join a quick errand
It is integration, not intrusion
You are treated as inside the circle, not as a customer at a counter
(9/n)

🍳 The hidden labor
Who planned the menu, remembered allergies, ironed linens, timed the chai
Often women carry this invisible workload
Name it with care so we honor warmth while seeing the cost that makes it possible
(10/n)

🗺 Signals vary by class and region
Bottle vs tap water, AC on, second dessert, seat at the head
Kerala sadhya on a leaf, Awadhi mehmaan nawazi, Kashmiri kahwa
Do not flatten India into one script
(11/n)

📱 The modern remix
Smaller homes, nuclear families, work hours, delivery apps, dietary rules
Hospitality adapts: curated hampers, potlucks, shorter visits, precise timing on WhatsApp
Warmth survives with new wrappers
(12/n)

🏨 Industry has bottled the home playbook
Welcome drink, name recall, unbilled extras, farewell sweets
Loyalty points turn reciprocity into a program
Hotels scale the same emotions a household offers at its door
(13/n)

♻️ Mindful abundance
Excess can mean waste or pressure
New etiquette: ask before insisting, portion well, pack leftovers, respect consent and dietary needs
Enough can be love
The bond matters more than the pile on the plate
(14/n)`;

export default function IndianHospitalityScriptThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="indian-hospitality-script"
      title="Indian Hospitality Script"
      description="Why we overfeed, insist, gift, and refuse before accepting. The social contract behind warmth."
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


