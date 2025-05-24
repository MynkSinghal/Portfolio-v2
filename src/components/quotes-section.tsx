"use client";

import { useState, useEffect } from "react";
import quotesData from "@/data/quotes.json";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Get a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  }, []);

  if (!currentQuote) {
    return null; // or a loading state
  }

  return (
    <section className="pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-foreground/90 leading-relaxed mb-6 italic">
              "{currentQuote.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-foreground/20"></div>
              <cite className="text-sm md:text-base text-foreground/60 font-medium not-italic">
                {currentQuote.author}
              </cite>
              <div className="w-8 h-px bg-foreground/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 