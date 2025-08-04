interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      {/* Category Title */}
      <h3 className="text-lg font-semibold mb-4 text-foreground/80">{title}</h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}