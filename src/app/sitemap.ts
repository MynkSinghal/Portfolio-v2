import { getAllBlogs } from "@/data/blogs";
import { getAllTweets } from "@/data/tweets";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogs();
  const tweets = getAllTweets();
  const baseUrl = "https://mayanksinghal.tech";

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}${blog.href}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tweetUrls = tweets.map((tweet) => ({
    url: `${baseUrl}${tweet.href}`,
    lastModified: new Date(tweet.date),
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
    ...tweetUrls,
  ];
}
