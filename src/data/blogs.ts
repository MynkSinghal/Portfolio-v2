export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  category: string;
  slug: string;
  href: string; // Path to the blog page
  coverImage: string;
  published: boolean;
}

export const blogs: BlogPost[] = [
  {
    id: "17",
    title: "👑 The Real CEOs of India Don't Post",
    description:
      "Think India's business titans are all on LinkedIn, dropping wisdom and sharing wins? Here's a reality check: the real empire builders-the ones moving crores, hiring millions, and shaping the economy-are invisible online. Their companies are household names, but their faces? You'll never see them on your feed.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Sep 3, 2025",
    category: "Leadership & Success",
    slug: "the-real-ceos-of-india-are-not-on-linkedin",
    href: "/blog/the-real-ceos-of-india-are-not-on-linkedin",
    coverImage: "/blog-covers/ceo-of-india.webp",
    published: false,
  },
  {
    id: "16",
    title:
      "📞 Real Operations Don't Happen on Slack: Why India's Business OS Runs on Calls, Paper, and Jugaad",
    description:
      "Ever tried running a business in India only with Slack, dashboards, and endless apps? Good luck. Here's the real secret: most of India's commerce happens on phone calls, handwritten ledgers, and a healthy dose of jugaad-not in the digital playgrounds Silicon Valley loves.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Aug 27, 2025",
    category: "Business Operations",
    slug: "real-operations-dont-happen-on-slack-indian-edition",
    href: "/blog/real-operations-dont-happen-on-slack-indian-edition",
    coverImage: "/blog-covers/indian-slack-channel.webp",
    published: false,
  },
  {
    id: "15",
    title: "☕ Chaiwalas vs Chains: India's Secret Business Superpower",
    description:
      "Ever wonder why your local chaiwala is still thriving-even as Starbucks, McDonald's, and big-name chains pop up on every corner? Here's a stat that'll make you look twice: India's street vendors and mom-and-pop shops contribute up to 63% of the country's GDP.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Aug 20, 2025",
    category: "Business & Community",
    slug: "chaiwalas-and-chainstores-what-india-gets-right",
    href: "/blog/chaiwalas-and-chainstores-what-india-gets-right",
    coverImage: "/blog-covers/indian-chaiwalas.webp",
    published: false,
  },
  {
    id: "14",
    title:
      "💳 Why CRED Ignored Revenue-Until It Couldn't: Lessons for Every Ambitious Founder",
    description:
      "Ever wondered how a startup can become a household name-and a billion-dollar company-without worrying about making money? CRED did just that. But what happens when the music stops and investors start asking, 'So… where's the revenue?'",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Aug 13, 2025",
    category: "Fintech & Strategy",
    slug: "why-cred-never-cared-about-revenue-until-it-had-to",
    href: "/blog/why-cred-never-cared-about-revenue-until-it-had-to",
    coverImage: "/blog-covers/how-cred-work.webp",
    published: false,
  },
  {
    id: "13",
    title: "💪 Grit Over Gadgets: How Indian SMEs Win Without Fancy Tech",
    description:
      "What if I told you that some of India's most successful businesses run on WhatsApp, paper ledgers, and pure hustle? Here's how Indian SMEs are quietly powering 40% of the nation's workforce without the latest tech-and thriving against all odds.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Aug 6, 2025",
    category: "Entrepreneurship",
    slug: "grit-over-gadgets-indian-smes-win-without-fancy-tech",
    href: "/blog/grit-over-gadgets-indian-smes-win-without-fancy-tech",
    coverImage: "/blog-covers/india-logistic.webp",
    published: false,
  },
  {
    id: "12",
    title:
      "🚛 India's Logistics Labyrinth: Why Complexity Breeds Resilience (and Opportunity)",
    description:
      "Ever wondered how a single parcel can travel from a Himalayan village to a Mumbai skyscraper-without getting lost in the chaos? Here's why India spends 14% of its GDP on logistics and how complexity became the secret sauce behind resilience.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jul 30, 2025",
    category: "Infrastructure",
    slug: "india-logistics-labyrinth-complexity-breeds-resilience",
    href: "/blog/india-logistics-labyrinth-complexity-breeds-resilience",
    coverImage: "/blog-covers/supply-chain-maze-india.webp",
    published: true,
  },
  {
    id: "11",
    title:
      "💎 How Minimalist Built a 3,000 Crore Skincare Brand Without Playing the Usual Marketing Game",
    description:
      "Ever feel like every skincare brand is just selling you a story, not a solution? Here's how Minimalist, a Jaipur-based startup, rewrote the rules and built a 3,000 crore empire in just five years-by doing the opposite of what everyone else was doing.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jul 23, 2025",
    category: "Business & Branding",
    slug: "minimalist-3000-crore-skincare-brand-radical-transparency",
    href: "/blog/minimalist-3000-crore-skincare-brand-radical-transparency",
    coverImage: "/blog-covers/minimalist-brand-magic.webp",
    published: true,
  },
  {
    id: "10",
    title:
      "🧠 Will AI Make Us Smarter or Stupider? The Truth Nobody Wants to Admit",
    description:
      "Ever wondered if all these AI tools are making you sharper-or just a little lazier? If you've ever Googled an answer you could have figured out, you're not alone. Here's the uncomfortable truth about outsourcing our brains.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jul 16, 2025",
    category: "AI & Learning",
    slug: "will-ai-make-us-smarter-or-stupider",
    href: "/blog/will-ai-make-us-smarter-or-stupider",
    coverImage: "/blog-covers/ai-make-dumb.webp",
    published: true,
  },
  {
    id: "9",
    title:
      "🧠 Knowledge Is Cheap - Knowing What to Use? That's the Real Hustle",
    description:
      "In an era where information is infinite, the real power isn't in what you know-it's in knowing what to use and when. Here's how to turn your knowledge into unstoppable action.",
    author: "Mayank Singhal",
    readTime: "6 min read",
    date: "Jul 9, 2025",
    category: "Learning & Growth",
    slug: "knowledge-is-cheap-knowing-what-to-use-real-hustle",
    href: "/blog/knowledge-is-cheap-knowing-what-to-use-real-hustle",
    coverImage: "/blog-covers/knowledge-application.webp",
    published: true,
  },
  {
    id: "8",
    title:
      "🔥 Forget 10,000 Hours - It's 10,000 Iterations That Make You Unstoppable",
    description:
      "You don't get better by clocking in time. You get better by bleeding, failing, shipping, and doing it all over again. Here's why iterations beat hours every time.",
    author: "Mayank Singhal",
    readTime: "5 min read",
    date: "Jul 2, 2025",
    category: "Skill Development",
    slug: "forget-10000-hours-iterations-make-you-unstoppable",
    href: "/blog/forget-10000-hours-iterations-make-you-unstoppable",
    coverImage: "/blog-covers/10000-iterations.webp",
    published: true,
  },
  {
    id: "7",
    title:
      "🎯 The Internship Dilemma: Why You Don't Need a Fancy Badge to Make It Big",
    description:
      "No internship? No problem. The game isn't over - it's just getting interesting. Here's your spicy reality check on building a career without that coveted badge.",
    author: "Mayank Singhal",
    readTime: "5 min read",
    date: "Jun 25, 2025",
    category: "Career",
    slug: "internship-dilemma-no-badge-make-it-big",
    href: "/blog/internship-dilemma-no-badge-make-it-big",
    coverImage: "/blog-covers/internship-dilemma.webp",
    published: true,
  },
  {
    id: "6",
    title: "💸 The UPI Revolution: How India Went From Cash to Tap",
    description:
      "From 2 billion to 7.3 billion transactions per month. UPI didn't just digitize payments-it rewired a nation. Discover how India built the world's most successful payment system.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jun 18, 2025",
    category: "Fintech & Digital India",
    slug: "upi-revolution-india-cash-to-tap",
    href: "/blog/upi-revolution-india-cash-to-tap",
    coverImage: "/blog-covers/upi-revolution.webp",
    published: true,
  },
  {
    id: "5",
    title: "🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul",
    description:
      "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR. This isn't just competition-it's a transformation of how India shops.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jun 11, 2025",
    category: "Indian Retail",
    slug: "kirana-vs-quick-commerce-india",
    href: "/blog/kirana-vs-quick-commerce-india",
    coverImage: "/blog-covers/kirana-quick-commerce.webp",
    published: true,
  },
  {
    id: "4",
    title: "🎟️ The Subscription Trap: Are We Leasing Our Lives Away?",
    description:
      "From Netflix to gym memberships, we're drowning in subscriptions. But what if this 'everything-as-a-service' world is rewiring our relationship with ownership itself?",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Jun 4, 2025",
    category: "Finance & Culture",
    slug: "subscription-trap-leasing-lives",
    href: "/blog/subscription-trap-leasing-lives",
    coverImage: "/blog-covers/subscription-trap.webp",
    published: true,
  },
  {
    id: "3",
    title:
      "🧠 Why the Smartest Career Advice Rarely Comes From Tutorial Creators",
    description:
      "If everyone's learning the same thing, who's creating the future? Discover why real breakthroughs come from builders, not tutorial makers.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Jun 1, 2025",
    category: "Career & AI",
    slug: "smartest-career-advice-tutorial-creators",
    href: "/blog/smartest-career-advice-tutorial-creators",
    coverImage: "/blog-covers/career-advice.webp",
    published: true,
  },
  {
    id: "2",
    title: "🇺🇸 Why America Dominates Global Product & Branding",
    description:
      "From Apple to Coca-Cola, American companies shape how the world shops, thinks, and lives. Here's the psychology behind America's cultural export machine.",
    author: "Mayank Singhal",
    readTime: "2 min read",
    date: "May 25, 2025",
    category: "Business & Culture",
    slug: "america-dominates-product-branding",
    href: "/blog/america-dominates-product-branding",
    coverImage: "/blog-covers/america-branding.webp",
    published: true,
  },
  {
    id: "1",
    title:
      "🎓 The Shifting Sands: Why Traditional Education Fails in the Age of AI",
    description:
      "We're living in an AI-powered world, yet our education system is still stuck in an era of textbooks and standardized tests. Learn why conventional education no longer aligns with reality.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "May 20, 2025",
    category: "Education & AI",
    slug: "traditional-education-fails-ai-age",
    href: "/blog/traditional-education-fails-ai-age",
    coverImage: "/blog-covers/ai-education.webp",
    published: true,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug && blog.published);
}

export function getAllBlogs(): BlogPost[] {
  return blogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
