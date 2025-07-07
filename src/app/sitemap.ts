import { getAllBlogs } from "@/data/blogs";
import { getAllThreads } from "@/data/threads";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogs();
  const threads = getAllThreads();
  const baseUrl = "https://mayanksinghal.tech";

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}${blog.href}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const threadUrls = threads.map((thread) => ({
    url: `${baseUrl}${thread.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...blogUrls,
    ...threadUrls,
  ];
}
