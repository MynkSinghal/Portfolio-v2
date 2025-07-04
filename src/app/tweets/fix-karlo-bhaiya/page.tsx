
import { Metadata } from 'next';
import TweetLayout from '@/components/tweet-layout';

export const metadata: Metadata = {
  title: 'Fix Karlo Bhaiya - Why India\'s Repair Culture Is an Economic Superpower',
  description: 'Walk down any Indian street. You\'ll find more repair shops than Starbucks, more mochi stalls than McDonald\'s. We don\'t say "replace it." We say "chalo, fix karlo." And that one phrase? It powers a silent economic engine bigger than most people think.',
  keywords: ['India', 'repair culture', 'jugaad', 'circular economy', 'street vendors', 'sustainability', 'Dharavi', 'recycling', 'economic engine'],
  authors: [{ name: 'Mayank Singhal' }],
  openGraph: {
    title: 'Fix Karlo Bhaiya - Why India\'s Repair Culture Is an Economic Superpower',
    description: 'Walk down any Indian street. You\'ll find more repair shops than Starbucks, more mochi stalls than McDonald\'s. We don\'t say "replace it." We say "chalo, fix karlo." And that one phrase? It powers a silent economic engine bigger than most people think.',
    type: 'article',

    authors: ['Mayank Singhal'],
    tags: ['India', 'repair culture', 'jugaad', 'circular economy', 'street vendors', 'sustainability', 'Dharavi', 'recycling', 'economic engine'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Karlo Bhaiya - Why India\'s Repair Culture Is an Economic Superpower',
    description: 'Walk down any Indian street. You\'ll find more repair shops than Starbucks, more mochi stalls than McDonald\'s. We don\'t say "replace it." We say "chalo, fix karlo." And that one phrase? It powers a silent economic engine bigger than most people think.',
    creator: '@mayankbuilds',
  },
};

export default function FixKarloBhaiyaTweet() {
  return (
    <TweetLayout 
      tweetSlug="fix-karlo-bhaiya" 
      tweetTitle="Fix Karlo Bhaiya" 
    >
      <div className="space-y-6">
        <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg">
          <p>
            "The West throws. India fixes. The result? A billion-dollar economy hiding in plain sight."
          </p>
        </blockquote>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">👀 Why "Fix Karlo" Is India's Real Startup</h2>
          <p>
            Walk down any Indian street.
            You'll find more repair shops than Starbucks, more mochi stalls than McDonald's.
            We don't say "replace it." We say "chalo, fix karlo."
            And that one phrase? It powers a silent economic engine bigger than most people think.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>India's real unicorns don't pitch on Shark Tank. They're patching your chappals under the flyover.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🎯 What's Inside (And Why It Hits Different)</h2>
          <p>
            This isn't a sob story about scarcity.
            It's a masterclass in <em>resourceful abundance</em> - how India's "fix it first" mindset fuels jobs, innovation, and even climate wins.
            You'll see why repair is not just a backup plan - it's a billion-dollar blueprint for economic continuity.
          </p>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🛠️ The Repair Economy: India's Hidden Billion-Dollar Engine</h2>
          <p>
            India's repair sector is a financial beast.
            Electronics repair alone? $20 billion by next year.
            Add auto parts, cobblers, phone shops, and the recycling mafia - you've got a parallel economy that outlasts recessions and outsmarts planned obsolescence.
          </p>
          <p className="mt-4">
            Every time you patch a phone or mend a shoe, you're plugging into a system that employs millions - and keeps the country running when everything else stalls.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>Every "fix karlo, bhaiya" is a GDP boost in disguise.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">💥 Jugaad {'>'} Junk: Why We Don't Throw, We Tinker</h2>
          <p>
            In the West, broken means bin.
            In India, broken means "let's see what we can salvage."
            Jugaad isn't just a meme - it's an operating system.
            Cobblers swap soles, mobile-wallas mix and match parts from three brands, and even the Tata Nano ($2,000 car) was born from frugal, fix-first thinking.
          </p>
          <p className="mt-4">
            When you run on scarcity, you build muscle for innovation.
            And that muscle? It's worth billions.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>Jugaad isn't a shortcut. It's India's version of R&D.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🧵 Mochi to Mobile: The Street-Level Repair Mafia</h2>
          <p>
            Think mochi = just shoes?
            Wrong. Mochis are legacy coders - fixing, adapting, and now launching brands like "Ramchet Mochi" online.
            Meanwhile, India's 80,000+ phone repair shops are the new digital mandis.
            They're not just fixing tech - they're keeping families connected, businesses alive, and e-waste out of landfills.
          </p>
          <p className="mt-4">
            This is not nostalgia. It's the blueprint for a parallel, people-powered supply chain.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>India's street repairers are the original D2C founders.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🔍 Dharavi: Where Waste Becomes Wealth</h2>
          <p>
            Dharavi isn't just a slum.
            It's Asia's recycling HQ, processing 80% of Mumbai's plastic waste.
            Here, every discarded bottle is a business opportunity.
            From mattress stuffing to chemical drums, nothing dies - everything gets a second life.
          </p>
          <p className="mt-4">
            This isn't charity. It's the purest form of circular economy - run by entrepreneurs in flip-flops.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>Dharavi turns trash into cash, daily.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🎭 Repair = Stigma? The Status Game Nobody Talks About</h2>
          <p>
            Here's the paradox:
            Repair work keeps India ticking, but it's still looked down on.
            Cobblers, mechanics, waste collectors - they're the backbone, but treated like background noise.
            Yet, when crisis hits (hello, COVID), these are the folks who adapt, survive, and even start new micro-businesses in record time.
          </p>
          <p className="mt-4">
            Maybe it's time we stop seeing repair as "low-status" and start seeing it as "future-proof."
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>In India, repair is recession-proof. Status? That's up for repair.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">⚡ The Emotional Economy: Why We Hold On</h2>
          <p>
            In India, a mended bicycle isn't just a ride - it's a family's daily bread.
            A fixed phone isn't just tech - it's a lifeline for a migrant worker.
            We don't just repair objects; we repair memories, livelihoods, and trust.
          </p>
          <p className="mt-4">
            That's why "fix karlo" wins against "buy new."
            It's not just saving money. It's saving <em>stories.</em>
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p><strong>Repair is the original emotional investment.</strong></p>
          </blockquote>
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <h2 className="text-2xl font-bold mb-4">🚪 Your Move: Still Throwing, or Ready to Fix?</h2>
          <p>
            Next time something breaks, pause before you bin it.
            Ask yourself: Is this just about saving cash - or saving a system?
            Because in India, every repair is a small revolution.
          </p>
          <blockquote className="border-l-4 border-foreground/20 pl-4 italic text-foreground/80 bg-foreground/5 p-4 rounded-r-lg mt-4">
            <p>What's the last thing you fixed - and what did it really save?</p>
          </blockquote>
        </div>


      </div>
    </TweetLayout>
  );
} 