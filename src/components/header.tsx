import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <Link href="/" className="font-medium text-lg">
          
        </Link>
      </div>
    </header>
  );
}
