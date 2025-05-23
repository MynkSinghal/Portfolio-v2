import { parseText } from '@/lib/text-parser';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          🔥 {parseText("<bold>Building stuff that doesn't suck</bold>")}
        </h1>

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-foreground/80 mb-4">
          I'm {parseText("<bold>Mayank</bold>")} — been shipping wild ideas since I was 13. From flipping Dragon Ball Z games on eBay to scaling communities of 100K+ builders.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-foreground/80">
          {parseText("<italic>Currently vibing</italic>")} between projects, documenting the chaos, and helping others build their dreams into reality.
        </p>
      </div>
    </section>
  );
}
