import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slack Don't Work - Why 'low-tech' hacks beat enterprise software | Mayank Singhal",
  description: "India's billion-dollar businesses run on missed calls, scribbled notes, and pure trust - not Slack or Salesforce. Why 'low-tech' hacks beat enterprise software in the world's fastest-growing economy.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/slack-dont-work",
  },
  openGraph: {
    title: "Slack Don't Work - Why 'low-tech' hacks beat enterprise software",
    description: "India's billion-dollar businesses run on missed calls, scribbled notes, and pure trust - not Slack or Salesforce.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/slack-dont-work",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.webp",
      width: 1200,
      height: 630,
      alt: "Slack Don't Work - Low-tech Business Hacks"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slack Don't Work - Why 'low-tech' hacks beat enterprise software",
    description: "India's billion-dollar businesses run on missed calls, scribbled notes, and pure trust - not Slack or Salesforce.",
    images: ["https://www.mayanksinghal.tech/banner.webp"],
  },
  keywords: [
    "Business Operations",
    "Low-tech Solutions",
    "Indian Business",
    "WhatsApp Business",
    "Trust Network",
    "Offline Operations",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🔥 India's billion-dollar businesses run on missed calls, scribbled notes, and pure trust - not Slack or Salesforce.

Why "low-tech" hacks beat enterprise software in the world's fastest-growing economy.

(1/n)

💡 450 million Indians work outside the formal system.
 Deals happen on word-of-mouth, reputation, and "jugaad" - not dashboards.

Trust is the real operating system here.

(2/n)

⚙️ WhatsApp isn't just for chatting.

It's India's accidental ERP: 15M+ businesses use it for catalogs, orders, payments, and credit - all in one thread.

No training, no downloads, just business.

(3/n)

🧠 Slack, SaaS, and CRMs?
Most tools assume perfect power, fast internet, and tech skills.

But India's reality = patchy broadband, power cuts, and a love for simplicity.

Offline beats online every time.

(4/n)

🏗️ Khatabook and Dukaan got millions of signups digitizing ledgers and storefronts.

But most users treat them as helpers - not replacements.

If it doesn't fold into daily habits, it won't last.

(5/n)

🛠️ Real life:
Weddings run on WhatsApp groups and calls, not Slack.

Warehouses use paper and group chats, not dashboards.

D2C brands handle orders in spreadsheets and missed calls, not a CRM.

(6/n)

🧭 "Efficiency" in India means whatever works when the lights go out.

Personal trust and flexible hacks scale faster than any process or platform.

Low-tech isn't a weakness - it's a strategy.

(7/n)`;

export default function SlackDontWorkThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="slack-dont-work"
      title="Slack Don't Work - Why 'low-tech' hacks beat enterprise software"
      description="India's billion-dollar businesses run on missed calls, scribbled notes, and pure trust - not Slack or Salesforce."
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