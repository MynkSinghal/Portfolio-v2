import Image from 'next/image';

interface ExperienceCardProps {
  logo: string;
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

export default function ExperienceCard({
  logo,
  role,
  company,
  duration,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="group relative bg-card hover:bg-card/50 transition-all duration-300 rounded-lg p-6 border border-border">
      {/* Company Logo */}
      <div className="mb-4 relative w-12 h-12">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          className="object-contain"
        />
      </div>

      {/* Role & Company */}
      <h3 className="text-xl font-semibold mb-1">{role}</h3>
      <h4 className="text-lg text-foreground/70 mb-2">{company}</h4>
      
      {/* Duration */}
      <p className="text-sm text-foreground/50 mb-4">{duration}</p>

      {/* Highlights */}
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li 
            key={`highlight-${highlight.slice(0, 20)}-${index}`}
            className="text-sm text-foreground/70 flex items-start gap-2"
          >
            <span className="text-primary">•</span>
            {highlight}
          </li>
        ))}
      </ul>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-all duration-300" />
    </div>
  );
}