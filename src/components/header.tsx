import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="font-medium text-lg hover:text-foreground/80 transition-colors"
        >
          <span className="font-bold">M</span>ayank
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
