import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogs();
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}${blog.href}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogUrls,
  ];
} 