export interface SkillCategory {
  id: number;
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "Golang", level: 90 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "Dart", level: 80 },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Flutter", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Responsive UI", level: 85 },
    ],
  },
  {
    id: 3,
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Golang (Echo, Gin)", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    id: 4,
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    id: 5,
    category: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS EC2", level: 80 },
      { name: "Grafana", level: 80 },
      { name: "Prometheus", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    id: 6,
    category: "Other",
    icon: "🧠",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "System Design", level: 75 },
    ],
  },
];