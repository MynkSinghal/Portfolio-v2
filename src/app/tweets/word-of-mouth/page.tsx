import TweetLayout from "@/components/tweet-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word of Mouth - How India's Real Jobs Get Filled | Mayank Singhal",
  description: "Everyone's busy optimizing their LinkedIn profiles. But here's the truth: Most jobs in India don't even touch LinkedIn. They're born in living rooms, barber shops, and WhatsApp groups. 85-93% of India's workforce is informal, and the referral system beats any algorithm.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/tweets/word-of-mouth",
  },
  openGraph: {
    title: "Word of Mouth - How India's Real Jobs Get Filled",
    description: "85-93% of India's workforce is informal. 400+ million people work outside the 'system'. Most hiring happens through WhatsApp groups, not LinkedIn. Welcome to India's original hiring hack: referral beats résumé, every single time.",
    type: "article",
    url: "https://www.mayanksinghal.tech/tweets/word-of-mouth",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Word of Mouth - India's Real Job Portal"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word of Mouth - How India's Real Jobs Get Filled",
    description: "85-93% of India's workforce is informal. Most hiring happens through WhatsApp groups, not LinkedIn. The referral system beats any algorithm.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "India Jobs",
    "Informal Economy",
    "WhatsApp Jobs",
    "Referral System",
    "LinkedIn vs Reality",
    "Indian Workforce",
    "Job Search India",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

export default function WordOfMouthTweetPage() {
  return (
    <TweetLayout
      tweetSlug="word-of-mouth"
      tweetTitle="💥 India's Real Job Portal? Your neighbor's WhatsApp, Not LinkedIn"
    >
      <div className="text-base md:text-lg leading-relaxed space-y-6">
        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p>
            "In India, the best HR manager is your neighbor's chai-wala. No algorithm, no ATS - just trust."
          </p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          👀 LinkedIn? Not Even Invited to the Party
        </h2>

        <p>
          Everyone's busy optimizing their LinkedIn profiles. But here's the truth:<br />
          <strong>Most jobs in India don't even touch LinkedIn.</strong>
        </p>

        <p>
          They're born in living rooms, barber shops, and WhatsApp groups.<br />
          If you're waiting for a recruiter's email, you're already too late.
        </p>

        <p>
          Welcome to the original Indian hiring hack:<br />
          <em>Referral beats résumé. Every. Single. Time.</em>
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>Trust isn't a "soft skill" - it's the entire damn system.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🎯 Why This Post? Because You're Probably Ignoring India's Real MVP
        </h2>

        <p>Let's get real:</p>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          <li>85–93% of India's workforce is <em>informal</em></li>
          <li>400+ million people work outside the "system"</li>
          <li>Most hiring happens through "jugaad," not job boards</li>
        </ul>

        <p>
          This post will show you:<br />
          <strong>Why word-of-mouth is India's OG HR tech - and why it's not changing, no matter how many apps launch.</strong>
        </p>

        <p>
          You'll walk away seeing "job search" through the eyes of an aunty, not a white-collar warrior.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>If you're not in the WhatsApp group, you're invisible.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🔍 The 400 Million Club: Where LinkedIn Can't Enter
        </h2>

        <p>
          India's informal sector is the world's biggest.<br />
          That's not a flex - it's a reality check.
        </p>

        <p>
          You've got cooks, drivers, masons, gig workers - all hired without a single CV.<br />
          Their job interviews? "Kaam kaisa karta hai?" asked over chai.
        </p>

        <p>
          Forget "networking events." Here, the watchman's cousin is your next hire.<br />
          The contractor's village call is the real "talent pipeline."
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>The biggest job portal in India has no login page.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🧃 WhatsApp Groups: India's Underground HR Engine
        </h2>

        <p>
          Corporate India loves its HRMS dashboards.<br />
          But real hiring? It's happening in society WhatsApp groups.
        </p>

        <p>
          <em>"Need maid? Ping the group."</em><br />
          <em>"Looking for a driver? Ask the security guard."</em>
        </p>

        <p>Referral chains are wild:</p>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          <li>A cook brings a cleaner</li>
          <li>Who brings a driver</li>
          <li>Who brings a gardener</li>
        </ul>

        <p>
          It's not a "platform." It's a living, breathing, trust-based web.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"Client ke client se kaam mila" is the only algorithm that matters.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🧠 Why Women Dominate This Referral Economy
        </h2>

        <p>
          You think LinkedIn is "inclusive"?<br />
          Meet SEWA: 3.2 million women, 18 states, zero résumés.
        </p>

        <p>
          Domestic work is run by women, for women.<br />
          Hiring happens through society whispers, not job fairs.
        </p>

        <p>
          Official stats say 4.75 million domestic workers.<br />
          Unofficial? Try 20–80 million.<br />
          Referral is the lifeblood - and the safety net.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>In India, "networking" means your maid's cousin needs work.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          💥 Why Apps Keep Failing: The Trust Gap
        </h2>

        <p>
          Apna, Urban Company, WorkIndia - all promise to "disrupt" hiring.
        </p>

        <p>But here's what they can't hack:</p>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          <li>Trust is built in person, not on ratings</li>
          <li>Speed matters (need a job <em>tomorrow</em>, not next week)</li>
          <li>English isn't the hiring language</li>
          <li>Fake offers and middlemen plague digital platforms</li>
        </ul>

        <p>
          The watchman's word?<br />
          That's the only background check anyone needs.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"Kaam dekha hai?" beats "degree kya hai?" every time.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🍔 Formalization Meets Government
        </h2>

        <p>
          The government is finally catching up:<br />
          e-Shram, ONDC, new labour codes - all trying to digitize trust.
        </p>

        <p>
          But here's the kicker:<br />
          Formalization adds social security, not new networks.<br />
          The hiring style? Still gossip, still WhatsApp, still "kaam dekha hai?"
        </p>

        <p>
          India's future of work will be digital, but the soul will always be human.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>You can't code what's built on relations, gossip, and trust.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🚪 Your Move: Are You Ready to See the Real India?
        </h2>

        <p>
          Next time you're updating your LinkedIn, ask yourself:<br />
          Who in your building, your society, your neighborhood might need work?
        </p>

        <p>
          Because in India, the best opportunities aren't posted online.<br />
          They're shared over chai, whispered in corridors, and passed through the most powerful network of all: trust.
        </p>

        <p className="text-xl font-semibold">
          <strong>What's the last job you got through a referral? Share your story below.</strong>
        </p>
      </div>
    </TweetLayout>
  );
} 