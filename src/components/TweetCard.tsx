import { Tweet } from "@/data/tweets";
import Link from "next/link";

interface TweetCardProps {
  tweet: Tweet;
}

export default function TweetCard({ tweet }: TweetCardProps) {
  return (
    <Link href={tweet.href} className="group block">
      <div className="bg-[#f2f2f2] p-6 rounded-lg hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out h-full group">
        {/* Fixed Height Content Structure */}
        <div className="h-32 flex flex-col">
          {/* Title with External Link Arrow - Fixed Height */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-foreground/90 transition-colors duration-200 flex-grow line-clamp-2 pr-2">
              {tweet.title}
            </h3>
            <div className="flex-shrink-0 w-6 h-6 flex items-start justify-center mt-1">
              <svg
                className="w-5 h-5 text-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex-1">
            <p className="text-base text-foreground/70 group-hover:text-foreground/80 transition-colors duration-200 leading-relaxed italic line-clamp-3">
              {tweet.tagline}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
} 