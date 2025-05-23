import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <Link href="/" className="font-medium text-lg hover:text-foreground/80 transition-colors">
          <span className="font-bold">M</span>ayank
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Currently building</span>
          </div>
        </div>
      </div>
    </header>
  );
}
