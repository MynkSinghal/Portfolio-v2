export interface Tweet {
  id: string;
  title: string;
  tagline: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  href: string; // Path to the tweet page
  published: boolean;
}

export const tweets: Tweet[] = [
  {
    id: "5",
    title: "Visa Cancel Nation",
    tagline: "When America Starts Revoking Dreams Before They're Even Lived",
    description: "If you thought the US immigration system was a maze, welcome to the new level — where the walls move, the rules change mid-game, and the exit signs point straight to the airport. This isn't about 'illegal' vs. 'legal' anymore — it's about anyone with a visa, a dream, and a traffic ticket.",
    author: "Mayank Singhal",
    date: "July 1, 2025",
    slug: "visa-cancel-nation",
    href: "/tweets/visa-cancel-nation",
    published: true,
  },
  {
    id: "4",
    title: "Meter Down Mafia",
    tagline: "When Mumbai Rolled in Black and Yellow - Nostalgia That Won't Park.",
    description: "For sixty years, Mumbai's Kaali Peeli taxi drivers ruled the streets with nothing but muscle memory, street smarts, and zero digital help. They were the OG AIs with actual intelligence, navigating chaos that Google Maps still can't decode.",
    author: "Mayank Singhal",
    date: "June 30, 2025",
    slug: "meter-down-mafia",
    href: "/tweets/meter-down-mafia",
    published: true,
  },
  {
    id: "3",
    title: "Dabbawalas Don't Miss",
    tagline: "Zero Tech. Zero Errors. Just 5,000 Men and 200,000 Promises.",
    description: "Mumbai's dabbawalas have been running a 200,000-meal relay for 135 years with no GPS, no apps, no excuses. With a Six Sigma error rate, they're the ultimate masterclass in human systems beating high-tech.",
    author: "Mayank Singhal",
    date: "June 29, 2025",
    slug: "dabbawalas-dont-miss",
    href: "/tweets/dabbawalas-dont-miss",
    published: true,
  },
  {
    id: "2",
    title: "Chai Beats Starbucks",
    tagline: "₹10 tapri chai built more deals than every pitch at Starbucks.",
    description: "India gulps down 1.2 billion kg of tea a year. That's 13x more than coffee. Starbucks? 479 stores. Chaiwalas? 2 million+ stalls. The real business masterclass isn't in a boardroom—it's on a street corner with a folding stool.",
    author: "Mayank Singhal",
    date: "June 28, 2025",
    slug: "chai-beats-starbucks",
    href: "/tweets/chai-beats-starbucks",
    published: true,
  },
  {
    id: "1",
    title: "Slack Don't Work",
    tagline: "India doesn't run on SaaS. It runs on missed calls and notebooks.",
    description: "Ever tried running a business in India only with Slack, dashboards, and endless apps? Good luck. Here's the real secret: most of India's commerce happens on phone calls, handwritten ledgers, and a healthy dose of jugaad—not in the digital playgrounds Silicon Valley loves.",
    author: "Mayank Singhal",
    date: "June 27, 2025",
    slug: "slack-dont-work",
    href: "/tweets/slack-dont-work",
    published: true,
  },
];

export function getTweetBySlug(slug: string): Tweet | undefined {
  return tweets.find((tweet) => tweet.slug === slug);
}

export function getAllTweets(): Tweet[] {
  return tweets.filter((tweet) => tweet.published);
} 