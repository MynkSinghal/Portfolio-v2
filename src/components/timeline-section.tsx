export default function TimelineSection() {
  const experiences = [
    {
      id: 1,
      title: "Publicis Sapient",
      role: "Intern - Engineering Python",
      period: "May 2025 - Present"
    },
    {
      id: 2,
      title: "MUJ ACM",
      role: "Team Head",
      period: "2023-2024"
    },
    {
      id: 3,
      title: "Lavisuals",
      role: "Founder",
      period: "2021-2023"
    }
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
              <div className="font-medium text-base">{exp.title}</div>
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
