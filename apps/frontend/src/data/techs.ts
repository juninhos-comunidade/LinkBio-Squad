export interface Tech {
  name: string;
  color: string;
}

export interface TechCategory {
  category: string;
  techs: Tech[];
}

export const techsMock: TechCategory[] = [
  {
    category: "Frontend",
    techs: [
      { name: "React", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TailwindCSS", color: "#06b6d4" },
      { name: "Figma", color: "#f24e1e" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", color: "#68a063" },
      { name: "Python", color: "#ffd43b" },
      { name: "Go", color: "#00add8" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "GraphQL", color: "#e535ab" },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "Swift", color: "#fa7343" },
      { name: "Kotlin", color: "#7f52ff" },
    ],
  },
  {
    category: "DevOps",
    techs: [
      { name: "Docker", color: "#2496ed" },
      { name: "Kubernetes", color: "#326ce5" },
      { name: "AWS", color: "#ff9900" },
    ],
  },
];
