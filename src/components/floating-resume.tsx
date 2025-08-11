"use client";

export default function FloatingResume() {
  return (
    <div className="fixed top-4 right-4 z-[60]">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors bg-white/60 dark:bg-white/10 backdrop-blur-md border border-foreground/10 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      >
        <span className="absolute -inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0)_40%),linear-gradient(120deg,rgba(0,0,0,0.08),rgba(0,0,0,0)_30%)] opacity-70" aria-hidden />
        <span className="relative">Resume</span>
      </a>
    </div>
  );
}


