"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
}

export default function TimelineItem({
  company,
  logo,
  role,
  duration,
  location,
  type,
  highlights
}: TimelineItemProps) {
  return (
    <li>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Company Logo and Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#f0f6ff] border-2 border-[#e1e8f0]">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">{company}</h3>
            <div className="flex flex-wrap gap-x-2 text-[#4b5563]">
              <span className="font-medium">{role}</span>
              <span className="text-[#9ca3af]">•</span>
              <span>{type}</span>
            </div>
            <div className="text-sm text-[#6b7280] mt-1">
              {duration} • {location}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="pl-16">
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li 
                key={`${company}-${highlight.slice(0, 20)}`}
                className="text-base text-[#4b5563] flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2" aria-hidden="true" />
                <span className="flex-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </li>
  );
}