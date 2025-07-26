# Portfolio Website with Blog System

A modern, responsive portfolio website built with Next.js 14, featuring a complete blog system with individual pages, SEO optimization, and a beautiful carousel interface.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with consistent styling
- **Blog System**: Individual pages for each blog post with full SEO optimization
- **Responsive Carousel**: Touch-friendly blog navigation with dot indicators
- **SEO Optimized**: Automatic sitemap generation, meta tags, and structured data
- **Fast Performance**: Static generation for optimal loading speeds
- **Mobile First**: Fully responsive design across all devices

## 📝 Adding New Blogs

### Quick Start

To add a new blog post to your website, follow these 3 simple steps:

### Step 1: Create the Blog Page

Create a new folder and page file for your blog:

```
src/app/blog/your-blog-slug/page.tsx
```

**Example Structure:**
```
src/app/blog/
├── traditional-education-fails-ai-age/
│   └── page.tsx
├── your-new-blog-title/          ← Create this folder
│   └── page.tsx                  ← Create this file
```

### Step 2: Copy the Blog Template

Copy the content from an existing blog page and modify it:

```tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Blog Title | Mayank Singhal',
  description: "Your blog description that will appear in search results and social media shares.",
  openGraph: {
    title: 'Your Blog Title',
    description: "Your blog description for social media.",
    type: 'article',
    publishedTime: '2024-04-01', // Publication date
    authors: ['Mayank Singhal'],
    images: ['/blog-covers/your-cover-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Blog Title',
    description: "Your blog description for Twitter.",
    images: ['/blog-covers/your-cover-image.jpg'],
  },
  keywords: ['keyword1', 'keyword2', 'keyword3', 'blog', 'Mayank Singhal'],
};

export default function BlogPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Your Blog Title",
    "description": "Your blog description",
    "author": {
      "@type": "Person",
      "name": "Mayank Singhal"
    },
    "datePublished": "2024-04-01",
    "dateModified": "2024-04-01",
    "image": "/blog-covers/your-cover-image.jpg",
    "publisher": {
      "@type": "Person",
      "name": "Mayank Singhal"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16 lg:py-20">
          {/* Back Navigation */}
          <Link 
            href="/#blogs" 
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8 group"
          >
            <svg 
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          {/* Cover Image */}
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-8 bg-foreground/5">
            <img 
              src="/blog-covers/your-cover-image.jpg" 
              alt="Your Blog Title"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
              <span className="font-medium">Mayank Singhal</span>
              <span>•</span>
              <span>X min read</span>
              <span>•</span>
              <span>Apr 01, 2024</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              🚀 Your Blog Title
            </h1>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/10 text-sm font-medium text-foreground/80 mb-6">
              Your Category
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-base md:text-lg leading-relaxed space-y-6">
              
              {/* Your blog content goes here */}
              <p>Your introduction paragraph...</p>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Your Section Heading</h2>
              
              <p>Your content...</p>
              
              <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
                <p>Your quote text here</p>
              </blockquote>
              
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Your bullet point</li>
                <li>Another point</li>
              </ul>
              
            </div>
          </article>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-foreground/10">
            <div className="flex items-center justify-between">
              <Link 
                href="/#blogs" 
                className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
              >
                <svg 
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blogs
              </Link>
              
              <div className="text-sm text-foreground/50">
                Published on Apr 01, 2024
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
```

### Step 3: Add Blog Metadata

Add your blog to the data file to make it appear in the carousel:

**File:** `src/data/blogs.ts`

```typescript
export const blogs: BlogPost[] = [
  // ... existing blogs
  {
    id: "11", // Increment the ID
    title: "Your Blog Title",
    description: "A brief description that will appear in the blog card and search results.",
    author: "Mayank Singhal",
    readTime: "5 min read", // Estimate reading time
    date: "Apr 01, 2024", // Publication date
    category: "Your Category", // e.g., "Technology", "AI", "Web Development"
    slug: "your-blog-slug", // Must match your folder name
    href: "/blog/your-blog-slug", // Must match your folder path
    coverImage: "/blog-covers/your-cover-image.jpg", // Optional: cover image
    published: true, // Set to false to hide the blog
  },
];
```

## 🎨 Content Formatting

### Text Formatting

Use standard HTML tags for formatting:

```tsx
<p>Regular paragraph text</p>

<em>Italicized text</em>
<strong>Bold text</strong>

<h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">Section Heading</h2>
<h3 className="text-xl md:text-2xl font-bold mb-3 mt-6">Subsection Heading</h3>
```

### Blockquotes

```tsx
<blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
  <p>Your inspiring quote or important callout</p>
</blockquote>
```

### Lists

```tsx
<ul className="list-disc list-inside space-y-2 text-foreground/80">
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>

<ol className="list-decimal list-inside space-y-2 text-foreground/80">
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>
```

### Code Blocks

```tsx
<pre className="bg-foreground/5 p-4 rounded-lg overflow-x-auto">
  <code>{`your code here`}</code>
</pre>
```

### Horizontal Rules

```tsx
<hr className="border-foreground/20 my-8" />
```

## 🖼️ Adding Images

### Cover Images

1. Add your cover image to `public/blog-covers/`
2. Use aspect ratio 2:1 (e.g., 1200x600px)
3. Reference it in both the page metadata and blog data

### In-Content Images

```tsx
<div className="my-8">
  <img 
    src="/images/your-image.jpg" 
    alt="Descriptive alt text"
    className="w-full rounded-lg shadow-sm"
  />
  <p className="text-sm text-foreground/60 text-center mt-2 italic">
    Image caption (optional)
  </p>
</div>
```

## 📁 File Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── [your-blog-slug]/
│   │   │   └── page.tsx
│   │   └── sitemap.ts
│   └── globals.css
├── components/
│   ├── BlogCard.tsx
│   ├── blogs-section.tsx
│   └── ...
├── data/
│   └── blogs.ts
└── public/
    ├── blog-covers/
    │   ├── your-cover-image.jpg
    │   └── ...
    └── images/
        ├── your-content-images.jpg
        └── ...
```

## 🔧 Advanced Features

### Draft Mode

Set `published: false` in the blog data to hide a blog while working on it:

```typescript
{
  // ... other fields
  published: false, // Won't appear in the carousel
}
```

### Custom Categories

Add new categories by simply using them in your blog data:

```typescript
category: "New Category", // Will automatically get a styled pill
```

### SEO Optimization

The system automatically handles:
- ✅ Meta tags and Open Graph
- ✅ Twitter Cards  
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Fast static generation

## 🚀 Deployment

After adding your blog:

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy**: Push to your hosting platform

The sitemap will automatically update to include your new blog!

## 💡 Tips

- **Keep URLs short**: Use kebab-case slugs
- **Optimize images**: Compress cover images for faster loading
- **Consistent style**: Follow the existing formatting patterns
- **Mobile first**: Test on mobile devices
- **SEO friendly**: Write descriptive titles and meta descriptions

## 🆘 Troubleshooting

**Blog not appearing in carousel?**
- Check `published: true` in `src/data/blogs.ts`
- Verify the `href` path matches your folder structure

**Images not loading?**
- Ensure images are in the `public/` directory
- Check file paths start with `/` (e.g., `/blog-covers/image.jpg`)

**Build errors?**
- Verify all TypeScript types are correct
- Check for missing commas in the blog data array

---

**Happy blogging!** 🎉
