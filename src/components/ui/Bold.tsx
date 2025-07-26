import React from "react";

interface BoldProps {
  children: React.ReactNode;
}

export default function Bold({ children }: BoldProps) {
  return <strong className="font-bold">{children}</strong>;
}
