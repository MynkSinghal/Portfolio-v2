export interface Thread {
  id: string;
  title: string;
  tagline: string;
  description: string;
  author: string;
  slug: string;
  href: string; // Path to the thread page
  published: boolean;
}

export const threads: Thread[] = [
  {
    id: "10",
    title: "The Unpaid Economy",
    tagline: "The most efficient, overlooked engine of the Indian economy",
    description: "She doesn't earn. But without her, nothing runs. India's economy depends on an invisible workforce — housewives. Here's how unpaid labor keeps the country moving, and why it's time we see it for what it is.",
    author: "Mayank Singhal",
    slug: "the-unpaid-economy",
    href: "/tweets/the-unpaid-economy",
    published: true,
  },
  {
    id: "9",
    title: "Marks or Misdirection",
    tagline: "When Schools Teach Facts, But Hide The Futures",
    description: "93% of Indian students can't name more than 7 career options. Not because they're lazy—because nobody ever showed them the map. At 15, you pick Science, Arts, or Commerce blindfolded. India needs 1.4 million career counselors. We have maybe 1 lakh. The system creates 'qualified confusion'—kids know facts, not futures.",
    author: "Mayank Singhal",
    slug: "marks-or-misdirection",
    href: "/tweets/marks-or-misdirection",
    published: true,
  },
  {
    id: "8",
    title: "Word of Mouth",
    tagline: "How India's real jobs get filled",
    description: "Everyone's busy optimizing their LinkedIn profiles. But here's the truth: Most jobs in India don't even touch LinkedIn. They're born in living rooms, barber shops, and WhatsApp groups. 85-93% of India's workforce is informal, and 400+ million people work outside the 'system'. Welcome to India's original hiring hack.",
    author: "Mayank Singhal",
    slug: "word-of-mouth",
    href: "/tweets/word-of-mouth",
    published: true,
  },
  {
    id: "7",
    title: "India Builds Bold",
    tagline: "How Tier-2 India Is Quietly Rewriting the Startup Playbook",
    description: "Forget what you've been sold: the real startup action isn't happening in glass towers or VC-studded boardrooms. It's brewing in chai-splattered cafes in Indore, in Surat's textile backrooms, and in Bhilai's steel-shadowed lanes. 45% of new Indian startups are now tier-2 or tier-3 born, and they're outsmarting the metro crowd.",
    author: "Mayank Singhal",
    slug: "india-builds-bold",
    href: "/tweets/india-builds-bold",
    published: true,
  },
  {
    id: "6",
    title: "Hustle Beats Harvard",
    tagline: "Your momo guy has better retention than your MBA-backed food startup.",
    description: "90% of startups in India face-plant within five years. Meanwhile, that dosa guy on the corner? He's printing cash and probably knows your lunch order better than your co-founder knows your product roadmap. Street vendors are quietly dunking on boardroom geniuses with a failure rate that's 9x lower.",
    author: "Mayank Singhal",
    slug: "hustle-beats-harvard",
    href: "/tweets/hustle-beats-harvard",
    published: true,
  },
  {
    id: "5",
    title: "Visa Cancel Nation",
    tagline: "When America Starts Revoking Dreams Before They're Even Lived",
    description: "If you thought the US immigration system was a maze, welcome to the new level — where the walls move, the rules change mid-game, and the exit signs point straight to the airport. This isn't about 'illegal' vs. 'legal' anymore — it's about anyone with a visa, a dream, and a traffic ticket.",
    author: "Mayank Singhal",
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
    slug: "slack-dont-work",
    href: "/tweets/slack-dont-work",
    published: true,
  },
];

export function getThreadBySlug(slug: string): Thread | undefined {
  return threads.find((thread) => thread.slug === slug);
}

export function getAllThreads(): Thread[] {
  return threads.filter((thread) => thread.published);
} 