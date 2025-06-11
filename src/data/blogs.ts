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
    id: "9",
    title: "🧠 Knowledge Is Cheap — Knowing What to Use? That's the Real Hustle",
    description: "In an era where information is infinite, the real power isn't in what you know—it's in knowing what to use and when. Here's how to turn your knowledge into unstoppable action.",
    author: "Mayank Singhal",
    readTime: "6 min read",
    date: "Jul 9, 2025",
    category: "Learning & Growth",
    slug: "knowledge-is-cheap-knowing-what-to-use-real-hustle",
    href: "/blog/knowledge-is-cheap-knowing-what-to-use-real-hustle",
    coverImage: "/blog-covers/knowledge-application.jpg",
    published: false,
  },
  {
    id: "8",
    title: "🔥 Forget 10,000 Hours — It's 10,000 Iterations That Make You Unstoppable",
    description: "You don't get better by clocking in time. You get better by bleeding, failing, shipping, and doing it all over again. Here's why iterations beat hours every time.",
    author: "Mayank Singhal",
    readTime: "5 min read",
    date: "Jul 2, 2025",
    category: "Skill Development",
    slug: "forget-10000-hours-iterations-make-you-unstoppable",
    href: "/blog/forget-10000-hours-iterations-make-you-unstoppable",
    coverImage: "/blog-covers/10000-iterations.jpg",
    published: false,
  },
  {
    id: "7",
    title: "🎯 The Internship Dilemma: Why You Don't Need a Fancy Badge to Make It Big",
    description: "No internship? No problem. The game isn't over — it's just getting interesting. Here's your spicy reality check on building a career without that coveted badge.",
    author: "Mayank Singhal",
    readTime: "5 min read",
    date: "Jun 25, 2025",
    category: "Career",
    slug: "internship-dilemma-no-badge-make-it-big",
    href: "/blog/internship-dilemma-no-badge-make-it-big",
    coverImage: "/blog-covers/internship-dilemma.jpg",
    published: false,
  },
  {
    id: "6",
    title: "💸 The UPI Revolution: How India Went From Cash to Tap",
    description: "From 2 billion to 7.3 billion transactions per month. UPI didn't just digitize payments—it rewired a nation. Discover how India built the world's most successful payment system.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jun 18, 2025",
    category: "Fintech & Digital India",
    slug: "upi-revolution-india-cash-to-tap",
    href: "/blog/upi-revolution-india-cash-to-tap",
    coverImage: "/blog-covers/upi-revolution.jpg",
    published: false,
  },
  {
    id: "5",
    title: "🏪 Kirana vs Quick Commerce: The Battle for India's Retail Soul",
    description: "200,000 kirana stores closed in one year. Quick commerce is growing at 48% CAGR. This isn't just competition—it's a transformation of how India shops.",
    author: "Mayank Singhal",
    readTime: "4 min read",
    date: "Jun 11, 2025",
    category: "Indian Retail",
    slug: "kirana-vs-quick-commerce-india",
    href: "/blog/kirana-vs-quick-commerce-india",
    coverImage: "/blog-covers/kirana-quick-commerce.jpg",
    published: true,
  },
  {
    id: "4",
    title: "🎟️ The Subscription Trap: Are We Leasing Our Lives Away?",
    description: "From Netflix to gym memberships, we're drowning in subscriptions. But what if this 'everything-as-a-service' world is rewiring our relationship with ownership itself?",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Jun 4, 2025",
    category: "Finance & Culture",
    slug: "subscription-trap-leasing-lives",
    href: "/blog/subscription-trap-leasing-lives",
    coverImage: "/blog-covers/subscription-trap.jpg",
    published: true,
  },
  {
    id: "3",
    title: "🧠 Why the Smartest Career Advice Rarely Comes From Tutorial Creators",
    description: "If everyone's learning the same thing, who's creating the future? Discover why real breakthroughs come from builders, not tutorial makers.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "Jun 1, 2025",
    category: "Career & AI",
    slug: "smartest-career-advice-tutorial-creators",
    href: "/blog/smartest-career-advice-tutorial-creators",
    coverImage: "/blog-covers/career-advice.jpg",
    published: true,
  },
  {
    id: "2",
    title: "🇺🇸 Why America Dominates Global Product & Branding",
    description: "From Apple to Coca-Cola, American companies shape how the world shops, thinks, and lives. Here's the psychology behind America's cultural export machine.",
    author: "Mayank Singhal",
    readTime: "2 min read",
    date: "May 25, 2025",
    category: "Business & Culture",
    slug: "america-dominates-product-branding",
    href: "/blog/america-dominates-product-branding",
    coverImage: "/blog-covers/america-branding.jpg",
    published: true,
  },
  {
    id: "1",
    title: "🎓 The Shifting Sands: Why Traditional Education Fails in the Age of AI",
    description: "We're living in an AI-powered world, yet our education system is still stuck in an era of textbooks and standardized tests. Learn why conventional education no longer aligns with reality.",
    author: "Mayank Singhal",
    readTime: "3 min read",
    date: "May 20, 2025",
    category: "Education & AI",
    slug: "traditional-education-fails-ai-age",
    href: "/blog/traditional-education-fails-ai-age",
    coverImage: "/blog-covers/ai-education.jpg",
    published: true,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find(blog => blog.slug === slug && blog.published);
}

export function getAllBlogs(): BlogPost[] {
  return blogs.filter(blog => blog.published).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
} 