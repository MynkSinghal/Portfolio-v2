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
  coverImage?: string;
  published: boolean;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "The Shifting Sands: Why Traditional Education Fails in the Age of AI",
    description: "We're living in an AI-powered world, yet our education system is still stuck in an era of textbooks and standardized tests.",
    author: "Mayank Singhal",
    readTime: "8 min read",
    date: "Mar 28, 2024",
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