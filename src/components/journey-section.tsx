import { parseText } from '@/lib/text-parser';

export default function JourneySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 pt-6 md:pt-8 lg:pt-12 pb-8 md:pb-10 lg:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight uppercase">
            My Real Journey
          </h2>
          <p className="text-base text-foreground/60 italic">
            (spoiler: it's like a TED Talk written at 3 AM)
          </p>
        </div>

        <div className="space-y-12 text-foreground/90">
          {/* Level One */}
          <div className="border-l-4 border-blue-500/30 pl-6">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground">
              🎮 {parseText("<bold>Level One: Where It All Began</bold>")}
            </h3>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
              Picture this: it's 2019, lockdown hits, and 15-year-old me stumbles into Discord — just messing around — and ends up {parseText("<italic>building a community that actually took off.</italic>")}
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Started flipping {parseText("<bold>Pokémon cards and in-game currencies</bold>")} for laughs.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                First time someone paid? {parseText("<italic>Unreal..</italic>")}
              </p>

              <blockquote className="text-center py-6 border-y border-foreground/10">
                <p className="text-lg md:text-xl font-medium italic text-foreground/80">
                  "No roadmap. Just {parseText("<italic>curiosity and chaos.</italic>")}"
                </p>
                <p className="text-sm text-foreground/50 mt-2">— me, absolutely winging it (and somehow it worked)</p>
              </blockquote>
            </div>
          </div>

          {/* Level Two */}
          <div className="border-l-4 border-green-500/30 pl-6">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground">
              🚀 {parseText("<bold>Made It Look Cool. Made It Make Money.</bold>")}
            </h3>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Next stop: {parseText("<bold>LaVisuals</bold>")} — a global creative community born from Discord and anime obsession.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground/90">What came out of it:</h4>
                  <ul className="text-sm space-y-1 text-foreground/70">
                    <li>• Animated banners that slapped</li>
                    <li>• 3D avatars with personality</li>
                    <li>• Custom trading cards (yes, really)</li>
                    <li>• The biggest anime card game on Discord</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground/90">The numbers:</h4>
                  <ul className="text-sm space-y-1 text-foreground/70">
                    <li>• {parseText("<bold>1,000+ artists</bold>")} in our network</li>
                    <li>• {parseText("<bold>100+ card makers</bold>")} collaborating</li>
                    <li>• Funding from {parseText("<bold>Anime Soul</bold>")}</li>
                    <li>• One very proud 16-year-old</li>
                  </ul>
                </div>
              </div>

              

              <p className="text-base md:text-lg leading-relaxed">
                {parseText("It began as <italic>just-for-fun</italic>. Before I knew it, there were <bold>late-night orders</bold>, <bold>DMs</bold>, and <bold>a wave of demand</bold> I didn't know what to do with.")}
              </p>

              <p className="text-base leading-relaxed italic text-foreground/70 mt-4">
                *Nobody else was doing it like this. Basically invented a whole vibe.
              </p>
            </div>
          </div>

          {/* Level Three */}
          <div className="border-l-4 border-purple-500/30 pl-6">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-foreground">
              🎯 {parseText("<bold>Chaos, Crashes & Comebacks</bold>")}
            </h3>
            
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Tried a bit of everything — and I mean {parseText("<italic>everything</italic>")}.
              </p>

              <div className="space-y-3 my-6 pl-4 border-l-2 border-foreground/10">
                <div className="text-base text-foreground leading-relaxed">
                  Built bots, ran gaming servers
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  Hosted Minecraft tourneys (till Discord banned us... {parseText("<italic>oops</italic>")})
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  Created investment servers & game nights
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  Got the verified bot dev badge {parseText("<bold>🏆</bold>")}
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  Made products that went viral
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  Made products that flopped ({parseText("<italic>hard</italic>")})
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed font-medium">
              {parseText("<bold>Took some L's, Took some learning...</bold>")}
              </p>
            </div>
          </div>

          {/* Current Status */}
          
        </div>
      </div>
    </section>
  );
}
