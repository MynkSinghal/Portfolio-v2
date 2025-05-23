export default function TimelineSection() {
  const experiences = [
    {
      id: 1,
      title: "Hunter AI",
      role: "Lead Builder",
      period: "2023-2024"
    },
    {
      id: 2,
      title: "Vibe Tools",
      role: "Sole Dev",
      period: "2022-2023"
    },
    {
      id: 3,
      title: "Late Night Jams",
      role: "Hustler",
      period: "2021-2022"
    },
    {
      id: 4,
      title: "Palette Party",
      role: "Founder",
      period: "2024"
    },
    {
      id: 5,
      title: "Glitch Menu",
      role: "Creator",
      period: "2023"
    },
    {
      id: 6,
      title: "Esports School Shipped",
      role: "Founder",
      period: "2021"
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="space-y-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center py-4 border-t border-[#ebebeb] last:border-b"
            >
              <div className="font-medium text-lg">{exp.title}</div>
              <div className="flex items-center space-x-6">
                <span className="text-foreground/60">{exp.role}</span>
                <span className="text-sm text-foreground/50">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
