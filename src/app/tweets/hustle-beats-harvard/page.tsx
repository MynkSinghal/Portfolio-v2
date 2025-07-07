import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hustle Beats Harvard - Why street vendors run a business with 10% failure rate | Mayank Singhal", 
  description: "Your MBA won't save you when the street vendor outside your office is running a business with a 10% failure rate, without a single spreadsheet. This thread breaks down why hustle > Harvard in India's real economy.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/tweets/hustle-beats-harvard",
  },
  openGraph: {
    title: "Hustle Beats Harvard - Why street vendors run a business with 10% failure rate",
    description: "Your MBA won't save you when the street vendor outside your office is running a business with a 10% failure rate, without a single spreadsheet.",
    type: "article",
    url: "https://www.mayanksinghal.tech/tweets/hustle-beats-harvard",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Hustle Beats Harvard - Street Smart Business"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hustle Beats Harvard - Why street vendors run a business with 10% failure rate",
    description: "Your MBA won't save you when the street vendor outside your office is running a business with a 10% failure rate.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Street Vendors",
    "Hustle Culture",
    "Business Resilience", 
    "Startup Failure",
    "Indian Business",
    "Street Smart",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `Your MBA won't save you when the street vendor outside your office is running a business with a 10% failure rate, without a single spreadsheet.

This thread breaks down why hustle > Harvard in India's real economy.

(1/n)

90% of Indian startups crash and burn within five years.

The dosa guy on your street? Still printing cash.

The real business masterclass isn't in boardrooms, it's on the pavement.

(2/n)

Startups burn crores, pivot slow, and pray for product-market fit.

Street vendors? They adapt in real time, survive on cash flow, and pivot before you finish your A/B test.

Survival > strategy when the customer is two feet away.

(3/n)

The bhel puri seller tweaks his recipe in 18 seconds flat.

Startups take 18 months to pivot.

CRM? 

Try memory-based loyalty: "extra strong, no sugar" for Mohan sir, no SaaS required.

(4/n)

Street vendors start with ₹50k–2L, pay almost no rent, and profit from day one.

Cloud kitchens burn through lakhs before seeing a rupee.

Low overhead isn't luck, it's an unfair advantage.

(5/n)

Paan shops add new products in hours.

Food trucks chase foot traffic daily.

While SaaS founders debate pivots, the momo guy's already tested five new fillings.

Adaptation isn't a feature, it's survival.

(6/n)

Street vendors build trust face-to-face, not through ads or algorithms.

They remember regulars, create real value, and pivot fast.

Real loyalty is built in the gaps algorithms can't see.

(7/n)

📊 Failure rates:

Street vendors: 10%
VC-backed startups: 75%
General startups: 90%

Food e-commerce? Even $56M-funded giants get wiped out.

The streets never left the customer's side.

(8/n)`;

export default function HustleBeatsHarvardThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="hustle-beats-harvard"
      title="Hustle Beats Harvard - Why street vendors run a business with 10% failure rate"
      description="Your MBA won't save you when the street vendor outside your office is running a business with a 10% failure rate, without a single spreadsheet."
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