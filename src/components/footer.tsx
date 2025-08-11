export default function Footer() {
  const links = [
    { href: "/blog", label: "Blogs" },
    { href: "/threads", label: "Threads" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
  ];

  return (
    <footer className="relative mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10">
          {/* Top sheen */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_20%)] pointer-events-none" />
          {/* Soft grid (Bauhaus) */}
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px] [color:hsl(var(--foreground))]" />

          <div className="relative px-6 md:px-10 py-10 md:py-14">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
              <div className="flex-1 min-w-[240px] lg:pr-10">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s build something thoughtful.</h3>
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:justify-end">
                {links.map((l) => (
                  <a key={l.label} href={l.href} className="group relative inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground">
                    <span className="relative">{l.label}</span>
                    <span className="h-px w-4 bg-foreground/30 group-hover:w-6 group-hover:bg-foreground transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-foreground/10 flex items-center justify-center">
              <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Mayank Singhal</div>
            </div>
          </div>

          {/* Subtle animated gradient ring */}
          <div className="pointer-events-none absolute -inset-[1px] rounded-3xl [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_55%,transparent_75%)] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(25,182,243,0.15),rgba(255,255,255,0)_45%,rgba(144,97,249,0.15)_60%,rgba(255,209,71,0.12)_85%,rgba(25,182,243,0.15))] animate-[spin_12s_linear_infinite]" />
        </div>
      </div>
    </footer>
  );
}
