import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-end">
        <Link
          href="https://www.framer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="mr-2">Made in</span>
          <Image
            src="https://ext.same-assets.com/3667919025/4147411939.png"
            alt="Framer Logo"
            width={16}
            height={16}
          />
          <span className="ml-1">Framer</span>
        </Link>
      </div>
    </footer>
  );
}
