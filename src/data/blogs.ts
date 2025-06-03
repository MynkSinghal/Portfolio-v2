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