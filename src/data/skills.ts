export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Kotlin", "Python", "Java", "C", "Swift"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Jetpack Compose"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "VS Code"],
  },
    {
    category: "Mobile Development",
    skills: ["Android", "Jetpack Compose", "Coil", "Dagger", "Hilt", "Room", "Retrofit", "Coroutines"],
  },
];

export const education = {
  degree: "Bachelor of Arts in Computer Science",
  school: "Colgate University",
  duration: "2023 - 2027",
  gpa: "3.67/4.0",
};
