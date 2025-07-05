import TweetLayout from "@/components/tweet-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures | Mayank Singhal",
  description: "93% of Indian students can't name more than 7 career options. Not because they're lazy-because nobody ever showed them the map. At 15, you pick Science, Arts, or Commerce blindfolded. India needs 1.4 million career counselors. We have maybe 1 lakh. The system creates 'qualified confusion'-kids know facts, not futures.",
  alternates: {
    canonical: "https://www.mayanksinghal.tech/tweets/marks-or-misdirection",
  },
  openGraph: {
    title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures",
    description: "93% of Indian students can't name more than 7 career options. India needs 1.4 million career counselors, but we have maybe 1 lakh. The system creates 'qualified confusion'-kids know facts, not futures.",
    type: "article",
    url: "https://www.mayanksinghal.tech/tweets/marks-or-misdirection",
    authors: ["Mayank Singhal"],
    images: [{
      url: "https://www.mayanksinghal.tech/banner.png",
      width: 1200,
      height: 630,
      alt: "Marks or Misdirection - India's Education System"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marks or Misdirection - When Schools Teach Facts, But Hide The Futures",
    description: "93% of Indian students can't name more than 7 career options. The system creates 'qualified confusion'-kids know facts, not futures.",
    images: ["https://www.mayanksinghal.tech/banner.png"],
  },
  keywords: [
    "India Education",
    "Career Guidance",
    "Student Counseling",
    "Career Options",
    "Indian Schools",
    "Education System",
    "Career Clarity",
    "Mayank Singhal",
  ],
  authors: [{ name: "Mayank Singhal", url: "https://www.mayanksinghal.tech" }],
};

export default function MarksOrMisdirectionTweetPage() {
  return (
    <TweetLayout
      tweetSlug="marks-or-misdirection"
      tweetTitle="💥 Padhai Toh Hui, Par Samajh Kya Aaya?"
    >
      <div className="text-base md:text-lg leading-relaxed space-y-6">
        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p>
            "India's teens know seven careers. Out of 250+. That's not ignorance - that's system design."
          </p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          👀 The Career Guidance Mirage: Why Nobody's Telling You What's Possible
        </h2>

        <p>
          You know how everyone says, "Beta, follow your passion"?<br />
          Now ask them to name 10 careers.<br />
          Watch the silence.
        </p>

        <p>
          Here's the real twist:<br />
          <strong>93% of Indian students can't name more than 7 career options.</strong><br />
          Not because they're lazy - because nobody ever showed them the map.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>This isn't a lack of ambition. It's a lack of exposure, baked into the system.</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🎭 The Stream Trap: Choose Your Fate - Blindfolded
        </h2>

        <p>
          At 15, you pick Science, Arts, or Commerce.<br />
          It's like picking a cricket team without knowing who plays what position.
        </p>

        <p>
          Why?<br />
          Because schools hand you a menu, but never the ingredients.
        </p>

        <p>
          <strong>Science and Arts hog 40% each. Commerce? Stuck at 14% for a decade.</strong><br />
          Not because students love periodic tables or poetry - but because "marks ke hisaab se le lo, beta."
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"Conveyor-belt education: You don't choose your stream. Your stream chooses you."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          💥 The Counseling Desert: 1 Lakh Counselors for 315 Million Kids
        </h2>

        <p>
          India needs 1.4 million career counselors.<br />
          We have maybe 1 lakh.<br />
          That's one counselor for every 1000+ students - the recommended is 1:250.
        </p>

        <p>
          So, who's guiding your future?<br />
          Mostly, nobody.<br />
          When guidance does show up, it's a one-time "career day" - not a real roadmap.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"You're told to pick a path, but nobody hands you a torch."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🔄 Engineering: The Default, Not the Dream
        </h2>

        <p>
          Why does every Science kid end up in BTech?<br />
          Because it's the only door anyone points to.
        </p>

        <p>
          12 lakh kids wrote JEE.<br />
          Only 10% of engineering grads will land jobs.<br />
          Even at IITs, placements are dropping.
        </p>

        <p>
          Mechanical Engineering seats go empty.<br />
          Computer Science is packed - not by passion, but by panic.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"Safe choices are just the ones you've heard about. Not the ones you want."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🧠 Commerce: The Stream Nobody Sells
        </h2>

        <p>
          Commerce has been stuck at 14% forever.<br />
          Not because it's boring - but because nobody markets its magic.
        </p>

        <p>
          Ask a student: Commerce = CA or MBA, right?<br />
          But fintech, analytics, digital marketing?<br />
          Blank stares.
        </p>

        <p>
          Even though 70% of women commerce grads are employable, the stream still feels "invisible."
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"If you don't know the menu, you'll always order the same thali."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🔍 Dreams Deferred: When System Design Wastes Talent
        </h2>

        <p>
          20% of youth have zero career clarity.<br />
          Half don't have a single role model in their dream field.
        </p>

        <p>
          Kids switch streams after results, drop out of engineering, or finish degrees and say, "Yeh toh main nahi karna chahta tha."
        </p>

        <p>
          Every switch is wasted time, lost money, and broken confidence.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"The system doesn't just confuse you. It delays your dreams."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          💥 Dropout Domino: When Confusion = Exit
        </h2>

        <p>
          India's secondary school dropout rate? 12.6%.<br />
          In Punjab (where guidance exists), dropouts are 1.5%.<br />
          In the Northeast (where it doesn't), it's 25%+.
        </p>

        <p>
          Poverty matters, yes.<br />
          But so does career confusion.<br />
          Kids don't leave because they're weak - they leave because they see no path.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"When the map is missing, even the best traveler gets lost."</strong></p>
        </blockquote>

        <hr className="border-foreground/20 my-8" />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
          🚪 So, What's the Point of School If You Never Find Your Thing?
        </h2>

        <p>
          We built an education system that creates "qualified confusion."<br />
          Kids know facts, not futures.
        </p>

        <p>
          The fix isn't more marks or harder exams.<br />
          It's real exposure, real counselors, and real talk about what's possible.
        </p>

        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p><strong>"You can't follow your passion if nobody ever shows you what it looks like."</strong></p>
        </blockquote>

        
      </div>
    </TweetLayout>
  );
} 