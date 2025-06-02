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
    id: "2",
    title: "🇺🇸 Why America Builds Better Products (And What India Can Learn From It)",
    description: "Ever walked into a U.S. grocery store and thought, 'Why does everything look so... perfect?' Discover the deeper system behind America's product perfection.",
    author: "Mayank Singhal",
    readTime: "8 min read",
    date: "May 28, 2025",
    category: "Business & Products",
    slug: "america-dominates-product-branding",
    href: "/blog/america-dominates-product-branding",
    coverImage: "/blog-covers/america-branding.jpg",
    published: true,
  },
  {
    id: "1",
    title: "The Shifting Sands: Why Traditional Education Fails in the Age of AI",
    description: "In an era where artificial intelligence is reshaping every industry, our educational systems remain stuck in the past. Explore why the traditional approach to learning is becoming obsolete and what we need to do to prepare for an AI-driven future.",
    author: "Mayank Singhal",
    readTime: "10 min read",
    date: "Jun 02, 2025",
    category: "Artificial Intelligence",
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