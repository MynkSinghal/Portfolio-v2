export interface ThreadTweet {
  content: string;
  threadNumber: string;
}

export function parseThreadContent(markdownContent: string): ThreadTweet[] {
  // Split content by lines (keep empty lines for spacing)
  const lines = markdownContent.split('\n');
  
  const tweets: ThreadTweet[] = [];
  let currentTweetContent: string[] = [];
  let currentThreadNumber = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Skip hashtags and metadata lines
    if (trimmedLine.startsWith('#') || trimmedLine.includes('#IndianEducation') || trimmedLine.includes('#CareerGuidance')) {
      continue;
    }
    
    // Check if line contains thread number pattern like (1/n), (2/n), etc.
    const threadNumberMatch = trimmedLine.match(/\((\d+)\/n\)/);
    
    if (threadNumberMatch) {
      // If we have accumulated content from previous tweet, save it
      if (currentTweetContent.length > 0 && currentThreadNumber) {
        tweets.push({
          content: currentTweetContent.join('\n').trim(),
          threadNumber: currentThreadNumber
        });
      }
      
      // Start new tweet
      currentThreadNumber = `${threadNumberMatch[1]}/n`;
      currentTweetContent = [];
      
      // Add the current line content (removing the thread number)
      const contentWithoutNumber = trimmedLine.replace(/\(\d+\/n\)/, '').trim();
      if (contentWithoutNumber) {
        currentTweetContent.push(contentWithoutNumber);
      }
    } else if (currentThreadNumber) {
      // Add line to current tweet content if we're inside a tweet (preserve empty lines for spacing)
      currentTweetContent.push(line);
    }
  }
  
  // Don't forget the last tweet
  if (currentTweetContent.length > 0 && currentThreadNumber) {
    tweets.push({
      content: currentTweetContent.join('\n').trim(),
      threadNumber: currentThreadNumber
    });
  }
  
  return tweets;
} 