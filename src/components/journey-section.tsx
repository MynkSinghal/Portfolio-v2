import { parseText } from '@/lib/text-parser';

export default function JourneySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 tracking-tight uppercase">
          My Real Journey
        </h2>

        <div className="space-y-10 text-foreground/90">
          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 text-foreground">
              🎮 {parseText("<bold>Level One: Where It All Began</bold>")}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Picture this: it's 2019, lockdown world, 15-year-old me stumbles into Discord and {parseText("<italic>accidentally builds an empire.</italic>")}
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              Started by flipping {parseText("<bold>Pokémon cards and meme currencies</bold>")} for laughs. That first sale? {parseText("<italic>Electric</italic>")}. Like getting a shiny Charizard with pizza money.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              What started as side hustle cash quickly turned into {parseText("<bold>$1,000 MRR</bold>")}, all before I knew what APIs or business models even were.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 my-6 text-foreground/80 italic">
              No React. No roadmap. Just {parseText("<italic>curiosity and chaos.</italic>")}
            </blockquote>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 text-foreground">
              🚀 {parseText("<bold>Made It Look Cool. Made It Make Money.</bold>")}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Next stop: {parseText("<bold>LaVisuals</bold>")} — a global creative community born from Discord vibes and anime obsession. We designed animated banners, 3D avatars, profile pics, and {parseText("<bold>custom trading cards</bold>")} for creators, YouTubers, and anime lovers.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              Scaled a team to {parseText("<bold>1,000+ artists</bold>")}, raised funds from the {parseText("<bold>Anime Soul</bold>")} Discord company, launched our site, and shipped the {parseText("<bold>biggest anime card game on Discord</bold>")} — complete with spicy visuals, sick animations, and crazy community energy.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed">
              <li>Built + designed the Anime Soul cards</li>
              <li>Collaborated with {parseText("<bold>100+ card makers & animators</bold>")}</li>
              <li>Ran courses, launched a YouTube channel, helped creators start their own creative businesses</li>
              <li>Inspired a new wave of online artists who actually started earning</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              What started as a Discord server became a {parseText("<bold>design dojo</bold>")}. Nobody else was doing it like this.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-medium mb-4 text-foreground">
              🎯 {parseText("<bold>Bonus Levels: The Remix Era</bold>")}
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Tried a bit of everything — and I mean {parseText("<italic>everything</italic>")}.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed">
              <li>Built bots, ran gaming servers, even hosted Minecraft tourneys (till Discord banned us... {parseText("<italic>oops</italic>")})</li>
              <li>Created custom game nights & investment servers</li>
              <li>Got the verified bot dev badge</li>
              <li>Learned APIs, JavaScript, built websites, and shipped bots for our community</li>
              <li>Made products that went viral, some that flopped ({parseText("<italic>hard</italic>")}), and some that taught me more than any course ever could</li>
            </ul>
            <p className="text-sm md:text-base leading-relaxed mt-4">
              Some stuff clicked. A lot didn't. But every failure gave me {parseText("<bold>XP</bold>")}.
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base leading-relaxed">
              {parseText("<bold>Still vibing. Still building. Still flipping chaos into cool stuff.</bold>")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
