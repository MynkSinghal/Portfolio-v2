import Bold from "@/components/ui/Bold";
import Italic from "@/components/ui/Italic";
import React from "react";

export function parseText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let keyCounter = 0;

  // Regular expression to match <bold>...</bold> and <italic>...</italic> tags
  const regex = /<(bold|italic)>(.*?)<\/\1>/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      const beforeText = text.slice(currentIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }

    // Add the component based on the tag type
    const tagType = match[1];
    const content = match[2];

    if (tagType === "bold") {
      parts.push(<Bold key={`bold-${keyCounter++}`}>{content}</Bold>);
    } else if (tagType === "italic") {
      parts.push(<Italic key={`italic-${keyCounter++}`}>{content}</Italic>);
    }

    currentIndex = regex.lastIndex;
  }

  // Add remaining text after the last match
  if (currentIndex < text.length) {
    const remainingText = text.slice(currentIndex);
    if (remainingText) {
      parts.push(remainingText);
    }
  }

  return parts.length > 0 ? parts : [text];
}
