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
            (spoiler: it's messier than my code)
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
                Picture this: it's 2019, lockdown world, 15-year-old me stumbles into Discord and {parseText("<italic>accidentally builds an empire.</italic>")}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border-l-2 border-yellow-500/50">
                <p className="text-sm md:text-base leading-relaxed">
                  Started flipping {parseText("<bold>Pokémon cards and meme currencies</bold>")} for laughs.
                  <br />
                  That first sale? {parseText("<italic>Electric</italic>")}. 
                  <br />
                  Like getting a shiny Charizard with pizza money.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed">
                What started as side hustle cash quickly turned into {parseText("<bold>$1,000 MRR</bold>")}, all before I knew what APIs or business models even were.
              </p>

              <blockquote className="text-center py-6 border-y border-foreground/10">
                <p className="text-lg md:text-xl font-medium italic text-foreground/80">
                  "No React. No roadmap. Just {parseText("<italic>curiosity and chaos.</italic>")}"
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
                Next stop: {parseText("<bold>LaVisuals</bold>")} — a global creative community born from Discord vibes and anime obsession.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground/90">What we built:</h4>
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

              <p className="text-base leading-relaxed italic text-foreground/70">
                *Nobody else was doing it like this. We basically invented a whole vibe.
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

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200">The Experiment List:</h4>
                <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
                  <li>• Built bots, ran gaming servers</li>
                  <li>• Hosted Minecraft tourneys (till Discord banned us... {parseText("<italic>oops</italic>")})</li>
                  <li>• Created investment servers & game nights</li>
                  <li>• Got the verified bot dev badge 🏆</li>
                  <li>• Made products that went viral</li>
                  <li>• Made products that flopped ({parseText("<italic>hard</italic>")})</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed">
              {parseText("<bold>Took some L's, took some learning...</bold>")}
              </p>
            </div>
          </div>

          {/* Current Status */}
          
        </div>
      </div>
    </section>
  );
}
