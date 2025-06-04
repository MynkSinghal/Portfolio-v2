import re
import os

def extract_article_content(content):
    # Find the article content section specifically
    article_match = re.search(r'<article[^>]*>(.*?)</article>', content, re.DOTALL)
    if not article_match:
        return ""
    
    article_content = article_match.group(1)
    
    # Extract text from paragraphs, headings, lists, quotes
    text_content = []
    
    # Extract paragraph content
    p_matches = re.findall(r'<p[^>]*>(.*?)</p>', article_content, re.DOTALL)
    for match in p_matches:
        clean_text = re.sub(r'<[^>]+>', '', match)  # Remove HTML tags
        clean_text = re.sub(r'\s+', ' ', clean_text).strip()
        if len(clean_text) > 0 and not clean_text.startswith('{'):
            text_content.append(clean_text)
    
    # Extract heading content
    h_matches = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', article_content, re.DOTALL)
    for match in h_matches:
        clean_text = re.sub(r'<[^>]+>', '', match)
        clean_text = re.sub(r'\s+', ' ', clean_text).strip()
        if len(clean_text) > 0:
            text_content.append(clean_text)
    
    # Extract list item content
    li_matches = re.findall(r'<li[^>]*>(.*?)</li>', article_content, re.DOTALL)
    for match in li_matches:
        clean_text = re.sub(r'<[^>]+>', '', match)
        clean_text = re.sub(r'\s+', ' ', clean_text).strip()
        if len(clean_text) > 0:
            text_content.append(clean_text)
    
    # Extract blockquote content
    bq_matches = re.findall(r'<blockquote[^>]*>(.*?)</blockquote>', article_content, re.DOTALL)
    for match in bq_matches:
        clean_text = re.sub(r'<[^>]+>', '', match)
        clean_text = re.sub(r'\s+', ' ', clean_text).strip()
        if len(clean_text) > 0:
            text_content.append(clean_text)
    
    return ' '.join(text_content)

def count_content_words(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    article_text = extract_article_content(content)
    words = len(article_text.split()) if article_text else 0
    
    return words, article_text[:300] + '...' if len(article_text) > 300 else article_text

def calculate_read_time(word_count):
    # Average reading speed: 200-250 words per minute
    # Using 225 as a middle ground, but round to nearest 0.5
    minutes = word_count / 225
    
    if minutes < 1:
        return "1 min read"
    elif minutes < 1.75:
        return "2 min read" 
    elif minutes < 2.5:
        return "2 min read"
    elif minutes < 3.5:
        return "3 min read"
    elif minutes < 4.5:
        return "4 min read"
    elif minutes < 5.5:
        return "5 min read"
    elif minutes < 6.5:
        return "6 min read"
    else:
        return f"{round(minutes)} min read"

files = [
    ('src/app/blog/knowledge-is-cheap-knowing-what-to-use-real-hustle/page.tsx', 'Knowledge Application'),
    ('src/app/blog/forget-10000-hours-iterations-make-you-unstoppable/page.tsx', '10,000 Iterations'),
    ('src/app/blog/internship-dilemma-no-badge-make-it-big/page.tsx', 'Internship Dilemma'),
    ('src/app/blog/upi-revolution-india-cash-to-tap/page.tsx', 'UPI Revolution'),
    ('src/app/blog/kirana-vs-quick-commerce-india/page.tsx', 'Kirana vs Quick Commerce'),
    ('src/app/blog/subscription-trap-leasing-lives/page.tsx', 'Subscription Trap'),
    ('src/app/blog/smartest-career-advice-tutorial-creators/page.tsx', 'Career Advice'), 
    ('src/app/blog/america-dominates-product-branding/page.tsx', 'America Products'),
    ('src/app/blog/traditional-education-fails-ai-age/page.tsx', 'Education AI')
]

print("Blog Post Content Analysis (Realistic Read Times):")
print("=" * 60)

results = []
for file_path, title in files:
    if os.path.exists(file_path):
        words, preview = count_content_words(file_path)
        read_time = calculate_read_time(words)
        results.append((title, words, read_time))
        print(f"\n{title}:")
        print(f"  Word Count: {words}")
        print(f"  Read Time: {read_time}")
        print(f"  Sample Text: {preview[:200]}...")
    else:
        print(f"\nFile not found: {file_path}")

print("\n" + "=" * 60)
print("SUMMARY - Updated Read Times:")
for title, words, read_time in results:
    print(f"{title:25} | {words:4d} words | {read_time}") 