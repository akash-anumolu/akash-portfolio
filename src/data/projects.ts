export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IoT Battery Monitoring System",
    year: "2025",
    description:
      "Real-time IoT battery tracking system scalable to 300+ devices with live dashboards.",
    longDescription:
      "Developed a complete backend in Golang with Prometheus metrics integration and Grafana visualization for real-time IoT battery tracking. The system is designed to be scalable to 300+ devices with efficient data pipelines and monitoring capabilities.",
    technologies: [
      "Golang",
      "Prometheus",
      "Grafana",
      "Docker",
      "PostgreSQL",
      "REST API",
    ],
    github: "https://github.com/akash-anumolu",
  },
  {
    id: 2,
    title: "Online Auction System",
    year: "2024",
    description:
      "Full-stack MERN application supporting real-time bidding and authentication.",
    longDescription:
      "Built a comprehensive MERN stack application supporting real-time bidding functionality, secure user authentication, and scalable auction services. Features include live bid updates, user dashboards, and admin management panels.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
    ],
    github: "https://github.com/akash-anumolu",
  },
  {
    id: 3,
    title: "Task Manager",
    year: "2024",
    description:
      "Efficient task management application with Golang backend and MongoDB storage.",
    longDescription:
      "Designed and built a task management application with a Golang backend and MongoDB database. Features include full CRUD API operations, task categorization, priority management, and efficient task tracking workflows.",
    technologies: ["Golang", "MongoDB", "REST API", "Echo", "Docker"],
    github: "https://github.com/akash-anumolu",
  },
];