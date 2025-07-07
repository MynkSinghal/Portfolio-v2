interface ThreadCardProps {
  content: string;
  threadNumber: string;
  isLast?: boolean;
  author?: string;
}

export default function ThreadCard({
  content,
  threadNumber,
  isLast = false,
  author = "Mayank Singhal",
}: ThreadCardProps) {
  // Clean the content - remove thread number from content if it exists
  const cleanContent = content
    .replace(/^\(\d+\/n\)\s*/, '')  // Remove (1/n) pattern at start
    .replace(/\(\d+\/n\)\s*$/, '')  // Remove (1/n) pattern at end
    .trim();

  return (
    <div className="relative group">
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-foreground/50 to-foreground/20 z-0" />
      )}
      
      <div className="relative bg-card/50 backdrop-blur-sm border border-foreground/5 rounded-2xl p-8 hover:bg-card/80 hover:border-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 group-hover:translate-y-[-2px]">
        {/* Thread indicator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-foreground via-foreground to-foreground/80 flex items-center justify-center shadow-lg shadow-foreground/25">
              <span className="text-background font-semibold text-sm">
                {threadNumber.replace('/n', '')}
              </span>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/20 to-foreground/10 blur-sm" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-foreground/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-base md:text-lg font-medium tracking-wide">
            {cleanContent}
          </div>
          
          {/* Subtle accent line at bottom */}
          <div className="mt-6 pt-4 border-t border-gradient-to-r from-foreground/10 to-transparent">
            <div className="w-12 h-0.5 bg-gradient-to-r from-foreground to-foreground/80 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 