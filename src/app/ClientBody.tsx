"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // Preserve existing classes and ensure smoothing
    if (typeof document !== "undefined") {
      document.body.classList.add("antialiased");
    }
  }, []);

  return <div className="antialiased">{children}</div>;
}
