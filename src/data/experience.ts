export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  points: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "greenkwh.net",
    location: "Bangalore, Karnataka",
    type: "Full-Time",
    period: "Jan 2025 – Present",
    points: [
      "Built and integrated scalable REST APIs in Golang with Flutter frontend and React components, improving system responsiveness by 30%.",
      "Implemented Grafana dashboards with Prometheus & Pushgateway to visualize key product KPIs and IoT battery metrics.",
      "Worked with MongoDB and PostgreSQL to design schemas, optimize queries, and manage large-scale IoT data.",
      "Containerized services with Docker and deployed applications on AWS EC2 with CI/CD pipelines for production readiness.",
      "Used Git for version control and team collaboration, enabling smooth feature rollouts and code reviews.",
    ],
    technologies: [
      "Golang",
      "Flutter",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance Project",
    location: "Remote",
    type: "Freelance",
    period: "Nov 2024 – Dec 2024",
    points: [
      "Developed a responsive website (gyplife.com) using Flutter, enabling cross-platform accessibility.",
      "Deployed on GoDaddy with DNS configuration, ensuring 99.9% uptime and seamless access.",
      "Handled requirement gathering, design, development, and deployment, ensuring client satisfaction.",
    ],
    technologies: ["Flutter", "Dart", "GoDaddy", "DNS", "Responsive Design"],
  },
];