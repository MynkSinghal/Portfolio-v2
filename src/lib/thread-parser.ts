export interface ThreadTweet {
  content: string;
  threadNumber: string;
}

export function parseThreadContent(markdownContent: string): ThreadTweet[] {
  // Split content by lines (keep empty lines for spacing)
  const lines = markdownContent.split('\n');
  
  const tweets: ThreadTweet[] = [];
  let currentTweetContent: string[] = [];
  let currentThreadIndex = 0;
  let preThreadContent: string[] = [];
  let hasStartedThreads = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Skip hashtags and metadata lines
    if (trimmedLine.startsWith('#') || trimmedLine.includes('#IndianEducation') || trimmedLine.includes('#CareerGuidance')) {
      continue;
    }
    
    // Check if line contains thread number patterns:
    // (1/n), (2/n), (1/8), (🧵1/n), (🧵1/8), etc.
    const threadNumberMatch = trimmedLine.match(/\((?:🧵)?(\d+)\/(?:n|\d+)\)/);
    
    if (threadNumberMatch) {
      // If we have accumulated content from previous tweet, save it
      if (currentTweetContent.length > 0) {
        tweets.push({
          content: currentTweetContent.join('\n').trim(),
          threadNumber: `${currentThreadIndex}/n` // Will be fixed later
        });
      }
      
      // If this is the first thread marker and we have pre-thread content, save it as first tweet
      if (!hasStartedThreads && preThreadContent.length > 0) {
        tweets.push({
          content: preThreadContent.join('\n').trim(),
          threadNumber: "1/n" // Will be fixed later
        });
        preThreadContent = [];
      }
      
      hasStartedThreads = true;
      
      // Start new tweet
      currentThreadIndex = Number.parseInt(threadNumberMatch[1]);
      currentTweetContent = [];
      
      // Add the current line content (removing the thread number and emoji)
      const contentWithoutNumber = trimmedLine.replace(/\((?:🧵)?\d+\/(?:n|\d+)\)/, '').trim();
      if (contentWithoutNumber) {
        currentTweetContent.push(contentWithoutNumber);
      }
    } else if (hasStartedThreads && currentThreadIndex > 0) {
      // Add line to current tweet content if we're inside a tweet (preserve empty lines for spacing)
      currentTweetContent.push(line);
    } else if (trimmedLine && !hasStartedThreads) {
      // If we have content before the first thread marker, save it for the first tweet
      preThreadContent.push(line);
    }
  }
  
  // Don't forget the last tweet
  if (currentTweetContent.length > 0 && currentThreadIndex > 0) {
    tweets.push({
      content: currentTweetContent.join('\n').trim(),
      threadNumber: `${currentThreadIndex}/n` // Will be fixed later
    });
  }
  
  // If we never found thread markers but have pre-thread content, create a single tweet
  if (!hasStartedThreads && preThreadContent.length > 0) {
    tweets.push({
      content: preThreadContent.join('\n').trim(),
      threadNumber: "1/1"
    });
  }
  
  // Fix all thread numbers to show correct total
  const totalThreads = tweets.length;
  tweets.forEach((tweet, index) => {
    tweet.threadNumber = `${index + 1}/${totalThreads}`;
  });
  
  return tweets;
}