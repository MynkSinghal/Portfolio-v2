"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend & Design",
      description: "Building beautiful, responsive interfaces",
      skills: [
        { name: "HTML", logo: "/logos/html.svg" },
        { name: "CSS", logo: "/logos/css.svg" },
        { name: "React", logo: "/logos/react.svg" },
        { name: "Next.js", logo: "/logos/nextjs.svg" },
        { name: "Tailwind", logo: "/logos/tailwind.svg" },
        { name: "TypeScript", logo: "/logos/typescript.svg" },
      ]
    },
    {
      title: "Backend & Infrastructure",
      description: "Powering applications with robust backends",
      skills: [
        { name: "Python", logo: "/logos/python.svg" },
        { name: "FastAPI", logo: "/logos/fastapi.svg" },
        { name: "Node.js", logo: "/logos/nodejs.svg" },
        { name: "MongoDB", logo: "/logos/mongodb.svg" },
        { name: "Docker", logo: "/logos/docker.svg" },
        { name: "AWS", logo: "/logos/aws.svg" },
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent solutions",
      skills: [
        { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
        { name: "PyTorch", logo: "/logos/pytorch.svg" },
        { name: "LangChain", logo: "/logos/langchain.svg" },
        { name: "OpenCV", logo: "/logos/opencv.svg" },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Essential development tools",
      skills: [
        { name: "Git", logo: "/logos/git.svg" },
        { name: "GitHub", logo: "/logos/github.svg" },
        { name: "VS Code", logo: "/logos/vscode.svg" },
        { name: "Postman", logo: "/logos/postman.svg" },
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 pb-6 md:pb-8 lg:pb-10" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 tracking-tight uppercase">
            Skills and Tools
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#f2f2f2] rounded-lg p-6 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground/90 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-base text-foreground/70 group-hover:text-foreground/80 transition-colors duration-200">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white/80 rounded-lg p-2.5 hover:bg-white hover:shadow-sm transition-all duration-200"
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-base text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}