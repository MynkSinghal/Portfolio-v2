import ThreadLayout from "@/components/thread-layout";
import ThreadCard from "@/components/thread-card";
import { parseThreadContent } from "@/lib/thread-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Train Ka Tashan - How the Indian Train Carries More Than Just People | Mayank Singhal",
  description: "From sleeper class theatrics to pantry car economics, Indian Railways isn't just transport-it's a moving sociology lesson. Every journey is a story of class divides, micro-economies, and unspoken social contracts that keep 1.4 billion people moving on steel tracks.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/threads/train-ka-tashan",
  },
  openGraph: {
    title: "Train Ka Tashan - How the Indian Train Carries More Than Just People",
    description: "From sleeper class theatrics to pantry car economics, Indian Railways isn't just transport-it's a moving sociology lesson.",
    type: "article",
    url: "https://www.mayanksinghal.tech/threads/train-ka-tashan",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Train Ka Tashan - Indian Railways Story"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Train Ka Tashan - How the Indian Train Carries More Than Just People",
    description: "From sleeper class theatrics to pantry car economics, Indian Railways isn't just transport-it's a moving sociology lesson.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "Indian Railways",
    "Train Travel",
    "Social Commentary",
    "Indian Culture",
    "Class Divide",
    "Travel Stories",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

const threadContent = `🚉 Indian trains don't just move people.
They carry dreams, dabbas, vendors, gossip, class divides - and India's soul.
This isn't a transport system. It's a moving sociology lesson.

Here's how Indian Railways actually runs India.
(1/n)

🛏 Sleeper class isn't just a coach.
It's India's middle-class theatre.
Spilled chai. Steel tiffins. Cracked windows. Snoring uncles.
A 16-hour crash course in trust, tolerance, and thermocol pillows.
(2/n)

🥚 The pantry guy? The egg puff vendor?
They aren't staff - they're part of the train's unofficial microeconomy.
Every ride funds thousands of small businesses - one chai at a time.
(3/n)

🧳 Trains are India's migration lifeline.
From Bihar to Surat. UP to Punjab.
Students, workers, dreamers - packed into General class - chasing survival, not scenery.

They're not just commuting. They're relocating futures.
(4/n)

👑 First AC to General - Indian trains literally sell class.
Your berth decides legroom, lighting, safety, and sometimes dignity.
Same destination, 6 levels of inequality.
That's India in motion.
(5/n)

🪑 Where else can a tech CEO, a CRPF jawan, and a temple-going dadi sit cross-legged across each other and share mango pickle?
Trains break barriers. But only for a moment.

By the next stop, class creeps back in.
(6/n)

🧼 The real unsung heroes?
Train station cleaners. Bedroll guys. The guy yelling "garam chaiii."
They're India's service class - keeping things moving, cleaning up what gets left behind.
(7/n)

🧍‍♀️ Indian trains also tell stories of gendered navigation.
Where to sit. Who to avoid. What to pretend not to hear.
Mobility isn't just distance - it's a dance with discomfort for every woman onboard.
(8/n)

🧘🏽‍♂️ But there's magic too.
The stranger who offers paratha. The aunty who watches your bags.
The toddler giggling under the middle berth.
You arrive tired - but oddly restored.
(9/n)

🧠 Indian Railways isn't just a ministry.
It's a mood, a memory machine, a mobile economy.
It connects not just cities - but stories.

If you want to study India, don't start with a textbook.
Start with a ticket.
(10/n)`;

export default function TrainKaTashanThreadPage() {
  const threads = parseThreadContent(threadContent);

  return (
    <ThreadLayout
      threadSlug="train-ka-tashan"
      title="Train Ka Tashan - How the Indian Train Carries More Than Just People"
      description="From sleeper class theatrics to pantry car economics, Indian Railways isn't just transport-it's a moving sociology lesson."
    >
      {threads.map((thread, index) => (
        <ThreadCard
          key={thread.threadNumber}
          content={thread.content}
          threadNumber={thread.threadNumber}
          isLast={index === threads.length - 1}
        />
      ))}
    </ThreadLayout>
  );
} 