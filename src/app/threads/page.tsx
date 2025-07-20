import { getAllThreads } from "@/data/threads";
import ThreadCard from "@/components/ThreadCard";
import Link from "next/link";
import Header from "@/components/header";

export default function AllThreadsPage() {
  const threads = getAllThreads();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              href="/#threads"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              All Threads
            </h1>
            <p className="text-foreground/60 text-lg">
              A collection of thoughts and observations on various topics.
            </p>
          </header>

          {/* Grid of Threads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threads.map((thread) => (
              <div
                key={thread.id}
                className="transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <ThreadCard thread={thread} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 