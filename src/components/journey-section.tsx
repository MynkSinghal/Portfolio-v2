import { parseText } from '@/lib/text-parser';

export default function JourneySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 tracking-tight uppercase">
          My Real Journey
        </h2>

        <div className="space-y-10 text-foreground/90">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              🎮 {parseText("<bold>Started with the classics</bold>")} — I'm just a guy that loves creating things for others.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Picture this: 13-year-old me discovering the {parseText("<bold>art of the flip</bold>")} when I sold Dragon Ball Z Tenkaichi Budokai 2 in 2009 on eBay. {parseText("<italic>That first sale hit different</italic>")} — like finding a rare drop in your favorite game.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              What started as pocket money turned into my {parseText("<bold>high school empire</bold>")}. Scaled that hustle to {parseText("<bold>$100K/year</bold>")} by expanding the catalog — think of it as building my own marketplace before I even knew what {parseText("<bold>React</bold>")} or {parseText("<bold>APIs</bold>")} were.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              🚀 {parseText("<bold>Then came the real game</bold>")} — been making stuff ever since.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Most recently, I founded {parseText("<bold>buildspace</bold>")} — imagine the largest creative writing workshop, but for builders. We weren't just teaching; we were {parseText("<italic>cultivating a vibe</italic>")} where YouTube creators, EDM producers, and startup founders all shared the same energy.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              The numbers were {parseText("<bold>wild</bold>")}: scaled nights & weekends online to {parseText("<bold>100,000+ students</bold>")}, raised from {parseText("<bold>a16z/YC</bold>")} (yeah, that happened), built a physical campus in SF that felt like a creative monastery, grew content that reached {parseText("<bold>millions</bold>")}, and shipped an {parseText("<bold>AI social product</bold>")} using {parseText("<bold>Next.js</bold>")}, {parseText("<bold>Python</bold>")}, and {parseText("<bold>PostgreSQL</bold>")} to help people find their creative tribe.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Five years of pure {parseText("<bold>flow state</bold>")}. But sometimes the best songs end at their peak. I made the tough call to close it down. Here's a
              <a href="#" className="text-accent hover:underline ml-1">letter I wrote about it</a> — {parseText("<italic>raw and unfiltered</italic>")}.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Buildspace was {parseText("<bold>magic</bold>")}. Like that perfect playlist that just gets you. If you were part of it — {parseText("<bold>thank you</bold>")}. You literally changed our lives.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
              🎯 {parseText("<bold>The remix collection</bold>")} — did a bunch of stuff before.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Founded {parseText("<bold>zipschool</bold>")} (online elementary school for homeschoolers) and grew it to {parseText("<bold>150,000 kids</bold>")} — like building a digital playground with {parseText("<bold>Ruby on Rails</bold>")} and lots of love. 
              
              Then there was {parseText("<bold>Visor</bold>")} — trained a real-time {parseText("<bold>computer vision model</bold>")} that coached you in Overwatch. We got {parseText("<italic>really</italic>")} big actually, then Blizzard banned us (oops 😅). Classic David vs Goliath, except Goliath had lawyers.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Was CTO at {parseText("<bold>Kanga</bold>")} where we built our own {parseText("<bold>ML models</bold>")} to recommend gamers content they'd vibe with — think Spotify for gaming content. Trained {parseText("<bold>open-source deep learning models</bold>")} for esports analytics (lots of {parseText("<bold>TensorFlow</bold>")} and late-night debugging sessions).
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Built random products for {parseText("<bold>League of Legends</bold>")} that hit {parseText("<bold>1M+ users</bold>")} (that dopamine hit was {parseText("<italic>unreal</italic>")}), shipped a dumb {parseText("<bold>AR menu app</bold>")} that went nowhere (but taught me {parseText("<bold>Swift</bold>")} and humility), and built a bunch of other random experiments — some {parseText("<bold>TypeScript</bold>")} here, some {parseText("<bold>Python</bold>")} there, all seasoned with curiosity.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              {parseText("<bold>Some stuff worked out. Most didn't.</bold>")} But every failure was just another track in the learning playlist.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-4">
              Sometimes I write about my {parseText("<bold>epic fails</bold>")} or when things went {parseText("<italic>absolutely right</italic>")}! If you want me to hit you up when I drop new content — {parseText("<bold>drop your email below</bold>")}. No spam, just real stories from the trenches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
