import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="mb-4">
        <Image
          src="https://ext.same-assets.com/3023063085/1132143373.svg"
          alt="Framer Logo"
          width={40}
          height={40}
        />
      </div>

      <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>

      <div className="text-muted-foreground mb-6">
        The page you are looking for does not exist or may have been moved.
      </div>

      <Link
        href="/"
        className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
}
