import { parseText } from '@/lib/text-parser';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
          🔥 {parseText("<bold>Making Chaos Look Cool</bold>")}
        </h1>

        <p className="text-base md:text-lg leading-relaxed max-w-3xl text-foreground/80 mb-4">
          I'm {parseText("<bold>Mayank Singhal</bold>")} — been shipping internet chaos since I was 15. From flipping meme coins and Pokémon cards on Discord to building wild communities and earning real cash before I even knew what a "startup" was.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed max-w-3xl text-foreground/80">
          {parseText("Currently dancing between side quests, documenting the madness, and helping others turn their <bold>weird ideas</bold> into working stuff.")}
        </p>
      </div>
    </section>
  );
}
