import { parseText } from '@/lib/text-parser';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 pt-10 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Main Hook - Big and Bold */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-tight flex items-center gap-3">
            Hey, I'm {parseText("<bold>Mayank</bold>")} 
            <img 
              src="/hi.gif" 
              alt="Waving hand" 
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline-block"
            />
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 font-light italic">
            (yes, another developer who thinks they're different)
          </p>
        </div>

        {/* Punchy Statement */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
             {parseText("I turn <bold>chaos into cool stuff</bold>")}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl">
            — and somehow make it work
          </p>
        </div>

        {/* Status Updates */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">Currently:</span>
            <span className="text-base md:text-lg">Shipping internet chaos since I was 15</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">Previously:</span>
            <span className="text-base md:text-lg">Flipping meme coins & Pokémon cards on Discord</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-sm font-medium text-foreground/50 min-w-[100px]">Always:</span>
            <span className="text-base md:text-lg">Caffeinated and curious</span>
          </div>
        </div>

        {/* The Kicker */}
        <div className="border-l-2 border-foreground/20 pl-6">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-3">
            {parseText("From earning real cash before knowing what a \"startup\" was to helping others turn their <bold>weird ideas</bold> into working stuff.")}
          </p>
          <p className="text-sm text-foreground/50 italic">
            *Plot twist: The weird ideas are usually the best ones
          </p>
        </div>
      </div>
    </section>
  );
}
