"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { parseText } from "@/lib/text-parser";

interface CollapsibleSectionProps {
  title: string;
  emoji: string;
  children: React.ReactNode;
  borderColor?: string;
}

export default function CollapsibleSection({ 
  title, 
  emoji, 
  children,
  borderColor = "border-blue-500/30" 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-l-4 ${borderColor} pl-6`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground flex items-center gap-2">
          <span>{emoji}</span>
          {parseText(`<bold>${title}</bold>`)}
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-auto opacity-40"
          >
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </h3>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}